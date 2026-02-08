"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9 p-2" />;

  // cycle order
  const themeCycle = ["light", "dark", "system"];

  const toggleTheme = () => {
    const currentIndex = themeCycle.indexOf(theme || "system");
    const nextIndex = (currentIndex + 1) % themeCycle.length;
    setTheme(themeCycle[nextIndex]);
  };

  // map icons to current theme
  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun size={18} />;
      case "dark":
        return <Moon size={18} />;
      case "system":
        return <Monitor size={18} />;
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="focus-visible:ring-ring hover:bg-accent text-muted-foreground hover:text-foreground relative rounded-md p-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme} // Key triggers animation when theme changes
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {renderIcon()}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export { ThemeToggle };
