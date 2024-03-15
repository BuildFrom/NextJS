"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/shadcn/button";
import { Input } from "@/shadcn/input";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validate } from "@/lib/index";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/form";
import { login } from "./actions";

function LoginForm() {
  const form = useForm<z.infer<typeof validate.loginSchema>>({
    resolver: zodResolver(validate.loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof validate.loginSchema>) => {
    console.log("values", values);
  };

  return (
    <>
      <Form {...form}>
        <form
          // action={login}
          // method="post"
          onSubmit={form.handleSubmit(() => {
            onSubmit(form.getValues());
          })}
          className={cn("space-y-6")}
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" placeholder="Username" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="text-sm text-center text-muted-foreground mb-5">
            <Link
              href="#"
              className="hover:text-brand underline underline-offset-4"
            >
              Forgot your password or username?
            </Link>
          </p>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
}

export default LoginForm;
