"use server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { validate } from "@/lib/index";
import connectDB from "@/lib/database";

const API_ENDPOINT = "https://localhost:8443/api/auth";

export async function login(formData: FormData) {
  await connectDB();

  const data = validate.loginSchema.safeParse(Object.fromEntries(formData));

  if (!data.success) {
    console.error("Validation Error:", data.error);
    return { success: false, error: data.error };
  }

  const response = await fetch(`${API_ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const res = await response.json();

  revalidatePath("/");

  throw redirect("/");
}

// implement backend and adjust the code to use jwt.ts to sign the token and also add rate-limiter from rate-limit.ts in lib

// old code

// const tokenSecret = new TextEncoder().encode(process.env.TOKEN_SECRET);

// const token = await new SignJWT({
//   userId: res.user.userId,
//   username: res.user.username,
//   role: res.user.role,
// })
//   .setProtectedHeader({ alg: "HS256", typ: "JWE" })
//   .setIssuedAt()
//   .setExpirationTime("1w")
//   .setJti("1a2b-3c4d-5e6f-7g8h")
//   .setSubject("auth")
//   .sign(tokenSecret);

// cookies().set({
//   name: "name",
//   value: token,
//   httpOnly: true,
//   path: "/",
// });
