import { createAdminClient } from "@mirai-gikai/supabase";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const supabase = createAdminClient();
  await supabase.from("diet_sessions").select("id").limit(1);
  return NextResponse.json({ ok: true });
}
