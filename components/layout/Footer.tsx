"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import CelestialBadge from "./Celestialbadge";
import { cn } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="border-t border-cinema-border bg-cinema-surface/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/afrocinemalogo.png"
              alt="AfroCinema Logo"
              width={120}
              height={120}
              className="h-28 w-28 object-contain bg-transparent"
            />
          </Link>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
            <li>
              <Link
                href="/"
                className={cn(
                  "transition-colors hover:text-cinema-gold",
                  pathname === "/" && "text-cinema-gold"
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/nollywood"
                className={cn(
                  "transition-colors hover:text-cinema-gold",
                  pathname === "/nollywood" && "text-cinema-gold"
                )}
              >
                Nollywood
              </Link>
            </li>
            <li>
              <Link
                href="/bollywood"
                className={cn(
                  "transition-colors hover:text-cinema-gold",
                  pathname === "/bollywood" && "text-cinema-gold"
                )}
              >
                Bollywood
              </Link>
            </li>
            <li>
              <Link
                href="/hollywood"
                className={cn(
                  "transition-colors hover:text-cinema-gold",
                  pathname === "/hollywood" && "text-cinema-gold"
                )}
              >
                Hollywood
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={cn(
                  "transition-colors hover:text-cinema-gold",
                  pathname === "/about" && "text-cinema-gold"
                )}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className={cn(
                  "transition-colors hover:text-cinema-gold",
                  pathname === "/faqs" && "text-cinema-gold"
                )}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={cn(
                  "transition-colors hover:text-cinema-gold",
                  pathname === "/contact" && "text-cinema-gold"
                )}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className={cn(
                  "transition-colors hover:text-cinema-gold",
                  pathname === "/disclaimer" && "text-cinema-gold"
                )}
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-cinema-border" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-3 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} AfroCinema. Data provided by{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cinema-gold/80 underline-offset-2 hover:text-cinema-gold hover:underline"
            >
              TMDB
            </a>
          </p>

          <div className="flex items-center gap-2">
            <CelestialBadge />
          </div>

          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
