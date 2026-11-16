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

## Share

<a href="https://p32929.github.io/share/?repo=nextjs-typescript-overmind-shadcn-boilerplate"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>
