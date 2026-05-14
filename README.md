# TS Edu Suite Marketing Website

A premium SaaS-style marketing website and lead capture funnel for TS Edu Suite.

## Structure

- `app/` - Next.js app pages and layout
- `api/submit-lead.php` - PHP lead capture endpoint
- `public/robots.txt` - Robots rules
- `public/sitemap.xml` - Sitemap for SEO
- `db/schema.sql` - MySQL schema for leads

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for static deployment:
   ```bash
   npm run build
   ```

The build output is generated into the `out/` directory because the project uses Next.js static export mode.

## Deployment

Exported files will be available in `out/`. Copy the contents of `out/` to the `tsedusuite.teamsource.net` root folder on cPanel.

Put the existing application under `/app` and keep the marketing website at `/`.

## PHP Endpoint

Deploy `api/submit-lead.php` to `tsedusuite.teamsource.net/api/submit-lead.php`.

## Database

Create the `leads` table using `db/schema.sql`.
