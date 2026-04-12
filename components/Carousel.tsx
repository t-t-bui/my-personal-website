'use client';

import { useRef } from 'react';

export default function Carousel() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const specializedAreas = [
    { title: 'Full-Stack Developer', description: 'Systems designed for elegant scalability.'},
    { title: 'Cybersecurity Analyst', description: 'Purple Team focus for Privacy and Data Security.'},
    { title: 'Network Engineer', description: 'Builidng relibility with technical capabilities.'},
    { title: 'CTE Teacher', description: 'Guiding the future of tomorrow.'}
  ];

  const scroll = (direction: 'left' | 'right') => {
  	if(scrollContainerRef.current) {
  		// adjust the scroll distance based on your perferred slide width
  		const scrollAmount = direction == 'left' ? -350 : 350;
  		scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  	}
  };

  return (
  	<div className="relative w-full">
  		<div className="flex justify-end gap-3 mb-8">
	  		<button
	  			onClick={() => scroll('left')}
	  			className="p-3 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 hover:border-gray-400 hover:text-gray-950 text-gray-500 transition-colors shadow-sm focus:outline-none"
	  			aria-label="Scroll Left"
	  		>
	  			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	  				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
	  			</svg>
	  		</button>
	  		<button
	  			onClick={() => scroll('left')}
	  			className="p-3 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/50 hover:border-gray-400 hover:text-gray-950 text-gray-500 transition-colors shadow-sm focus:outline-none"
	  			aria-label="Scroll Right"
	  		>
	  			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	  				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5l7 7-7 7-7"/>
	  			</svg>
	  		</button>
	  	</div>

	  	<div 
	  		ref={scrollContainerRef}
	  		className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
	  	>
	  		{specializedAreas.map((area, index) => (
	  			<div 
	  				key={index}
	  				className="min-w-[85%] md:min-w[380px] snap-start shrink-0 bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-gray-200/50 shadow-sm transition-all hover:border-gray-300 space-y-3"
	  			>
	  				<div className="w-10 h-10 rounded-full bg-gray-950 text-white flex items-center justify-center font-mono text-lg shadow-sm">
	  					0{index + 1}
	  				</div>
	  				<h3 className="text-xl font-medium pt-3 text-gray-950">{area.title}</h3>
	  				<p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
	  			</div>
	  		))}
	  	</div>
  	</div>
  );
}