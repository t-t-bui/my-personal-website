'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	// Helper function to close menu when a link is clicked on mobile
	const closeMenu = () => setIsOpen(false);

	return (
		<header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b bordre-gray-900/5 transition-all">
			<nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link href="/" className="text-xl font-medium tracking-tight text-gray-950" onClick={closeMenu}>
					Tri <span className="text-gray-400"> | Dev</span>
				</Link>	

				<div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
					<Link href="#about" className="hover:text-gray-950 transition-colors">Work</Link>
					<Link href="#specialization" className="hover:text-gray-950 transition-colors">Focus</Link>
					<Link href="mailto:tbui931958@gmail.com" className="bg-gray-950 text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-colors shadow-sm">Contact</Link>
				</div>

				{/* Mobile Hamburger Button (Visible only on Mobile/Tablet) */}
				<button 
					className="md:flex hidden md:hidden p-2 text-gray-600 focus:outline-none"
					onClick={ () => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{isOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 18h16" />
							) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M4 18h16"/>
						)}
					</svg>
				</button>
			</nav>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md bordre-b border-gray-200 shadow-lg px-6 py-6 flex flex-col gap-6">
					<Link href="#about" onClick={closeMenu} className="text-lg text-gray-600 hover:text-gray-950 font-medium transition-colors">Work</Link>
					<Link href="#specialization" onClick={closeMenu} className="text-lg text-gray-600 hover:text-gray-950 font-medium transition-colors">Focus</Link>
					<Link href="mailto:tbui931958@gmail.com" onClick={closeMenu} className="inline-block text-center bg-gray-950 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">Contact</Link>
				</div>
			)}
		</header>
	);
}