import Link from 'next/link';

import Navbar from '@/components/Navbar';

export default function Resume() {
	return (
		<div className="relative min-h-screen bg-white text-gray-950 font-sans pb-32">
			<div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-100/90 to-gray-500/50"/>
			<Navbar />
			<main className="max-w-4xl mx-auto px-6 pt-32">

				<header className="mb-20">
					<h1 className="text-5xl font-semibold tracking-tighter mb-4">Tri Bui</h1>
					<p className="text-xl text-gray-600 mb-6 max-w-2xl">
						Network Engineer & Full-Stack Developer trying to develope his own skills through lots of trial and error, and a lot of help from the Internet.
					</p>
					<div className="flex flex-wrap gap-4 text-sm font-medium">
						<Link href="mailto:tbui931958@gmail.com" className="bg-white/60 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full hover:border-gray-950 transition-colors">
							tbui931958@gmail.com
						</Link>
						<span className="bg-white/60 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full">
							Dallas Based
						</span>
					</div>

					<div className="flex flex-wrap gap-4 text-sm font-large font-semibold pt-32">
						<h1 className="text-6xl tracking-tighter mb-4">TODO: Temporary unavailable. Resume upon request.</h1>
					</div>
				</header>
			</main>
		</div>
	);
}