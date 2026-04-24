import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold tracking-tighter text-white mb-2">
            FNNL<span className="text-zinc-500">.X</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left">
            Building the infrastructure for the next generation of AI-powered agencies and SaaS founders.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} FNNL.X. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
