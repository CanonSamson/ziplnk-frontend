export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
      sitemap: "http://ziplnk.xyz/sitemap.xml",
    };
  }
  