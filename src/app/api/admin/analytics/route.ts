import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import AnalyticEvent from "@/models/AnalyticEvent";

export async function GET() {
  try {
    await connectDB();

    // 1. Total Stats
    const totalStats = await AnalyticEvent.aggregate([
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 },
        },
      },
    ]);

    // 2. Page Views by Day (Last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const dailyStats = await AnalyticEvent.aggregate([
      {
        $match: {
          timestamp: { $gte: sevenDaysAgo },
        },
      },
      {
        $group: {
          _id: {
            day: { $dayOfMonth: "$timestamp" },
            month: { $month: "$timestamp" },
            type: "$type"
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.month": 1, "_id.day": 1 } }
    ]);

    // 3. Top Clicked Elements
    const topInteractions = await AnalyticEvent.aggregate([
      { $match: { type: "click" } },
      {
        $group: {
          _id: "$element",
          label: { $first: "$label" },
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // 4. Top Pages
    const topPages = await AnalyticEvent.aggregate([
      { $match: { type: "page_view" } },
      {
        $group: {
          _id: "$page",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    return NextResponse.json({
      totalStats,
      dailyStats,
      topInteractions,
      topPages
    });
  } catch (error) {
    console.error("Analytics fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
  }
}
