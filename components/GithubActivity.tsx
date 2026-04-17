'use client';

import dynamic from 'next/dynamic';

// import { GitHubCalendar } from 'react-github-calendar'; 
const GitHubCalendar = dynamic(() => import('react-github-calendar').then((mod) => mod.GitHubCalendar), {
	ssr: false,
	loading: () => <p>Loading calendar...</p>,
})

export default function GithubActivity({ username } : { username: string }) {
	const monochromeTheme = {
		light: ['#f3f4f6', '#d1d5db', '#9ca3af', '#4b5563', '#030712'],
		dark: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#e5e7eb'],
	};

	return (
		<div className="w-full flex flex-col items-center justify-center p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-gray-200/50 shadow-sm transition-all hover:border-gray-300">
			<GitHubCalendar 
				username={username}
				theme={monochromeTheme}
				colorScheme="light"
				fontSize={14}
				blockMargin={4}
				blockSize={12}

				labels={{ 
					totalCount: "{{count}} contributions in the last year.",
				}}
			/>
		</div>
	);
}