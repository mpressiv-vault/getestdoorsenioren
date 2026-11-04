import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artikelen = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/artikelen' }),
  schema: z.object({
    title: z.string(),
    seo_title: z.string().optional(),
    description: z.string(),
    type: z.enum(['pillar', 'vergelijking', 'product', 'vs', 'gids', 'pagina']),
    hub: z.string().default('telefoons'),
    primary_kw: z.string(),
    secondary_kws: z.array(z.string()).default([]),
    products: z.array(z.string()).default([]),
    picks: z.array(z.object({ situatie: z.string(), product: z.string(), reden: z.string() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    panel_tested: z.boolean().default(false),
    changelog: z.array(z.object({ datum: z.coerce.date(), wat: z.string() })).default([]),
    order: z.number().default(50),
    draft: z.boolean().default(false),
  }),
});

export const collections = { artikelen };
