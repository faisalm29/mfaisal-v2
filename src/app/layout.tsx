import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header, Footer } from "@/components/sections";
import { Navbar } from "@/components/Navbar";
import { SmoothScrollProvider } from "@/components/Lenis";
// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s • Faisal M.",
    default: "Faisal M.",
  },
  description:
    "Faisal's blog, where he writes about programming, movies, and anything else that interests him.",
  authors: [{ name: "Faisal M." }],
  creator: "Faisal M.",
  metadataBase: new URL("https://mfaisal.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: {
      template: "%s • Faisal M.",
      default: "Faisal M.",
    },
    description:
      "Faisal's blog, where he writes about programming, movies, and anything else that interests him.",
    url: "/",
    siteName: "Faisal M.",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "Faisal M's Blog",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s • Faisal M.",
      default: "Faisal M.",
    },
    description:
      "Faisal's blog, where he writes about programming, movies, and anything else that interests him.",
    site: "@hrrblealtruist",
    creator: "@hrrblealtruist",
    images: [
      {
        url: "/opengraph-image.jpg",
        alt: "Faisal M's Blog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body>
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative min-h-screen w-full">
              <div className="relative z-10 container mx-auto flex min-h-screen max-w-[60ch] flex-col space-y-12 px-6 py-12 sm:py-24">
                <Header />
                {children}
                <Footer />
                <Navbar />
              </div>
            </div>
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
