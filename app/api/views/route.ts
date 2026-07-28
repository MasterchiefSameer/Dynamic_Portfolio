import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;

// Local JSON File configuration (Dev Fallback)
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "views.json");

function getLocalViews() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      const initial = { total: 0, unique: 0 };
      fs.writeFileSync(DATA_FILE, JSON.stringify(initial), "utf8");
      return initial;
    }
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (e) {
    return { total: 0, unique: 0 };
  }
}

function updateLocalViews(total: number, unique: number) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify({ total, unique }), "utf8");
  } catch (e) {
    console.error("Failed to write local views:", e);
  }
}

// Upstash / Vercel KV REST helper
async function runKvCommand(command: string[]): Promise<any> {
  if (!KV_URL || !KV_TOKEN) return null;
  try {
    const res = await fetch(KV_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(command),
      cache: "no-store",
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.result;
  } catch (e) {
    return null;
  }
}

export async function POST() {
  const cookieStore = await cookies();
  const hasVisited = cookieStore.has("portfolio-visited");

  let total = 0;
  let unique = 0;
  const isUnique = !hasVisited;

  if (KV_URL && KV_TOKEN) {
    const pipeline = [
      ["HINCRBY", "portfolio:views", "total", "1"]
    ];
    if (isUnique) {
      pipeline.push(["HINCRBY", "portfolio:views", "unique", "1"]);
    }
    
    const pipelineUrl = KV_URL.endsWith("/pipeline") ? KV_URL : `${KV_URL}/pipeline`;
    try {
      const res = await fetch(pipelineUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KV_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pipeline),
        cache: "no-store",
      });
      if (res.ok) {
        const getRes = await runKvCommand(["HMGET", "portfolio:views", "total", "unique"]);
        if (getRes && Array.isArray(getRes)) {
          total = parseInt(getRes[0] || "0", 10);
          unique = parseInt(getRes[1] || "0", 10);
        }
      }
    } catch (e) {
      console.error("Vercel KV pipeline failed:", e);
    }
  }

  // Local JSON fallback if Vercel KV is not configured or fails
  if (total === 0) {
    const local = getLocalViews();
    total = local.total + 1;
    unique = isUnique ? local.unique + 1 : local.unique;
    updateLocalViews(total, unique);
  }

  const response = NextResponse.json({ total, unique });

  if (isUnique) {
    // Cookie persists for 3 days
    response.cookies.set("portfolio-visited", "true", {
      maxAge: 60 * 60 * 24 * 3,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
  }

  return response;
}

export async function GET() {
  let total = 0;
  let unique = 0;

  if (KV_URL && KV_TOKEN) {
    const getRes = await runKvCommand(["HMGET", "portfolio:views", "total", "unique"]);
    if (getRes && Array.isArray(getRes)) {
      total = parseInt(getRes[0] || "0", 10);
      unique = parseInt(getRes[1] || "0", 10);
    }
  }

  if (total === 0) {
    const local = getLocalViews();
    total = local.total;
    unique = local.unique;
  }

  return NextResponse.json({ total, unique });
}
