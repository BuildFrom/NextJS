import { Metadata } from "next";
import Link from "next/link";
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
import { BackArrow, Bell } from "@/lib/icons";

import React from "react";
import { registerAction } from "@/app/(auth)/register/actions";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Register",
  description: "Register an account",
};

export default function Register() {
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
            <CardHeader>
              <Bell width={20} height={20} />
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Get accepted to any university in the world.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={registerAction}>
                <Input
                  className="mb-5"
                  name="name"
                  id="name"
                  type="name"
                  placeholder="
                                    Name"
                />
                <Input
                  className="mb-5"
                  name="username"
                  id="username"
                  type="username"
                  placeholder="
                                    Username"
                />
                <Input
                  className="mb-5"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="
                                    Email"
                />
                <Input
                  className="mb-5"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <Input
                  name="confirm_password"
                  id="confirm_password"
                  type="confirm_password"
                  placeholder="Confirm Password"
                />
              </form>
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
          </Card>

          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="login"
              className="hover:text-brand underline underline-offset-4"
            >
              Already have an account? Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
