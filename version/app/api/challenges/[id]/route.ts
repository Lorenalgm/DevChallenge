import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// Helper function to transform challenge data
function transformChallenge(challenge: any) {
  const dev = challenge.dev as any;
  return {
    _id: challenge.id,
    name: challenge.name,
    description: challenge.description,
    level: challenge.level,
    type: challenge.type,
    techs: challenge.techs || [],
    images: challenge.images || [],
    background: challenge.background,
    github_url: challenge.github_url,
    brief: challenge.brief,
    dev_id: dev ? {
      _id: dev.id,
      name: dev.name,
      position: dev.position,
      avatar: dev.avatar,
      github: dev.github,
      linkedin: dev.linkedin,
    } : null,
    createdAt: challenge.created_at,
    updatedAt: challenge.updated_at,
  };
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { error: "Challenge ID is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data: challenge, error } = await supabase
      .from("challenges")
      .select(`
        *,
        dev:devs(*)
      `)
      .eq("id", id)
      .single();

    if (error || !challenge) {
      console.error("Error fetching challenge:", error);
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(transformChallenge(challenge));
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Challenge ID is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Check if challenge exists
    const { data: existing, error: checkError } = await supabase
      .from("challenges")
      .select("id")
      .eq("id", id)
      .single();

    if (checkError || !existing) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: any = {};
    if (body.name !== undefined) updateData.name = body.name;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.level !== undefined) {
      const validLevels = ['beginner', 'intermediate', 'advanced', 'iniciante', 'intermediário', 'avançado'];
      if (!validLevels.includes(body.level)) {
        return NextResponse.json(
          { error: `Invalid level. Must be one of: ${validLevels.join(', ')}` },
          { status: 400 }
        );
      }
      updateData.level = body.level;
    }
    if (body.type !== undefined) {
      const validTypes = ['Frontend', 'Backend', 'Mobile'];
      if (!validTypes.includes(body.type)) {
        return NextResponse.json(
          { error: `Invalid type. Must be one of: ${validTypes.join(', ')}` },
          { status: 400 }
        );
      }
      updateData.type = body.type;
    }
    if (body.techs !== undefined) {
      updateData.techs = Array.isArray(body.techs) 
        ? body.techs 
        : (typeof body.techs === 'string' 
          ? body.techs.split(',').map((t: string) => t.trim()).filter(Boolean)
          : []);
    }
    if (body.images !== undefined) {
      updateData.images = Array.isArray(body.images) ? body.images : [body.images];
    }
    if (body.background !== undefined) updateData.background = body.background;
    if (body.github_url !== undefined) updateData.github_url = body.github_url;
    if (body.brief !== undefined) updateData.brief = body.brief;
    if (body.dev_id !== undefined) updateData.dev_id = body.dev_id;

    const { data: challenge, error } = await supabase
      .from("challenges")
      .update(updateData)
      .eq("id", id)
      .select(`
        *,
        dev:devs(*)
      `)
      .single();

    if (error) {
      console.error("Error updating challenge:", error);
      return NextResponse.json(
        { error: "Failed to update challenge" },
        { status: 500 }
      );
    }

    return NextResponse.json(transformChallenge(challenge));
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Challenge ID is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from("challenges")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting challenge:", error);
      return NextResponse.json(
        { error: "Failed to delete challenge" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Challenge deleted successfully" });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

