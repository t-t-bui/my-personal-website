'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const workExperience = [
	{
		id: "Seguin",
		role: "Teacher - Career Technology and Education",
		company: "AISD",
		date: "2021 - Present",
		summary: "Teaching tomorrows today in the ways of Computer Science and Cybersecurity",
		details: [
			'Design and implement a comprehensive cybersecurity curriculum covering foundational network, security, ethics, and core prinicple.',
			'Design and implement a comprehensive computer science curriculum spanding 3 preps covering foundational concepts and algoirthms in Python, Java, and Scratch.',
			'Led technical instruciton and hands-on lab exercise to train students in the direct applicaiton of industry-standard tools and platforms.',
			'Mentored students on security best practices, guided them through leetcode challenages, Capture the Flag (CTF) events, and evaluated final projects for pratical skill mastary.',
		]
	},
	{
		id: "Capgemini",
		role: "Front-End Web Developer",
		company: "Capegmini (formerly Lyons CG)",
		date: "2017-2020",
		summary: "Using Salesforce to conceptualized ideas in a B2B and B2C SaaS Envrionment",
		details: [
			'Developed and maintained resilient systems utilized across B2B and B2C SaaS envrionment.',
			'Implemented API integrations on the Salesforce Platform, specializing in secure connectivity with banking systems (e.g Paypal) and third-party authentication.',
			'Guaranteed adherence to strigent security regulations, maintaining feature compliance with GDPR and PCI DSS standards.',
			'Manage CI/CD pipeline within a fast-paced Agile lifecycle, collaborating with PMs to align technical solutions with business objectives.',
		]
	},
	{
		id: "Neiman",
		role: "Java Developer Intern",
		company: "Neiman Marcus",
		date: "Summer and Fall 2015",
		summary: "In-house Java Developer working on application refactoring",
		details: [
			
			'Executed critical refactoring and modernization efforts on existing in-house Java applications, imporving performance and long-term code maintainability.',
			'Developed functionalitities utilizing WebSockets.',
			'Intgrated back-end services using Java, enabling reliable inteneral data connectivity.',
		]
	},
	{
		id: "Baker",
		role: "Field Engineer IV / Field Specialist IV",
		company: "Baker Hughes INTEQ",
		date: "2011 - 2014",
		summary: "Generating data and managing equipment in a complex drilling envrionment",
		details: [
			'Delievered immediate technical support and specialized solutions to geologists, engineers, and client within a fact-paced, complex drilling envrionment.',
			'Oversaw rigorous Quality Control programs from mission-critical equipment, including inspection and calibration of nuclear tools.',
			'Collaborating cross-functionally to identify operational bottlenecks and optimizing drilling efficiency while adhering to strict industry safety standards.',
		]
	},
]

export default function Resume() {
	const [ activeJob, setActiveJob ] = useState<typeof workExperience[0] | null > (null);

	useEffect(() => {
		if (activeJob) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => { document.body.style.overflow = 'unset'; };
	}, [activeJob]);

	return (
		<div className="relative min-h-screen bg-white text-gray-950 font-sans selection:bg-gray-200 pb-32">
			{/*<div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-100/90 to-gray-500/50"/>*/}
			<div className="fixed inset-0 -z-20 bg-gray-50"/>
			<div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-200/80 to-transparent opacity-80" />
			
			<Navbar />

			<main className="relative z-10 pt-32 pb-20 px-6">
				<div className="grid grid-cols-1 gap-6">
					<div className="max-w-4xl mx-auto">
						<header className="mb-20">
							<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-gray-950">Tri Bui</h1>
							<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
								Network Engineer & Full-Stack Developer enhancing organizational infrastructure through secure architecture, optimization, and technical instruction.
							</p>

							<div className="flex flex-wrap gap-3 text-sm font-medium">
								<Link href="mailto:tbui931958@gmail.com" className="bg-white/80 backdrop-blur-md border border-gray-200 px-5 py-2.5 rounded-full hover:border-gray-400 hover:shadow-sm transition-all text-gray-700">
									tbui931958@gmail.company
								</Link>
								<span className="bg-white/80 backdrop-blur-md border border-gray-200 px-5 py-2.5 rounded-full text-gray-700">
									Dallas Based
								</span>
								<span className="bg-white/80 backdrop-blur-md border border-gray-200 px-5 py-2.5 rounded-full text-gray-700">
									(469) 348-3107
								</span> 
							</div>
						</header>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="mb-20 mt-5">
							<p className="text-xl md:text-2xl text-gray-800/60 mb-8 max-w-3xl leading-relaxed">
								A former software developer. Current mission is to get back on my feet and start developing again, or at least attempt to do something new. My lastest achievement is the start of my home lab using a few Pis as the foundation and trying to PR lap times in sim racing as a distraction as I continue to study and muster the courage and commitmemnt to take the JNCIA and CCNA exams.
							</p>
						</div>
					</div>
				</div>
			</main>

			<section className="relative z-20 bg-white/40 backdrop-blur-xl border-t border-gray-200/50 pt-24 pb-32 px-6 rounded-t-[3rem] shadow-[0_-10px_rgba(0,0,0,0.03]">
				<div className="max-w-4xl mx-auto">
					<div className="sticky top-24 z-30 mb-12">
						<h2 className="text-sm font-semibold upper case tracking-widest text-gray-500 bg-white/60 inline-block px-4 py-1 rounded-full border border-gray-200/50 backdrop-blur-md shadow-sm">
							Professional Journey
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
						{workExperience.map((job) => (
							<button
								key={job.id}
								onClick= {() => setActiveJob(job)}
									className='group text-left bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translition-all duration-300 flex flex-col justify-between h-64 focus:ring-offset-2'
								>
								<div>
									<span className="text-xs font-mono text-gray-500 mb-4 block">{job.date}</span>
									<h3 className="text-2xl font-medium text-gray-950 leading-tight mb-2 group-hover:text-gray-700 transition-colors">{job.role}</h3>
									<p className="text-gray-600 font-medium">{job.compnay}</p>
								</div>
								<div className="flex items-center justify-between w-full mt-6">
									<span className="text-sm text-gray-500">{job.summary}</span>
									<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-950 group-hover:text-white transition-colors">
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16mB-8H4"/></svg>
									</div>
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Modal popup */}
			{activeJob && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
					<div
						className="absolute inset-0 bg-gray-950/20 backdrop-blur-md transition-opacity"
						onClick={() => setActiveJob(null)} />
					
					{/* modal content */}
					<div className="relative bg-white rounded-3xl shadow-2xl w-full max-x-2xl max-h-[90vh] overflow-y-auto border border-gray-200 animate-in fade-in zoom-in-95 duration-200">
						<div className="sticky top-0 bg-white/90 backdrop-blur-md broder-b border-gray-100 p-6 flex justify-between items-start z-10">
							<div>
								<h3 className="text-2xl font-semibold text-gray-950 mb-1">{activeJob.role}</h3>
								<p className="text-gray-600 font-medium">{activeJob.compnay} &bull; <span className="font-mono text-sm text-gray-500">{activeJob.date}</span></p>
							</div>
							<button 
								onClick={() => setActiveJob(null)}
								className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors focus:outline-one"
								aria-label="Close Moddal"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
							</button>
						</div>

						<div className="p-8">
							<h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Key Responsibilities & Achievements</h4>
							<ul className="space-y-4">
								{activeJob.details.map((detail, index) => (
									<li key={index} className="flex gap-4 items-start">
										<span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
										<p className="text-gray-700 leading-relaxed">{detail}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
}