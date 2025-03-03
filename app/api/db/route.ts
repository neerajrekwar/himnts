import { NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function GET() {
  try {
    const currentTime = new Date().toISOString(); // Current time
    const lastActiveTime = (await redis.get("last_active")) || "Never"; // Get last active time

    // Update Redis with the current time as the last active time
    await redis.set("last_active", currentTime);

    return NextResponse.json({
      success: true,
      message: "Connected!",
      data: {
        serverUpTime: currentTime,
        lastActiveServer: lastActiveTime,
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to connect.",
      error,
    });
  }
}
