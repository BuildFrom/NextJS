import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/shadcn/button";
import React from "react";
import { BackArrow, Bell } from "@/lib/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shadcn/card";

import LoginForm from "./login-form";

function Login() {
  return (
    <>
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute left-4 top-4 md:left-8 md:top-8"
          )}
        >
          <BackArrow width={20} height={20} />
          Back
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center sm:w-[350px]">
          <Card>
            <CardHeader className="text-center">
              <Bell width={20} height={20} />
              <CardTitle>Login</CardTitle>
              <CardDescription>Welcome Back</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
          <p className="px-8 mt-5 text-center text-sm text-muted-foreground">
            <Link
              href="register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don't have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
