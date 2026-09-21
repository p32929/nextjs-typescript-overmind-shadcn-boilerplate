# nextjs-typescript-overmind-shadcn-boilerplate

A Next.js + TypeScript starter with shadcn/ui and Overmind state already wired up — dark mode included, ready for you to add components.

## What's included

- **Next.js** (pages router) with TypeScript
- **shadcn/ui** on Tailwind + Radix, with `cn()` and `class-variance-authority` set up
- **Overmind** state — state, actions and a typed helper, provided app-wide
- **Dark / light mode** via `next-themes`, already in the provider tree
- **Geist font** self-hosted, **Lucide** and **Radix** icons available
- **One providers file** — `src/components/utils/AllProviders.tsx` wraps everything

## Project layout

```
src/pages/_app.tsx              wrapped in AllProviders
src/pages/index.tsx             your first page
src/pages/api/hello.ts          example API route
src/components/utils/AllProviders.tsx   Overmind + theme providers
src/lib/overmind/               OvermindState / OvermindActions / helper
src/lib/utils.ts                the cn() helper
src/styles/globals.css          Tailwind + shadcn CSS variables
```

## Getting started

```bash
git clone https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate.git
cd nextjs-typescript-overmind-shadcn-boilerplate
npm install
npm run dev        # http://localhost:3000

npm run build
npm run lint
```

## Adding shadcn components

Only the base setup ships here — pull in whichever components you need:

```bash
npx shadcn@latest add button dialog dropdown-menu
```

## Related boilerplates

- [nextjs_shadcn_usm_ts_boilerplate](https://github.com/p32929/nextjs_shadcn_usm_ts_boilerplate) — same idea with usm-redux and the app router
- [nextjs-typescript-materialui-overmind-boilerplate](https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate) — Overmind with Material-UI instead
- [react_shadcn_ts_usm_boilerplate](https://github.com/p32929/react_shadcn_ts_usm_boilerplate) — the plain React version

## Contributing

Contributions are warmly welcomed and greatly appreciated! Whether it's a bug fix, new feature, or improvement, your input helps make this project better for everyone.

Before submitting a pull request, please:

1. Create an issue describing the feature or bug fix you'd like to work on
2. Wait for discussion and approval to ensure alignment with project goals
3. Fork the repository and create your feature branch
4. Submit your pull request with a clear description of changes

This approach helps avoid duplicate efforts and ensures smooth collaboration. Thank you for considering contributing!

## Share

Sharing this repository with your friends is just one click away from here

[![facebook](https://user-images.githubusercontent.com/6418354/179013321-ac1d1452-0689-493f-9066-940cf2302b6e.png)](https://www.facebook.com/sharer/sharer.php?u=https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate/)
[![twitter](https://user-images.githubusercontent.com/6418354/179013351-7d8d6d1c-4ce2-46ab-bef8-4c4765a1b888.png)](https://twitter.com/intent/tweet?url=https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate/)
[![tumblr](https://user-images.githubusercontent.com/6418354/179013343-3111f55a-3b90-40c7-8487-9777348672b0.png)](https://www.tumblr.com/share?v=3&u=https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate/)
[![pocket](https://user-images.githubusercontent.com/6418354/179013334-b095c45f-becf-49f4-9ee1-5a731a9b1f85.png)](https://getpocket.com/save?url=https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate/)
[![pinterest](https://user-images.githubusercontent.com/6418354/179013331-44cd9206-11b1-4b65-becb-5863b61c828f.png)](https://pinterest.com/pin/create/button/?url=https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate/)
[![reddit](https://user-images.githubusercontent.com/6418354/179013338-7416ae3f-73ba-4522-86e1-1374d7082d22.png)](https://www.reddit.com/submit?url=https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate/)
[![linkedin](https://user-images.githubusercontent.com/6418354/179013327-ca7b7102-1da8-4b1c-858f-1a6e5f21bd70.png)](https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate/)
[![whatsapp](https://user-images.githubusercontent.com/6418354/179013353-f477fa0b-3e6f-4138-a357-c9991b23ff88.png)](https://api.whatsapp.com/send?text=https://github.com/p32929/nextjs-typescript-overmind-shadcn-boilerplate/)
