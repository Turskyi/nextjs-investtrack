import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/privacy-android",
  "/privacy",
  "/instruction",
  "/about",
  "/contact",
  "/terms",
  "/account-deleted",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/anonymous-chat-web-en",
  "/api/anonymous-chat-web-ua",
  "/api/anonymous-chat",
  "/api/anonymous-chat-android-en",
  "/api/chat-android-en",
  "/api/anonymous-chat-android-ua",
  "/api/chat-android-ua",
  "/api/anonymous-chat-ios-en",
  "/api/anonymous-chat-ios-ua",
  "/api/investments",
  "/api/delete-user",
  "/api/finance",
  "/api/change",
  "/api/change-percentage",
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
