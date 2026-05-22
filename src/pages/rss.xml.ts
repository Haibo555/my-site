import rss from '@astrojs/rss';
import { siteConfig } from '@/site.config';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  return rss({
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    site: 'https://my-site-topaz-one-84.vercel.app',
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.slug}`,
      })),
  });
}
