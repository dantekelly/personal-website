import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const draft = await draftMode();
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const target = `/${slug}`;

  draft.enable();
  redirect(target);
}
