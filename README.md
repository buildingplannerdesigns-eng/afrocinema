# 🎬 AfroCinema

> Discover Nollywood, Bollywood & Hollywood movies in one place.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Movie Data**: TMDB API (Hollywood + Bollywood)
- **Nollywood DB**: Supabase (PostgreSQL)
- **PWA**: @serwist/next
- **Deployment**: Vercel (Recommended)

---
### 4. Deploy to Vercel

1. [Create a Vercel account](https://vercel.com)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js and configure everything
4. Add your environment variables in the Vercel dashboard
5. Click **Deploy** — your site will be live!
```bash
git clone https://github.com/yourusername/afrocinema.git
cd afrocinema
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```


Fill in `.env.local`:
- `TMDB_API_KEY` → Get free at https://www.themoviedb.org/settings/api
- `NEXT_PUBLIC_SUPABASE_URL` → From your Supabase project settings
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` → From your Supabase project settings
- `NEXT_PUBLIC_GA_ID` → Your Google Analytics Measurement ID (e.g. G-XXXXXXXXXX)

### 3. Set up Supabase

1. Create a free project at https://supabase.com
2. Go to **SQL Editor**
3. Run the contents of `supabase-schema.sql`
4. This creates the `nollywood_movies` table and seeds 5 sample movies



### 5. Run development server

```bash
npm run dev
```

Open http://localhost:3000

---

## Project Structure

```
afrocinema/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + CSS variables
│   ├── (browse)/           # Browse pages
│   │   ├── nollywood/
│   │   ├── bollywood/
│   │   └── hollywood/
│   └── movie/[id]/         # Movie detail page
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── movie/              # MovieCard, MovieGrid, etc.
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── tmdb.ts             # TMDB API utility
│   ├── supabase.ts         # Supabase client + queries
│   └── utils.ts            # Helper functions
├── types/
│   └── movie.ts            # All TypeScript interfaces
├── public/
│   ├── manifest.json       # PWA manifest
│   └── icons/              # PWA icons
├── .env.example
├── netlify.toml
└── supabase-schema.sql
```

---

## Deployment (Vercel)

1. Push to GitHub
2. Import your repo in the Vercel dashboard
3. Add environment variables in Vercel → Project Settings → Environment Variables
4. Deploy!

---

## Roadmap

- [x] Day 1: Project scaffold
- [ ] Day 2: TMDB integration
- [ ] Day 3: Supabase + Nollywood seed data
- [ ] Day 4: Homepage UI
- [ ] Day 5: Browse pages
- [ ] Day 6: Movie detail page
- [ ] Day 7: Buffer/polish
- [ ] Day 8–9: Search
- [ ] Day 10: PWA
- [ ] Day 11: Vercel config
- [ ] Day 12: SEO
- [ ] Day 13: Polish
- [ ] Day 14: 🚀 Launch
