import { connect } from "@/db";
import { NextResponse } from "next/server";
import pUrlsSchema from "@/models/ShortUrl";

export async function GET(req, { params }) {
  try {
    const { uuid } = params;

    await connect();

    const url = await pUrlsSchema.find({ uuid });

    return NextResponse.json(url, { status: 201 });
  } catch (error) {
    console.error("error saving to mongo_db:", error);
    return NextResponse.json(
      { error: "Internal Server error" },
      { status: 500 }
    );
  }
}
