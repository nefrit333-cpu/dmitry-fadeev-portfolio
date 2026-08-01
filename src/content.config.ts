import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    url: z.url().optional(),
    companyLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.url(),
        }),
      )
      .optional(),
    order: z.number(),
    highlights: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    role: z.string(),
    titleHref: z.url().optional(),
    order: z.number(),
    stack: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.url(),
        }),
      )
      .default([]),
    outcomes: z.array(z.string()),
  }),
});

export const collections = { experience, projects };
