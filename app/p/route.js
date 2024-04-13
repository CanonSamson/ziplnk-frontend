import { connect } from "@/db";
import { NextResponse } from "next/server";
import pUrlsSchema from "@/models/ShortUrl";

export async function GET(req, { params }) {
  try {
    const { short_url } = params;

    await connect();

    const url = await pUrlsSchema.findOne({ short_url });

    if (url) {
      // Perform an HTTP redirect to the original URL
      return new NextResponse(null, {
        status: 302,
        headers: {
          Location: url.original_url,
        },
      });
    } else {
      // Redirect to a 404 page or any other error page
      return new NextResponse(JSON.stringify({ message: "404" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
      }
    );
  }
}
