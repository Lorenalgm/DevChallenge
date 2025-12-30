import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Check if email already exists
    const { data: existing } = await supabase
      .from("newsletters")
      .select("id")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      // Return success even if already exists (don't reveal if email exists)
      return NextResponse.json(
        { message: "Successfully subscribed to newsletter" },
        { status: 200 }
      );
    }

    // Insert new newsletter subscription
    const { data, error } = await supabase
      .from("newsletters")
      .insert([{ email: email.toLowerCase() }])
      .select()
      .single();

    if (error) {
      console.error("Error subscribing to newsletter:", error);
      return NextResponse.json(
        { error: "Failed to subscribe to newsletter" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

