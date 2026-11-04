import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context: any) {
  const items = (await getCollection('artikelen', (e) => !e.data.draft)).sort((a, b) => +b.data.updated - +a.data.updated);
  return rss({ title: 'Getest door senioren', description: 'Eerlijke vergelijkingen voor senioren en hun familie', site: context.site,
    items: items.map((e) => ({ title: e.data.title, description: e.data.description, pubDate: e.data.updated, link: `/${e.id}/` })) });
}
