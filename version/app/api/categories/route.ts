import { NextResponse } from "next/server";

// Categories endpoint - returns static categories
// This matches the old API structure but doesn't require database
export async function GET() {
  const categories = [
    { id: 1, name: "Frontend" },
    { id: 2, name: "Backend" },
    { id: 3, name: "Mobile" },
  ];

  return NextResponse.json(categories);
}

