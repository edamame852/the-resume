# High level overview
1. Entry point: `src/pages/[lang]/index.js`
2. Every RC files under `<Page>`
3. New FC "sections" gets added into `src/components/Sections`

# i18n white app

> 🔥🔥🔥 
> Major thanks to [xairoo](https://github.com/xairoo) to setting the stage for the basis of this project
> Please go check out his white starter app for i18next static rendering [here](https://github.com/xairoo/nextjs-i18n-static-page-starter)!    
> This package brings you `react-i18next` and `i18next` to your static sites build with the `next export` future from Next.js.  


> - 🗲 Translation is already rendered (SSG), client will receive the final translated site.  
> - 🔥 Hot reload works also when you update your locale (translation) files.  
> - 🚀 Automatic browser language detection can be realized.  
> - 🍪 Cookie stores the client language.  

# Deployment
This project is deployed on github pages. 
<img alt="Deploy Next.js site to Pages badge" src="https://github.com/edamame852/the-resume/actions/workflows/nextjs.yml/badge.svg">

# Next.js i18n Starter for Static Pages

This starter allows you to use the `next export` future from `Next.js` in combination with `i18n` to create a complete static site.

Clients will directly redirected from `/` to `/[lang]` based on the detected language.

Packages included:

- [i18next](https://github.com/i18next/i18next)
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [styled-components](https://github.com/styled-components/styled-components)
- Custom 404 page with i18n support

## Installation

Clone the repository and run `npm ci` (recommend) or `npm install`.

## Configuration

- Set the supported languages, default language, namespaces and default namespace in `/src/i18n/config.js`
- Locales are located in `/src/locales/`
  - To prevent mess, you can split the `.json` translation file(s) into multiple namespaces

## Developing in dev - locally hosting on port3000

Run **`npm run dev`** to start the development server on [http://localhost:3000](http://localhost:3000).  
Visit [http://localhost:3000](http://localhost:3000) to view this starter.

## Build and Export Static Pages (locally or via CICD)

```bash
npm run export
```

## ~~Test/Serve the Site Locally~~ (This doesn't work locally)

~~`npm run serve`~~