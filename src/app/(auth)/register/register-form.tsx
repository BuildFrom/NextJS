"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/shadcn/button";
import { Input } from "@/shadcn/input";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validate } from "@/lib/index";
import { register } from "./actions";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/form";

const onSubmit = (values: z.infer<typeof validate.loginSchema>) => {
  console.log("values", values);
};

function RegisterForm() {
  const form = useForm<z.infer<typeof validate.registerSchema>>({
    resolver: zodResolver(validate.registerSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form
          action={register}
          onSubmit={form.handleSubmit(() => {
            onSubmit(form.getValues());
          })}
          className={cn("space-y-6")}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" placeholder="Email" />
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
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </>
  );
}

export default RegisterForm;
