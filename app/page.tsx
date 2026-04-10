// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

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
  const specializedAreas = [
    { title: 'Digital Architecture', description: 'Systems designed for elegant scalability.'},
    { title: 'User-Centric Design', description: 'Interfaces that prioritize intuition and clarity.'},
    { title: 'Technical Strategy', description: 'Aligning code structure with long-term goals.'},
  ];

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans">
      <header className="border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium tracking-tight text-gray=950">
            Tri <span className="text-gray-400">/ Dev</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="#about" className="hover:text-gray-950 transition-colors">Work</Link>
            <Link href="#specialization" className="hover:text-gray-950 transition-colors">Focus</Link>
            <Link href="mailto:tbui931958@gmail.com" className="bg-gray-950 text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors"> Contact </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-tight text-gray-950">
              Building simple interfaces for <span className="text-gray-400">complex ideas.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              I specialized in full-stack Next.js applications, creafting clean codebase that balance performance with exceptional uer experience.
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

          <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-3xl bg-gray-50 shadow-inner">
            <Image
              src="/images/minimal-hero.png"
              alt="Hand reaching for a crafted coffee mug, symbolizing focused creation."
              fill
              priority
              className="object-cover object-center"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </section>

        <section id="specialization" className="py-24 md:py-36 space-y-16">
          <div className="max-w-xl space-y-3">
            <p className="text-sm font-semibold uppercase trackig-widest text-gray-400">Core Focus</p>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-950">
              Structured thinking, applied to code.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedAreas.map((area, index)=>(
              <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-colors space-y-3">
                <div className="w-10 h-10 rounded-full bg-gray-950 text-white flex items-center justify-center font-mono text-lg">
                  0{index+1}
                </div>
                <h3 className="text-xl font-medium pt-3 text-gray-950">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
                ))}
          </div>
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
            className="inline-block bg-gray-950 text-white px-8 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
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
