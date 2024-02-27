"use client";
import * as React from "react";
import { ModeToggle } from "@/components/index";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/shadcn/navigation-menu";
import { buttonVariants } from "./ui/button";
import { cn } from "../utils";
import Link from "next/link";

function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center ml-auto space-x-4">
          <ModeToggle />
          <NavigationMenu>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href="pricing">Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenu>
          <Link
            href="login"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
