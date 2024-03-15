import * as z from "zod";
import { r } from "@/lib/index";

const loginSchema = z.object({
  username: r.usernameRule,
  password: r.passwordRule,
});

const registerSchema = z
  .object({
    name: r.nameSchema,
    username: r.usernameRule,
    email: r.emailRule,
    password: r.passwordRule,
    confirm_password: r.passwordRule,
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const validate = {
  loginSchema,
  registerSchema,
};

export default validate;
