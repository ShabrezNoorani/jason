# jason

Portfolio website for **Jason Suri, Financial Analyst**. Built with [Vite](https://vite.dev), React and React Router. No backend, API keys or paid services.

## Setup

Requires Node.js 20 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
public/
  favicon.svg
  cv.pdf               <- add Jason's CV here (linked by the "Download CV" button)
src/
  assets/jason.png     portrait
  data/profile.js      all home page content (bio, experience, education, skills...)
  data/posts.js        blog posts
  components/          Header (sticky, hamburger on mobile), Footer
  pages/               Home, Blog, BlogPost, NotFound
  index.css            all styles; colours and fonts are CSS variables at the top
```

## Editing content

All home page text lives in `src/data/profile.js`. Replace each `[BRACKETED]` placeholder before publishing:

| Placeholder      | Where                          |
| ---------------- | ------------------------------ |
| `[TAGLINE]`      | `profile.tagline` (hero)       |
| `[BIO]`          | `profile.bio` (About section; one string per paragraph) |
| `[EMAIL]`        | `profile.contact.email`        |
| `[PHONE]`        | `profile.contact.phone`        |
| `[LINKEDIN_URL]` | `profile.contact.linkedin` (full URL, starting with `https://`) |

- **Experience**: edit the `experience` array. Entries with `bullets` show a bullet list; entries with `skills` show small tags. `highlight: true` fills the timeline marker with the accent colour.
- **Education, skills, certifications, key achievements**: edit the matching arrays in the same file.
- **CV**: put the file at `public/cv.pdf`.
- **Portrait**: replace `src/assets/jason.png` (square image recommended).

## Adding a blog post

Open `src/data/posts.js` and add an object to the `posts` array:

```js
{
  title: 'My New Post',
  slug: 'my-new-post',          // URL: /blog/my-new-post (must be unique)
  date: '2026-11-15',           // YYYY-MM-DD; posts are listed newest first
  draft: false,                 // true shows a "DRAFT" label
  excerpt: 'One or two sentences shown on the blog list.',
  body: [
    { type: 'p', text: 'A paragraph.' },
    { type: 'h2', text: 'A heading' },
    { type: 'list', items: ['First point', 'Second point'] },
  ],
},
```

Reading time is calculated automatically. The three existing posts are drafts (`draft: true`) for Jason to review; set `draft: false` and update the `date` once approved.

## Notes

- **Contact form**: there is no backend, so submissions only show a confirmation message and are not sent anywhere. Visitors should use the email link. To receive messages, connect a form service or replace the form with a `mailto:` link.
- **Hosting**: the blog uses client-side routes (`/blog/...`). On static hosts, configure a fallback that serves `index.html` for unknown paths (e.g. a `_redirects` file on Netlify, or a rewrite on Vercel).
