# Getting Started

## Download and Unzip

Download the latest release from:
https://github.com/pocketbase/pocketbase/releases

Download and Unzip the file:
```bash
curl -LJo pocketbase.zip https://github.com/pocketbase/pocketbase/releases/download/v0.11.3/pocketbase_0.11.3_linux_amd64.zip
unzip pocketbase.zip pocketbase
```

## Git Init + Ignore

### Git Init

```bash
git init
```

### Git Ignore

The following we will not want to commit to our repository. Unless you like to lock your binary, but we want to keep things OS agnostic, and the binary locking should occur at a build/ci pipline.

`.gitignore`

```
pocketbase
pocketbase.zip
pb_data/
```

## Update NPM / NPX

```bash
npm i -g npm
npm i -g npx
```

## NPM Init/Create SvelteKit App

```bash
npm create svelte@latest project-name-here
```

## Start it Up

```bash
./pocketbase serve
```

## Set it Up

Head over to the Admin UI

### Create the Admin Account

---

## Create SvelteKit App

```bash
npm create svelte@latest project-name-here
```

### Options
- Skeleton project
- Typescript
- ESLint - Yes
- Prettier - Yes
- Playwright - No
- Vitest - No

## Install Tailwind and DaisyUI

```bash
npx svelte-add@latest tailwindcss --daisyui --forms --typography
```

## Install Dependencies

```bash
npm i
```

## Start it Up

```bash
npm run dev
```

## Clean Up

```bash
npm run format
```

---

## Install Pocketbase SDK

```bash
npm i pocketbase
```

## Resources, Documentation, & Videos

### Videos

- [SvelteKit + PocketBase Integration: User Login and Registration](https://www.youtube.com/watch?v=AxPB3e-3yEM)
- [Authentication with SvelteKit & PocketBase](https://www.youtube.com/watch?v=doDKaKDvB30)