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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const level = searchParams.get("level");

    const supabase = await createClient();

    let query = supabase
      .from("challenges")
      .select(`
        *,
        dev:devs(*)
      `);

    // Apply filters if provided
    if (type) {
      query = query.eq("type", type);
    }
    if (level) {
      query = query.eq("level", level);
    }

    const { data: challenges, error } = await query.order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching challenges:", error);
      return NextResponse.json(
        { error: "Failed to fetch challenges" },
        { status: 500 }
      );
    }

    // Transform the data to match the old API format
    const transformedChallenges = challenges?.map(transformChallenge) || [];

    return NextResponse.json(transformedChallenges);
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
    const {
      name,
      description,
      level,
      type,
      techs,
      images,
      background,
      github_url,
      brief,
      dev_id,
    } = body;

    // Validation
    if (!name || !description || !level || !type) {
      return NextResponse.json(
        { error: "Missing required fields: name, description, level, type" },
        { status: 400 }
      );
    }

    // Validate level
    const validLevels = ['beginner', 'intermediate', 'advanced', 'iniciante', 'intermediário', 'avançado'];
    if (!validLevels.includes(level)) {
      return NextResponse.json(
        { error: `Invalid level. Must be one of: ${validLevels.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate type
    const validTypes = ['Frontend', 'Backend', 'Mobile'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: `Invalid type. Must be one of: ${validTypes.join(', ')}` },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Get current user if authenticated
    const { data: { user } } = await supabase.auth.getUser();

    // Prepare techs array - handle both string and array formats
    let techsArray: string[] = [];
    if (techs) {
      if (typeof techs === 'string') {
        techsArray = techs.split(',').map((t: string) => t.trim()).filter(Boolean);
      } else if (Array.isArray(techs)) {
        techsArray = techs;
      }
    }

    // Prepare images array
    const imagesArray = Array.isArray(images) ? images : (images ? [images] : []);

    // If dev_id is provided, verify it exists
    let finalDevId = dev_id || null;
    if (dev_id) {
      const { data: dev, error: devError } = await supabase
        .from("devs")
        .select("id")
        .eq("id", dev_id)
        .single();

      if (devError || !dev) {
        return NextResponse.json(
          { error: "Invalid dev_id provided" },
          { status: 400 }
        );
      }
    }

    // Insert challenge
    const { data: challenge, error } = await supabase
      .from("challenges")
      .insert([
        {
          name,
          description,
          level,
          type,
          techs: techsArray,
          images: imagesArray,
          background: background || null,
          github_url: github_url || null,
          brief: brief || null,
          dev_id: finalDevId,
        },
      ])
      .select(`
        *,
        dev:devs(*)
      `)
      .single();

    if (error) {
      console.error("Error creating challenge:", error);
      return NextResponse.json(
        { error: "Failed to create challenge" },
        { status: 500 }
      );
    }

    return NextResponse.json(transformChallenge(challenge), { status: 201 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

