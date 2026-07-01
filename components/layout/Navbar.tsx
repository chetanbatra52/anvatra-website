"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "border-b border-slate-200/70 bg-white/90 backdrop-blur-sm"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8"
      >
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <Logo />

          <div className="hidden md:flex">
            <NavLinks />
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:block">
            <Button href="/contact">
  Start Hiring
</Button>
          </div>

          <MobileMenuButton
            isOpen={isMenuOpen}
            onClick={toggleMenu}
          />
        </div>
      </nav>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </header>
  );
}