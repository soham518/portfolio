"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const sections = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [active, setActive] = useState<string>("/#hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => {
      const ids = ["hero", "about", "experience", "projects"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActive(`/#${id}`);
          break;
        }
      }
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto flex items-center justify-between px-6 h-14">
        <Link href="/" className="font-semibold">My Portfolio</Link>
        <div className="flex items-center gap-1">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`px-3 py-2 rounded-full text-sm hover:bg-secondary ${active === s.href ? "bg-secondary" : ""}`}
            >
              {s.label}
            </Link>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((resolvedTheme ?? "light") === "dark" ? "light" : "dark")}
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border"
          >
            {/* Render a deterministic icon during SSR to avoid hydration mismatch */}
            {!mounted ? (
              <Sun className="h-4 w-4 opacity-0" />
            ) : (resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
          </button>
        </div>
      </nav>
    </div>
  );
}


