# nextjs-typescript-overmind-shadcn-boilerplate

A starter template for Next.js and TypeScript, with shadcn/ui, Overmind state and dark mode already wired up. Connecting a state library, a theme switcher and shadcn/ui by hand takes an afternoon of setup. Here it is done, so you clone it and start adding pages.

## What's included

1. **Next.js (pages router) with TypeScript.**
2. **shadcn/ui** on Tailwind and Radix, with `cn()` and `class-variance-authority` set up.
3. **Overmind state:** state, actions and a typed helper, available across the app.
4. **Dark and light mode** with `next-themes`, already in place.
5. **The Geist font,** plus Lucide and Radix icons.
6. **One providers file,** `src/components/utils/AllProviders.tsx`, that wraps everything.

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

Only the base setup is included. Add the components you need:

```bash
npx shadcn@latest add button dialog dropdown-menu
```

## Related boilerplates

1. [nextjs_shadcn_usm_ts_boilerplate](https://github.com/p32929/nextjs_shadcn_usm_ts_boilerplate): the same idea with usm-redux and the app router.
2. [nextjs-typescript-materialui-overmind-boilerplate](https://github.com/p32929/nextjs-typescript-materialui-overmind-boilerplate): Overmind with Material-UI instead.
3. [react_shadcn_ts_usm_boilerplate](https://github.com/p32929/react_shadcn_ts_usm_boilerplate): the plain React version.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make nextjs-typescript-overmind-shadcn-boilerplate better.

## You might also like

<p><a href="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/0"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/0-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/0-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (1)"></picture></a><a href="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/1"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/1-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/1-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (2)"></picture></a><br><a href="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/2"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/2-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/2-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (3)"></picture></a><a href="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/3"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/3-dark.svg"><img src="https://openstore.pfay.workers.dev/more/p32929/nextjs-typescript-overmind-shadcn-boilerplate/3-light.svg" width="50%" align="top" alt="More apps by p32929 on OpenStore (4)"></picture></a></p>

<p><a href="https://p32929.github.io/share/?repo=nextjs-typescript-overmind-shadcn-boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
