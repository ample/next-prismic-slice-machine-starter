/** @type {import('next-sitemap').IConfig} */

module.exports = {
  exclude: ['/slice-simulator'],
  generateRobotsTxt: true,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://site-url.com',
}
