/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  // exclude: ["/excluded-path"], // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: ['/api/og/*'],
      },
      {
        userAgent: '*',
        disallow: ['/disallow'],
      },
    ],
  },
}
