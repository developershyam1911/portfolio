import { Inter } from "next/font/google";
import "./globals.css";

import dynamic from "next/dynamic";
import Script from "next/script";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    title: "Software Engineer - Shyam Mishra | DevShyamTech",
    description:
      "Welcome to the portfolio of Shyam Mishra, a skilled software engineer specializing in web development, software solutions, and more.",
    keywords: [
      "event planet development team",
      "event planet developers",
      "event planet tech head",
      "software Engineer Shyam",
      "Developer Shyam",
      "who is shyam mishra",
      "software solutions",
      "devshyamtech",
      "shyam mishra portfolio",
      "engineer shyam mishra",
      "founder of devshyamtech",
    ],
    icons: {
      icon: "/assets/images/logo/favicon.png",
      shortcut: "/assets/images/logo/favicon.png",
      apple: "/assets/images/logo/favicon.png",
    },
    openGraph: {
      title: "Software Engineer - Shyam Mishra | DevShyamTech",
      description:
        "Welcome to the portfolio of Shyam Mishra, a skilled software engineer specializing in web development, software solutions, and more.",
      images:
        "https://portfolio-jft8.vercel.app/assets/images/logo/ogImage.jpg",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/vendor/vendor.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/plugins.min.css" />
        <link rel="stylesheet" href="/assets/css/style.min.css" />
        <link rel="icon" href={process.env.NEXT_PUBLIC_FAVICON} />
      </head>
      <body className={inter.className}>
        <main className="main-wrapper">
          <Header />
          {children}
          <Footer />
        </main>
        <Script src="/assets/js/vendor.min.js"></Script>
        <Script src="/assets/js/plugins.min.js"></Script>
        <Script src="/assets/js/main.js"></Script>
      </body>
    </html>
  );
}
