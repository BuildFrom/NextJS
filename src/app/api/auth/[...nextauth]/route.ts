// export { GET, POST } from "@/utils/auth";

import authConfig from "@/lib/utils/auth.config";
import NextAuth from "next-auth";

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
