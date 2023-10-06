import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import { ThemeProvider } from "@/providers/theme-provider";
import  ToastProvider  from '@/providers/toast-provider'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: {
		default: "mybranches.net",
		template: "%s | mybranches.net",
	},
	description: "Ecommerce for every branches",
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" >
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<ToastProvider />
					<main className="overflow-hidden">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
