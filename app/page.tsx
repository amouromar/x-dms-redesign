"use client";

import * as React from "react";
import { Navbar } from "../components/Navbar";
import Home from "./components/Home";

export default function page() {
  return (
    <div className="h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <main className="container mx-auto">
        <Home />
      </main>
    </div>
  );
}
