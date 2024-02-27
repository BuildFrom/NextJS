import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/card";
import { Input } from "@/shadcn/input";
import React from "react";
import { BackArrow, Bell } from "@/lib/icons";
import { loginAction } from "./actions";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

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
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card className="text-center">
            <form action={loginAction}>
              <CardHeader>
                <Bell width={20} height={20} />
                <CardTitle>Login</CardTitle>
                <CardDescription>Welcome Back</CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  className="mb-5"
                  name="username"
                  id="username"
                  type="username"
                  placeholder="
                                    Username"
                />
                <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </CardContent>
              <p className="px-8 text-center text-sm text-muted-foreground mb-5">
                <Link
                  href="#"
                  className="hover:text-brand underline underline-offset-4"
                >
                  Forgot your password or username?
                </Link>
              </p>
              <CardFooter className="justify-center">
                <Button>Submit</Button>
              </CardFooter>
            </form>
          </Card>

          <p className="px-8 text-center text-sm text-muted-foreground">
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
