import {defineCollection} from 'astro:content';
import {glob} from 'astro/loaders';
import {z} from 'astro/zod';

const resume = defineCollection({
    loader: glob({base: './src/content/resume', pattern: '**/*.{md,mdx}'}),
    schema: z.object({
        id: z.number(),
        titles: z.array(
            z.object({
                name: z.string(),
                start: z.string(),
                end: z.string().optional()
            })
        ),
        sector: z.string(),
        techs: z.array(z.string()),
        skills: z.array(z.string()).optional(),
        summaries: z.array(z.string())
    }),
});

export const collections = {resume};
