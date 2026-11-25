import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const issues = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/issues" }),
  schema: z.object({
    number: z.number().int().positive(),
    title: z.string(),
    // One sentence, used on lists, in the RSS feed and in social previews.
    dek: z.string(),
    date: z.coerce.date(),
    // Optional sponsor line shown after the first section.
    sponsor: z
      .object({ name: z.string(), text: z.string(), href: z.string() })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { issues };
