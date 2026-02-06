"use client";

import Link from "next/link";
import { useState } from "react";

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="hidden md:block">
      <Link
        href="/create"
        className="fab"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <svg 
          className={`w-7 h-7 transition-transform duration-200 ${isExpanded ? "rotate-45" : ""}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
        </svg>
      </Link>
    </div>
  );
}
