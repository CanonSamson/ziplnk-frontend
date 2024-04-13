import { connect } from "@/db";
import { NextResponse } from "next/server";
import pUrlsSchema from "@/models/ShortUrl";

export async function POST(request) {
  try {
    await connect();

    const body = await request.json();
    const { original_url } = body;

    let shortUrl;
    let existingShortUrl;

    do {
      shortUrl = generateShortUrl();
      existingShortUrl = await pUrlsSchema.findOne({ short_url: shortUrl });
    } while (existingShortUrl);

    const url = { ip: request.ip, short_url: shortUrl, original_url };
    await pUrlsSchema.create(url);

    return NextResponse.json(url, { status: 201 }); // Fix the typo here
  } catch (error) {
    console.error("Error saving to MongoDB:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function generateShortUrl() {
  // Generate a random short URL for simplicity
  return Math.random().toString(36).substr(2, 6);
}
