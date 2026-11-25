import { getCollection, type CollectionEntry } from "astro:content";

export type Issue = CollectionEntry<"issues">;

export async function getIssues(): Promise<Issue[]> {
  const all = await getCollection("issues", ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.number - a.data.number);
}

const longDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const shortDate = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
const monthYear = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

export const formatDate = (d: Date) => longDate.format(d);
export const formatShort = (d: Date) => shortDate.format(d);
export const formatMonth = (d: Date) => monthYear.format(d);

// Minutes to read an issue, from its rendered text at about 200 words a minute.
export function readingMinutes(issue: Issue): number {
  const text = (issue.rendered?.html ?? issue.body ?? "").replace(/<[^>]+>/g, " ").trim();
  const words = text ? text.split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 200));
}
