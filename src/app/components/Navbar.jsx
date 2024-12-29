"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav
      style={{
        padding: "1rem",
        background: "#f5f5f5",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/healthcare_consulting">Services</Link>
      <Link href="/health_media_management">Portfolio</Link>
      <Link href="/medical_tourism">medical_tourism</Link>
      <Link href="/academy">academy</Link>
      <Link href="/career">career</Link>
      <Link href="/articles">FAQ</Link>
    </nav>
  );
}
