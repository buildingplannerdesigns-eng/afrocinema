import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("<test/>", {
    headers: { "Content-Type": "application/xml" }
  });
}
