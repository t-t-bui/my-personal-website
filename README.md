This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Tri Bui - Personal Portfolio

A minimalist, high-performance personal portfolio and resume website built with Next.js, TypeScript, and Tailwind CSS. The architecture is designed to be easily maintained, visually clean, and fully responsive across all devices.

## 🚀 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** TypeScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Database:** MongoDB (for dynamic project fetching)
* **Components:** React (Client & Server Components)
* **Integrations:** GitHub CLI, `react-github-calendar`

## ✨ Key Features

* **Minimalist Glassmorphism UI:** A custom-built, responsive interface featuring a subtle 80% to 10% opacity gradient background with frosted glass (`backdrop-blur`) component cards.
* **Interactive Specialization Carousel:** A lightweight, highly performant horizontal scroll carousel built natively with CSS Scroll Snap.
* **Live GitHub Activity:** Real-time rendering of GitHub commit history styled in a custom monochrome theme to match the site's aesthetic.
* **Responsive Navigation:** A sticky header that seamlessly transitions into a mobile-friendly hamburger dropdown menu on smaller screens.
* **Dedicated Resume Page:** A clean, typographic timeline layout detailing professional experience across full-stack development, network engineering, and cybersecurity instruction.

## 🛠️ Getting Started

To run this project locally, follow these steps.

### Prerequisites
Make sure you have Node.js installed and a MongoDB Atlas cluster available.

### 1. Clone the repository
```bash
git clone [https://github.com/your-github-username/my-personal-website.git](https://github.com/your-github-username/my-personal-website.git)
cd my-personal-website
