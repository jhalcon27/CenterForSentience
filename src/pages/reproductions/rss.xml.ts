import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const reproductions = await getCollection('reproductions', ({ data }: CollectionEntry<'reproductions'>) => !data.draft);
  const sorted = reproductions.sort((a: CollectionEntry<'reproductions'>, b: CollectionEntry<'reproductions'>) => b.data.updated.getTime() - a.data.updated.getTime());

  return rss({
    title: 'Center for Sentience Research · Reproductions',
    description: 'Independent reproductions of published mechanistic interpretability results.',
    site: context.site ?? 'https://centerforsentience.org',
    items: sorted.map((entry: CollectionEntry<'reproductions'>) => ({
      title: entry.data.title,
      pubDate: entry.data.updated,
      description: entry.data.claim,
      link: `/reproductions/${entry.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
