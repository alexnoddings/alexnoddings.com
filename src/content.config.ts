import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: z.string(),
    icon: z.string(),
    theme: z.hex(),
    summary: z.array(z.string()),
    tags: z.array(z.string()),
    on: z.union([
      z.literal("CloudflareWorkers"),
      z.literal("GitHubPages"),
      z.literal("NuGet"),
      z.literal("SelfHostDocker")
    ]),
    links: z.array(
      z.object({
        href: z.string(),
        text: z.string(),
      }),
    ),
  }),
});

export const collections = {
  projects,
};
