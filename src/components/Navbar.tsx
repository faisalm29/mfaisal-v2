"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";

const navMenu = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  {
    url: "/blog",
    text: "Blog",
    activePaths: ["/general", "/programming", "/movies"],
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-50 mx-auto mb-4 flex h-11">
      <div className="bg-accent/20 pointer-events-auto relative mx-auto flex max-w-[calc(100vw-2rem)] items-center justify-center gap-1 overflow-x-auto overflow-y-hidden rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.02),0_4px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl dark:shadow-[0_0_0_1px_hsla(0,0%,100%,0.06)]">
        <ul className="flex items-center">
          {navMenu.map((menu) => {
            const isActive =
              pathname === menu.url ||
              pathname.startsWith(`${menu.url}/`) ||
              menu.activePaths?.some(
                (path) => pathname === path || pathname.startsWith(`${path}/`),
              );

            return (
              <li key={menu.url}>
                <Link
                  href={menu.url}
                  className={`focus-visible:ring-ring relative px-4 py-1.5 text-base transition-colors outline-none focus-visible:ring-2 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* sliding background pill */}
                  {isActive && (
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
                  <span className="relative z-10">{menu.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex h-4 items-center">
          <Separator orientation="vertical" className="bg-border" />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export { Navbar };
