# Project Screenshots

Drop your real project screenshots into this folder, then reference them
from `src/data/projects.ts`.

## Quick steps

1. **Create one folder per project** (use the same `slug` as in `projects.ts`):

   ```
   public/images/projects/
     real-estate-lead-automation/
       cover.jpg
       01.jpg
       02.jpg
     ghl-pipeline-workflow-setup/
       cover.jpg
       01.png
   ```

2. **Open `src/data/projects.ts`** and update the project entry:

   ```ts
   {
     slug: "real-estate-lead-automation",
     // ...
     image: "/images/projects/real-estate-lead-automation/cover.jpg",
     gallery: [
       "/images/projects/real-estate-lead-automation/cover.jpg",
       "/images/projects/real-estate-lead-automation/01.jpg",
       "/images/projects/real-estate-lead-automation/02.jpg",
     ],
   }
   ```

   The `image` is the card thumbnail. The `gallery` array is shown in the
   lightbox dot-pager when the visitor opens the project full-screen.

3. **Set the `aspect`** to one of:
   - `"landscape"` — most app screenshots (16:10)
   - `"portrait"` — phone / mobile screenshots (3:4)
   - `"square"` — square crops (1:1)

4. **Slugs deduplicate.** If you accidentally duplicate a slug, only the
   first one renders. To add multiple screenshots of the same project,
   put them in `gallery`, **not** as separate entries.

## Recommended specs

| Type             | Min size              | Format     |
|------------------|-----------------------|------------|
| Card thumbnail   | 1400 × 900 px         | jpg / webp |
| Mobile portrait  | 800 × 1200 px         | jpg / webp |
| Lightbox gallery | up to 1920 px wide    | jpg / webp |

Keep files under ~400 KB. JPG with 80% quality usually looks great. For
GHL / n8n / Cal.com screenshots, PNG is fine too — but convert to WebP
if file size goes above 400 KB.

## Where these images appear

The same `projects.ts` data feeds all three galleries:

- Homepage → 6 projects (compact, no search)
- `/portfolio` → all projects (full filter + search + lightbox)
- `/case-studies` → bottom-of-page filterable archive

So you only update one file.
