// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

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

    // <main className="flex min-h-screen flex-col items-center p-24 bg-gray-50">
    //   <h1 className="text-4xl font-bold mb-8 text-gray-900">My Portfolio</h1>
      
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
    //     {projects.length > 0 ? (
    //       projects.map((project: any) => (
    //         <div key={project._id} className="p-6 bg-white rounded-xl shadow-md">
    //           <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
    //           <p className="text-gray-600">{project.description}</p>
    //         </div>
    //       ))
    //     ) : (
    //       <p className="text-gray-500">No projects found. Add some to your MongoDB!</p>
    //     )}
    //   </div>
    // </main>