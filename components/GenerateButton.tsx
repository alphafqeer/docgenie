"use client";
import React from "react";

export default function GenerateButton() {
  return (
    <button
      onClick={() => alert("Preview generation comes in Step 2")}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Preview generation
    </button>
  );
}
