import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// Helper function to transform dev data
function transformDev(dev: any) {
  return {
    _id: dev.id,
    name: dev.name,
    position: dev.position,
    avatar: dev.avatar,
    github: dev.github,
    linkedin: dev.linkedin,
    createdAt: dev.created_at,
    updatedAt: dev.updated_at,
  };
}

export async function GET() {
  try {
    const supabase = await createClient();

    const { data: devs, error } = await supabase
      .from("devs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching devs:", error);
      return NextResponse.json(
        { error: "Failed to fetch devs" },
        { status: 500 }
      );
    }

    // Transform the data to match the old API format
    const transformedDevs = devs?.map(transformDev) || [];

    return NextResponse.json(transformedDevs);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, position, avatar, github, linkedin } = body;

    // Validation
    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Insert dev
    const { data: dev, error } = await supabase
      .from("devs")
      .insert([
        {
          name,
          position: position || null,
          avatar: avatar || null,
          github: github || null,
          linkedin: linkedin || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating dev:", error);
      return NextResponse.json(
        { error: "Failed to create dev" },
        { status: 500 }
      );
    }

    return NextResponse.json(transformDev(dev), { status: 201 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

