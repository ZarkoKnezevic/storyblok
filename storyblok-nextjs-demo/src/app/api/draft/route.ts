// Route handler with secretToken and slug
import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secretToken = searchParams.get("secretToken");
  const slug = searchParams.get("slug");

  if (secretToken !== process.env.SECRET_PREVIEW_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }
  draftMode().enable();
  cookies().set({ name: "secretToken", value: secretToken, sameSite: "none", secure: true, maxAge: 60 * 60 });

  cookies()
    .getAll()
    .forEach(cookie => {
      cookies().set({ name: cookie.name, value: cookie.value, sameSite: "none", secure: true });
    });

  redirect(`/${slug}?secretToken=${secretToken}`);
}