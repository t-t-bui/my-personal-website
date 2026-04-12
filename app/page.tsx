// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

import GithubActivity from '@/components/GithubActivity';
import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';

export const dynamic = 'force-dynamic'; // Ensures page fetches fresh data

async function getProjects() {
  // In a real app, use absolute URL like process.env.NEXT_PUBLIC_API_URL
  const res = await fetch('http://localhost:3000/api/projects', {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    return [];
  }
  return res.json();
}

export default async function Home() {
  const projects = await getProjects();


  return (
    <div className="relative min-h-screen bg-white text-gray-950 font-sans">
      {/* gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-200/80 to-gray-50/10" />

      <Navbar/>

      <main className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-tight text-gray-950">
              Learning new stacks and journey to become a <span className="text-gray-400">Networks Engineer.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
             Teacher by day, helping students navigate complex ideas and build strong foundations. Beyond the classroom, Learner of clean code and elegant design—focused on creating systems that balance performance, clarity, and real-world usability.
             By night, I’m diving deeper into cybersecurity and network engineering, working toward building secure, resilient systems that protect and empower the people who rely on them.
            </p>
            <p className="text-lg text-gray-600 max-w-lg">
             -Always learning. Always building. Always improving.
            </p>
            <div className="flex item-center gap-4 pt-4">
              <Link href="#specialization" className="text-sm font-medium border-b-2 border-gray-950 pb-1">
                Explore specializations
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="https://github.com/t-t-bui" target="_blank" className="text-sm text-gray-600 hover:text-gray-950">
                View GitHub
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-3xl bg-gray-50 shadow-inner backdrop-blur-sm">
            <Image
              src="/images/minimal-hero.png"
              alt="Hand reaching for a crafted coffee mug, symbolizing focused creation."
              fill
              priority
              className="object-cover object-center mix-blend-multiply"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </section>

        <section id="specialization" className="py-24 md:py-36 space-y-16">
          <div className="max-w-xl space-y-3">
            <p className="text-sm font-semibold uppercase trackig-widest text-gray-400">Core Focus</p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-950">
              Structured thinking, applied to all aspect of daily life.
            </h2>
          </div>

          <Carousel />
        </section>

        <section id="activity" className="pb-24 space-y-12">
          <div className="max-w-xl space-y-3">
            <p className="text-sm font-semibold uppercase trackig-widest text-gray-400">Open Source</p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-950">
              Recent Activity.
            </h2>
          </div>

          <GithubActivity username="t-t-bui" />
        </section>

        <footer id="contact" className="border-t border-gray-100 pt-16 pb-12 mt-20 text-center space-y-8">
          <div className="space-y-3">
            <h3 className="text-3xl font-medium tracking-tight text-gray-950">Let's connect.</h3>
            <p className="text-gray-600 max-w-sm mx-auto">
              I'm open to discussing new projects, design challenges, or the future of web architecture.
            </p>
          </div>
          <Link
            href="mailto:tbui931958@gmail.com"
            className="inline-block bg-gray-950 text-white px-8 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors shadow-sm">
            Start a Conversation
          </Link>
          <div className="pt-12 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Tri Bui. All rights reserved. Built with NextJS.
          </div>
        </footer>
      </main>
    </div>
  );
}
