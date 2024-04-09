import React from "react";
import HeroSection from "@/components/Hero";
import About from "@/components/About";
import Awards from "@/components/Award";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="px-6 p-2">
        <HeroSection />
        <About />
        <Awards />
        <Contact/>
      </div>
    </div>
  );
}
