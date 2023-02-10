# Getting Started

## Use the Latest Node & Update NPM / NPX

Grab the latest Node version then update NPM and NPX.

PS: Stay away from odd versions of Node; use LTS (always).

```bash
npm i -g npm
npm i -g npx
```

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

## Clean Up

Format and then commit any changes as a baseline.

```bash
npm run format
```

## Start it Up

```bash
npm run dev
```

---

## Install Pocketbase SDK

```bash
npm i pocketbase
```

## Icons

<https://github.com/steeze-ui/icons>

```bash
npm i @steeze-ui/svelte-icon
npm i -D @steeze-ui/heroicons
```

---

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

## Start it Up

```bash
./pocketbase serve
```

## Set it Up

Head over to the Admin UI

### Create the Admin Account

## Resources, Documentation, & Videos

### Videos

- [SvelteKit + PocketBase Integration: User Login and Registration](https://www.youtube.com/watch?v=AxPB3e-3yEM)
- [Authentication with SvelteKit & PocketBase](https://www.youtube.com/watch?v=doDKaKDvB30)

```

```
