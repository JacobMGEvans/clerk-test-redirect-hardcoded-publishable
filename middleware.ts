import { authMiddleware } from "@clerk/nextjs";
import { redirectToSignIn } from "@clerk/nextjs/server";

export default authMiddleware({
  secretKey: "sk_test_...",
  publishableKey: "pk_test_...",
  afterAuth: (auth) => {
    if (!auth.isPublicRoute && !auth.userId) {
      return redirectToSignIn();
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
