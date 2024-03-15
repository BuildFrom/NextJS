"use server";
import { cache } from "react";
import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

const JWTToken = new TextEncoder().encode(process.env.JWT_TOKEN);

const getUserByToken = cache(async (token: string): Promise<string | null> => {
  const jwt = await jwtVerify(token, JWTToken, { algorithms: ["HS256"] });
  const userId = jwt.payload.sub;
  if (!userId) return null;

  return userId;
});

const createUserToken = (user: { id: string }) => {
  return new SignJWT()
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setNotBefore("-1min")
    .setExpirationTime("7d")
    .setSubject(user.id.toString())
    .sign(JWTToken);
};

const addUserTokenToCookie = async (user: { id: string }) => {
  const token = await createUserToken(user);
  cookies().set("token", token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    path: "/",
  });
};

// const getCurrentUser = async () => {
//   const token = cookies().get("token");
//   if (!token) return null;
//   try {
//     return await getUserByToken(token.value);
//   } catch (e) {
//     console.log(e);
//     return null;
//   }
// };

const jwt = {
  //   getCurrentUser,
  addUserTokenToCookie,
  getUserByToken,
  createUserToken,
};

export default jwt;
