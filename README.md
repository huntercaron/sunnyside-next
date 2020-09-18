# Sunnyside
A minimal & somewhat opinionated Next & Sanity boilerplate.

Basic setup of [Next.js](https://nextjs.org/) with [Sanity](https://www.sanity.io/).

## Getting Started (incomplete)

Todo: 
- simple CLI for setup
- prompt for URL & tokens
- add deploy to vercel button
- figure out better place to put built cms
- talk about how its bundled for now but shouldn't be

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

To run Sanity Studio locally:

```bash
yarn cms:dev
```

There are a few steps needed in the sanity dashboard
- add CORS origin for hosted stuff
- create api keys for local env
- add a webhook to your hosting

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
