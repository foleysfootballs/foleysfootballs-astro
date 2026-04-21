# Foley's Footballs — Astro Site

## Quick Reference

### Adding a new ball
1. Open `src/data/balls.js`
2. Copy any existing ball object and paste at the top of the array
3. Fill in: `id` (unique slug), `title`, `price`, `tag`, `tagType`, `ebayId`, `stripeUrl`, `notes`
4. Create photo folder: `public/images/your-ball-id/`
5. Add photos to that folder, list filenames in the `photos` array
6. Save → Astro hot-reloads → commit and push → Netlify deploys

### Marking a ball sold
Open `src/data/balls.js`, find the ball, change:
```js
status: "active"  →  status: "sold"
```
The ball disappears from active listings and moves to the SOLD section automatically.

### Marking a ball sold AND keeping photos
Keep the ball object in the array with `status: "sold"`. The photos will show with a SOLD stamp.

### Adding a new page
Create a file in `src/pages/`. For example:
- `src/pages/blog.astro` → available at `/blog`
- `src/pages/blog/first-post.astro` → available at `/blog/first-post`
- `src/pages/tools/my-tool.astro` → available at `/tools/my-tool`

### Adding a new tool
Create `src/pages/tools/tool-name.astro` and add a card for it in `src/pages/tools/index.astro`

### Development
```bash
cd ~/Desktop/former-fusion
npm run dev
```
Site runs at http://localhost:4321

### Deploy to Netlify
```bash
git add .
git commit -m "your message"
git push
```
Netlify auto-deploys on push.

## File Structure
```
src/
  data/
    balls.js          ← THE ONLY FILE YOU EDIT FOR INVENTORY
  layouts/
    Layout.astro      ← Sidebar, topbar, shared structure
  pages/
    index.astro       ← Homepage
    store.astro       ← Full store with filters
    balls/[id].astro  ← Individual product pages (auto-generated)
    process.astro     ← The Process page
    reviews.astro     ← Reviews page
    story.astro       ← Our Story
    tools/
      index.astro     ← Tools hub
      parlay.astro    ← Parlay calculator
    contact.astro     ← Contact form
  styles/
    global.css        ← All styles
public/
  images/
    ball-id/          ← Photos for each ball
      01.jpg
      02.jpg
```

## Todo Before Going Live
- [ ] Replace `YOUR_FORM_ID` in `contact.astro` and `index.astro` with real Formspree ID
- [ ] Add Google Analytics ID in `Layout.astro`
- [ ] Add real ball photos to `public/images/`
- [ ] Connect GitHub repo to Netlify for auto-deploy
