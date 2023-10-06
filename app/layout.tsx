import "./globals.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import { Toaster } from 'react-hot-toast'

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: {
		default: "mybranches.net",
		template: "%s | mybranches.net",
	},
	description: "Ecommerce for every branches",
	// openGraph: {
	// 	title: "My Branches",
	// 	description: "Ecommerce for every branches",
	// 	url: "https://mybranches.net",
	// 	siteName: "Branches",
	// 	locale: "en-US",
	// 	type: "website",
	// },
	// robots: {
	// 	index: true,
	// 	follow: true,
	// 	googleBot: {
	// 		index: true,
	// 		follow: true,
	// 		"max-video-preview": -1,
	// 		"max-image-preview": "large",
	// 		"max-snippet": -1,
	// 	},
	// },
	// twitter: {
	// title: "none",
	// 	card: "summary_large_image",
	// },
	// icons: {
	// 	shortcut: "/favicon.png",
	// },
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<Analytics />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Toaster />
					<Navbar />
					<main>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
