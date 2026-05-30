import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "/public/ECOLOOP.jpg";
import Button from "./Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-black/40 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          max-w-7xl mx-auto
          flex items-center justify-between
          px-6 md:px-10 py-4
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="EcoLoop Logo"
            className="
              w-11 h-11
              rounded-full
              object-cover
              border border-white/20
            "
          />

          <h1 className="text-white text-2xl font-bold tracking-wide">
            ECOLOOP
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-200 hover:text-emerald-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-200 hover:text-emerald-400 transition"
          >
            About
          </Link>

          <Link
            to="/"
            className="text-gray-200 hover:text-emerald-400 transition"
          >
            Impact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="https://github.com">Start Scanning</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-white
          "
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-black/60 backdrop-blur-xl
            border-t border-white/10
            px-6 py-6
          "
        >
          <nav className="flex flex-col gap-6 text-white">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-emerald-400 transition"
            >
              Home
            </Link>

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-emerald-400 transition"
            >
              About
            </Link>

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-emerald-400 transition"
            >
              Impact
            </Link>

            <Button href="https://github.com">Start Scanning</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
