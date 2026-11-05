import { getCollection } from 'astro:content';
export async function GET() {
  const items = (await getCollection('artikelen', (e) => !e.data.draft)).sort((a, b) => a.data.order - b.data.order);
  const body = `# Getest door senioren\n\n> Onafhankelijke Nederlandse vergelijkingen van producten voor senioren, te beginnen met seniorentelefoons. Vergelijkingen op basis van fabrieksgegevens en kopersreviews; een testpanel van senioren is in opbouw.\n\n## Vergelijkingen en gidsen\n\n${items.map((e) => `- [${e.data.title}](https://getestdoorsenioren.nl/${e.id}/): ${e.data.description}`).join('\n')}\n\n## Over de site\n\n- [Zo vergelijken wij](https://getestdoorsenioren.nl/zo-vergelijken-wij/)\n- [Over ons](https://getestdoorsenioren.nl/over-ons/)\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
