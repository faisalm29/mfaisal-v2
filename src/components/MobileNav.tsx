"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const desktopNavMenu = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/general", text: "General" },
  { url: "/programming", text: "Programming" },
  { url: "/movies", text: "Movies" },
];

const mobileNavMenu = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
];

const writingsSubmenu = [
  { url: "/general", text: "General" },
  { url: "/programming", text: "Programming" },
  { url: "/movies", text: "Movies" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isWritingsOpen, setIsWritingsOpen] = useState(false);

  const isActive = (url: string) =>
    pathname === url || (url !== "/" && pathname.startsWith(url));

  const isWritingsActive = writingsSubmenu.some((item) => isActive(item.url));

  const NavLink = ({ href, text }: { href: string; text: string }) => (
    <Link
      href={href}
      className={`focus-visible:ring-ring relative px-4 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 ${
        isActive(href)
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
      onClick={() => setIsWritingsOpen(false)}
    >
      {isActive(href) && (
        <motion.span
          layoutId="active-pill"
          className="bg-accent absolute inset-0 -z-10 rounded-md"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
        />
      )}
      <span className="relative z-10">{text}</span>
    </Link>
  );

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 flex h-11">
      <div className="bg-accent/20 border-input pointer-events-auto relative mx-auto flex max-w-[calc(100vw-2rem)] items-center justify-center gap-1 overflow-visible rounded-lg border p-2 shadow-sm backdrop-blur-lg">
        {/* Mobile Navigation */}
        <ul className="flex items-center md:hidden">
          {mobileNavMenu.map((menu) => (
            <li key={menu.url}>
              <NavLink href={menu.url} text={menu.text} />
            </li>
          ))}

          {/* Writings Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsWritingsOpen(!isWritingsOpen)}
              className={`focus-visible:ring-ring relative flex items-center gap-1 px-4 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2 ${
                isWritingsActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isWritingsActive && (
                <motion.span
                  layoutId="active-pill"
                  className="bg-accent absolute inset-0 -z-10 rounded-md"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}
              <span className="relative z-10">Writings</span>
              <ChevronDown
                size={16}
                className={`relative z-10 transition-transform ${
                  isWritingsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isWritingsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-accent/20 border-input absolute bottom-full left-0 mb-2 rounded-md border p-2 shadow-sm backdrop-blur-lg"
              >
                <ul className="flex flex-col">
                  {writingsSubmenu.map((item) => (
                    <li key={item.url}>
                      <NavLink href={item.url} text={item.text} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </li>
        </ul>

        {/* Desktop Navigation */}
        <ul className="hidden items-center md:flex">
          {desktopNavMenu.map((menu) => (
            <li key={menu.url}>
              <NavLink href={menu.url} text={menu.text} />
            </li>
          ))}
        </ul>

        <div className="flex h-4 items-center">
          <Separator orientation="vertical" className="bg-input" />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export { MobileNav };
