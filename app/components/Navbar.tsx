"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <Link href="/" className="nav-logo">Kingstep</Link>
      <div className="nav-links">
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}