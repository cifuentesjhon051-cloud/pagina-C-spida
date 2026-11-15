import { config } from '../config';
export const GET = () =>
  new Response(`User-agent: *\nAllow: /\nDisallow: /privacidad\n${config.sitio ? `\nSitemap: ${config.sitio}/sitemap.xml\n` : ''}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
