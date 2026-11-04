export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: https://getestdoorsenioren.nl/sitemap-index.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
}
