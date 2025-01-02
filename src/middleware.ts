import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
  isAuthenticatedNextjs,
} from "@convex-dev/auth/nextjs/server";

const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware(async (request) => {
  const isAuthenticatedUser = await isAuthenticatedNextjs(); // Convex handles the context internally

  // Redirect unauthenticated users from private pages to "/auth"
  if (!isPublicPage(request) && !isAuthenticatedUser) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }

  // Redirect authenticated users away from "/auth" to "/"
  if (isPublicPage(request) && isAuthenticatedUser) {
    return nextjsMiddlewareRedirect(request, "/");
  }

  return undefined; // Proceed as normal if no redirection is needed
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
