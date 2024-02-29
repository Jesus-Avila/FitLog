import { NextResponse } from "next/server";
import { createKysely } from "../../../lib/database/db";

export async function GET(): Promise<NextResponse> {
  console.log("GET");
  const db = createKysely();
  console.log("db");
  

  const users = await db.selectFrom("user").selectAll().execute();
  console.log("users", users);

  return new NextResponse(JSON.stringify(users));
}
