# Hardiya Associates website

Static site: plain HTML, one CSS file, one small JS file. No build step, no framework.

Pages: `index.html`, `about.html`, `services.html`, `network.html` (branches and office photos), `contact.html`, plus `thank-you.html` and `404.html`.

## Before going live

1. **Domain**: canonical URLs, Open Graph tags, `sitemap.xml`, `robots.txt` and the form's `_next` redirect use `https://www.hardiyaassociates.com`. Find and replace it with the real domain.
2. **Contact form**: posts to FormSubmit (formsubmit.co) and sends to kapilhardiya@gmail.com. The first submission sends an activation email to that inbox. Click the link in it once, or no enquiries will arrive.
3. **Google Search Console**: submit `sitemap.xml` after launch, and claim or update the Google Business Profile with the same address and phone number.

## Deploy

Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, cPanel `public_html`). Set `404.html` as the not-found page if the host supports it.
