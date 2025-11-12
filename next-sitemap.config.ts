import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://amarbiradar.me", // your live domain
  generateRobotsTxt: true, // also create robots.txt
  sitemapSize: 7000, // chunk size
  changefreq: "weekly", // how often pages change
  priority: 0.7, // general importance
  exclude: ["/404"], // skip 404 page
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://amarbiradar.me/sitemap.xml"],
  },
};

export default config;
