"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
        >
          SEUN AWOSIKA<span className="text-blue-600"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Articles
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </Link>

          <a
            href="https://seunawosika.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Website
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-900 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-700"
            >
              Home
            </Link>

            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-700"
            >
              Articles
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-700"
            >
              About
            </Link>

            <a
              href="https://seunawosika.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-5 py-3 text-center font-medium text-white"
            >
              Visit Website
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}