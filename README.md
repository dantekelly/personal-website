# Personal Portfolio

First and foremost, a big thank you to the [T3 Stack](https://create.t3.gg/). I used `create-t3-app` for the
initialization of this application and it has saved me so much time trying to get setup with the latest and greatest
ESLint and TypeScript configurations, allowing me to focus on the content.

## About the Project

This project is my personal website that I will be using for the forseeable future. Some technologies here are on the
bleeding edge, chosen for exploration, while others are battle tested. Regardless of the technology utilized, I aim to
provide a seamless user experience with a focus on performance, accessibility, and security... with a twist of course.

## Tech Stack

- **Hosting**: Vercel
- **Framework**: Next.js (React)
- **CMS**: Sanity
- **Package Manager**: Bun

## Getting Started

If you're keen on diving deeper into the code or setting it up on your own machine, follow these steps:

1. First, ensure you have Bun installed. If not, grab it from [here](https://bun.sh/).

```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash
```

2. Once Bun is ready, you can set up the project:

```bash
# CD into the project directory
cd personal-website

# Install the necessary packages
bun install

# Start the development server
bun dev
```

3. Access the development server at `http://localhost:3000` or access the CMS at `http://localhost/studio:3000`.

## ⚠️Caution

In production, please move the sanity files to a new route for best security practices. I only include it within this
route to consolidate all files into one easy to deploy git. For this project, I have disabled the CORS header on
production routes for security.

## Deployment

For a seamless deployment experience and optimal performance, I've chosen Vercel as my hosting platform. Feel free to
quickly deploy your own instance of this project by clicking the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdantekelly%2Fpersonal-website%2Ftree%2Fmain&project-name=my-portfolio&repository-name=my-portfolio)

## Roadmap

Here's a sneak peek into what's coming next:

- [ ] Integrate Sanity for blog posts and CMS.
- [x] Replace Flowbite with Shadcn for server component support.
- [ ] Publish my inaugural blog post.
- [ ] Enhance user interactivity with emoji reactions.
- [ ] Prevent malicious user experience with rate limiting.
- [ ] Enhance user experience with search functionality.
- [ ] Enhance user engagement with blog pages, authentication, and commenting.
- [ ] Expand content reach with an RSS feed.
- [ ] Dive deeper into analytics with Axiom.
- [ ] Keep users engaged with push notifications.
- [ ] Reduce viewer churn rate with a light mode.
- [ ] Reduce viewer churn rate with an email newsletter.
- [ ] Create a CONTRIBUTING.md file.

Your feedback and suggestions are always welcome. Let's embark on this digital journey together!
