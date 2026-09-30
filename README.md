# Noor E Saher — Website Code

This is the complete static website: HTML, CSS, JavaScript, project images, fonts, and font licenses. No build step or package installation is required.

## Preview locally

1. Clone or download this repository.
2. Open a terminal in the repository folder.
3. Run: `python -m http.server 3000`
4. Visit: `http://localhost:3000`

On Windows, `py -m http.server 3000` may be the appropriate command.

A local web server is recommended for previewing the complete website. Asset paths are relative so the site can also work under a repository path.

## Edit the website

- index.html: page content, social links, contact email, and sharing metadata.
- styles.css: colors, typography, spacing, and responsive layouts.
- app.js: portfolio filtering, project previews, navigation, and the email brief composer.
- assets/: project images, local fonts, favicon, social sharing image, and font licenses.

When changing the email address, update both index.html and app.js.

The enquiry form opens an email draft in the visitor's email application. It does not send messages or store submissions on a server.

## Host elsewhere

Upload the repository files to a static hosting service. index.html must be at the root of the deployed site. Cloudflare Pages Direct Upload or Netlify manual deployment can serve these files without a build command.

After deploying to a new address, update the canonical URL and Open Graph URLs in index.html, the sitemap address in robots.txt, and the URL in sitemap.xml.

## Assets

Keep the font license files with the redistributed fonts. Project images are published work attributed to Noor E Saher; they are included for this personal portfolio.
