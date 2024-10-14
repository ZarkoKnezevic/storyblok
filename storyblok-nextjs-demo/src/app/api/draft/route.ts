// Route handler with secret and slug
import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = "9d68b1922607e07820a08df3a13f3b6";
  const slug = searchParams.get("slug");

  draftMode().enable();
  cookies().set({ name: "secret", value: secret, sameSite: "none", secure: true, maxAge: 60 * 60 });

  cookies()
    .getAll()
    .forEach(cookie => {
      cookies().set({ name: cookie.name, value: cookie.value, sameSite: "none", secure: true });
    });

  redirect(`/${slug}?secret=${secret}`);
}