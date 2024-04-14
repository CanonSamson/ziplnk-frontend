import { connect } from "@/db";
import { NextResponse } from "next/server";
import pUrlsSchema from "@/models/ShortUrl";

export async function POST(req) {
  try {
    await connect();

    const body = await req.json();
    const { original_url, uuid } = body;

    let shortUrl;
    let existingShortUrl;

    do {
      shortUrl = generateShortUrl();
      existingShortUrl = await pUrlsSchema.findOne({ short_url: shortUrl });
    } while (existingShortUrl);

    const url = { uuid: uuid, short_url: shortUrl, original_url };
    await pUrlsSchema.create(url);

    return NextResponse.json(url, { status: 201 });
  } catch (error) {
    console.error("error saving to mongo_db:", error);
    return NextResponse.json(
      { error: "Internal Server error" },
      { status: 500 }
    );
  }
}

const generateShortUrl = () => {
  return Math.random().toString(36).substr(2, 6);
};
