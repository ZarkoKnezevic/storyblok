// Route handler with secret and slug
import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Parse query string parameters
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.STORYBLOK_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();
  cookies().set({ name: "secret", value: secret, sameSite: "none", secure: true, maxAge: 60 * 60 });

  cookies()
    .getAll()
    .forEach(cookie => {
      cookies().set({ name: cookie.name, value: cookie.value, sameSite: "none", secure: true });
    });

  redirect(`/${slug}?secret=${secret}`);
}