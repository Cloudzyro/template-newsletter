import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "../data/site";
import { getIssues } from "../lib/issues";

export async function GET(context: APIContext) {
  const issues = await getIssues();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: issues.map((issue) => ({
      title: `No. ${issue.data.number}: ${issue.data.title}`,
      description: issue.data.dek,
      pubDate: issue.data.date,
      link: `/issues/${issue.id}/`,
      content: issue.rendered?.html,
    })),
    customData: "<language>en-us</language>",
  });
}
