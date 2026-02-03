"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const navMenu = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/blog", text: "Blog" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-accent/20 border-input fixed bottom-0 left-1/2 z-20 mb-4 flex -translate-x-1/2 items-center rounded-lg border p-1.5 shadow-sm backdrop-blur-lg">
      {navMenu.map((menu) => {
        const isActive =
          pathname === menu.url ||
          (menu.url !== "/" && pathname.startsWith(menu.url));

        return (
          <Link
            key={menu.url}
            href={menu.url}
            className={`focus-visible:ring-ring relative px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 ${
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
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{menu.text}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export { Navbar };
