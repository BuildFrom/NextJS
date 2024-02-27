import Link from "next/link";

import { Button } from "@/shadcn/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function AuthNotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-600">
      <Card className="w-[420px]">
        <CardHeader className="text-center">
          <CardTitle className="lg:text-7xl text-4xl">404</CardTitle>
          <CardDescription>
            Auth The page you’re looking for doesn’t exist.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Go Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AuthNotFound;
