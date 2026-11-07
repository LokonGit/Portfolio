# Lokesh Saraswat | 3D Space Portfolio

An interactive 3D portfolio where the visitor flies through space, from Earth to Neptune, and discovers my experience, projects, skills and contact details along the way.

## Sections

| Planet | Section | What it shows |
| --- | --- | --- |
| Earth | Hero | Name, About me and where I'm from |
| Mars | Experiences | E-Summit '27, Homa, MDG's Season of Code, plus a CV download |
| Jupiter | Skills | Competitive Programming, DSA, Languages, Development, Tools |
| Saturn | Projects | RoomView3D and Inventory Management System |
| Neptune | Contact | Contact form (EmailJS), email, LinkedIn and GitHub |

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19
- **3D:** three.js, React Three Fiber, Drei, custom GLSL shaders
- **Animation:** GSAP
- **Styling:** Tailwind CSS 4, shadcn/ui style components (Radix UI)
- **Forms:** React Hook Form
- **Email:** EmailJS (contact form, no backend needed)

## Requirements

- Node.js **20 or newer** (LTS recommended): https://nodejs.org
- npm (comes with Node.js)
- A modern desktop browser with WebGL support (latest Chrome or Edge works best)

Check your versions:

```bash
node -v
npm -v
```

## Getting started

### 1. Install dependencies

Open a terminal inside the project folder and run:

```bash
npm install
```

The first install can take a few minutes. Yellow warnings are fine. The project uses `legacy-peer-deps` (set in `.npmrc`), so no extra flags are needed.

### 2. Set up the contact form (EmailJS)

The contact form sends mail through [EmailJS](https://www.emailjs.com/). Create a free account, add an **Email Service** and an **Email Template**, then create a file named `.env.local` in the project root (you can copy `.env.example`):

```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

Where to find them in the EmailJS dashboard:

- **Public key:** Account → API Keys
- **Service ID:** Email Services
- **Template ID:** Email Templates

Your EmailJS template can use these variables:

| Variable | Content |
| --- | --- |
| `{{subject}}` | Email subject |
| `{{message}}` | Message text (also includes the sender's reply address) |
| `{{email}}`, `{{from_email}}`, `{{reply_to}}` | Sender's email address |
| `{{topic}}` | Job, project or question |

Notes:

- Never commit `.env.local`. It is already listed in `.gitignore`.
- Restart `npm run dev` after changing any value in `.env.local`.
- If the keys are missing, the form shows an error and asks visitors to email directly.

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000. The first load takes a little longer because textures and models are downloaded.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm start` | Serves the production build (run `npm run build` first) |

## Deploying (Vercel)

1. Push the project to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. In **Settings → Environment Variables**, add the three `NEXT_PUBLIC_EMAILJS_*` keys.
4. Deploy. Vercel detects Next.js automatically.

After you have a domain, add `metadataBase` and an `openGraph.images` entry in `src/app/layout.jsx` so link previews show an image.

## Project structure

```
src/
  app/                  Layout, page, global styles, site metadata
  canvases/space/       The 3D scene
    earth, mars, ...    One folder per planet (model, shaders, textures hooks)
    asteroids/          Asteroid field used in the Experiences section
    stars/              Starfield background
    sections/           Hero, Experiences, Projects, Skills, Contact
    components/         Camera controls, lighting, responsive camera
  components/           Top bar, startup screen, dialogs, UI primitives
  contexts/             Settings, scroll, dialog and carousel state
  lib/                  Profile data (constants.jsx), section map, helpers
public/
  assets/               Fonts, audio, 3D models, textures, pictures
  lokesh-saraswat-cv.pdf
```

## Updating the content

| What | Where |
| --- | --- |
| Email, GitHub, LinkedIn, CV link, experience, projects, skills | `src/lib/constants.jsx` |
| Hero text, About me, Origin | `src/canvases/space/sections/heroSection/components/` |
| Section titles (for example "Experiences") | `src/canvases/space/sections/*/components/*Title.jsx` |
| Navigation labels | `src/lib/sections.js` |
| Resume | `public/lokesh-saraswat-cv.pdf` (keep the same file name, or update `getResumeLink` in `constants.jsx`) |
| Avatar and project thumbnails | `public/assets/pictures/` |
| Experience logos (transparent PNG, square) | `public/assets/textures/asteroids/` |
| Site title and description | `src/app/layout.jsx` |
| Browser tab title animation | `src/components/AnimateDocumentTitle.jsx` |

Tips:

- Project thumbnails look best at about **1200 x 533 px** (WebP).
- When you add a new experience, project or skill, copy an existing entry in `constants.jsx` and edit it. Experiences also need an asteroid entry in `JobExperienceListAsteroids.jsx` with the same `id`.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `npm install` fails | Make sure Node.js is v20 or newer, delete `node_modules` and `package-lock.json`, then run `npm install` again |
| Black screen or "The 3D scene couldn't start" | The browser or device does not support WebGL. Turn on hardware acceleration or try Chrome or Edge |
| Choppy animation | Use the **Graphics** button on the start screen to lower the quality |
| Contact form says it failed | Check the three keys in `.env.local`, then restart `npm run dev` |
| Port 3000 is busy | Run `npx next dev -p 3001` |
| Changes don't show up | Hard refresh with Ctrl + Shift + R |

## Credits


### Assets

| Asset | Author | License / Source |
| --- | --- | --- |
| Planet textures (Earth, Mars, Jupiter, Saturn, Neptune) | [Solar System Scope](https://www.solarsystemscope.com/textures/) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |
| Background music | Reed Mathis, from the [YouTube Audio Library](https://www.youtube.com/audiolibrary) | YouTube Audio Library license |
| Sound effects | [freesound_community](https://pixabay.com/users/freesound_community-46691455/) and [floraphonic](https://pixabay.com/users/floraphonic-38928062/), from [Pixabay](https://pixabay.com/sound-effects/) | Pixabay license |
| "Wandering Asteroids Of Andromeda" (3D model) | [ARCTIC WOLVES™](https://skfb.ly/psECZ) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |
| "Modular Sci-fi Floor" (3D model) | [decstar77](https://skfb.ly/6GuSY) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |
| "Type 30 Console" (3D model) | [themighty808](https://skfb.ly/oPEoM) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |

### Libraries

[Next.js](https://nextjs.org), [React](https://react.dev), [three.js](https://threejs.org), [React Three Fiber](https://r3f.docs.pmnd.rs) and [Drei](https://github.com/pmndrs/drei), [GSAP](https://gsap.com), [Tailwind CSS](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com), [React Hook Form](https://react-hook-form.com) and [EmailJS](https://www.emailjs.com).

## License

Released under the MIT License. See the `LICENSE` file.
