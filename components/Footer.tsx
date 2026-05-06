import Link from 'next/link';

export default function Footer() {
	return (
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
	);
}