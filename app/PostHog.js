"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

const PostHog = () => {
  const apiKey = process.env.POSTHOG_API_KEY;
  const apiHost = "https://app.posthog.com";
  useEffect(() => {
    posthog.init(apiKey, { api_host: apiHost });
  }, [apiKey, apiHost]);

  return null;
};

export default PostHog;
