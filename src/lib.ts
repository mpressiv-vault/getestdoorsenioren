import products from './data/products.json';
import partners from './data/partners.json';

export type Product = (typeof products)[number];
export const allProducts = products as Product[];
export const byId = (id: string) => allProducts.find((p) => p.id === id);

export const euro = (n?: number | null) =>
  n == null ? 'prijs onbekend' : new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: n % 1 ? 2 : 0 }).format(n);

export const datum = (d: Date | string) =>
  new Intl.DateTimeFormat('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(d));

const UTM = 'utm_source=getestdoorsenioren&utm_medium=referral&utm_campaign=vergelijking';

/** Koopknoppen: partnerlink als die er is, anders gewone link met UTM. */
export function koopLinks(p: any): { label: string; url: string; affiliate: boolean; prijs?: number | null }[] {
  return (p.koop ?? []).map((k: any) => {
    const partner = (partners as any)[k.partner] ?? {};
    const tpl: string | undefined = partner.link_template;
    const url = tpl ? tpl.replace('{url}', encodeURIComponent(k.url)) : k.url + (k.url.includes('?') ? '&' : '?') + UTM;
    return { label: partner.naam ?? k.naam ?? k.partner, url, affiliate: Boolean(tpl), prijs: k.prijs ?? null };
  });
}

export const yesNo = (v: any) => (v === true ? 'Ja' : v === false ? 'Nee' : v == null || v === 'onbekend' ? 'Onbekend' : String(v));
