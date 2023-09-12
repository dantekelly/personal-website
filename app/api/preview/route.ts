import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const target = `/${slug}`;

  draftMode().enable();
  redirect(target);
}
