import { motion } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { CursorProvider, useCursor } from "@/context/cursor-context";
import { useState } from "react";

function LetsTalkContent() {
  const { setIsEmailHover } = useCursor();
  const [cursorText, setcursorText] = useState("Copy Email");

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("raayhaangraphic@gmail.com");
    const cursor = document.querySelector(".custom-cursor div");

    if (cursor) {
      setcursorText("Copied!");

      setTimeout(() => {
        setcursorText("Copy Email");
      }, 1000);
    }
  };

  return (
    <footer className="inter-normal bg-[#1C1C1C] text-white min-h-screen overflow-y-hidden relative p-4 lg:p-8">
      <CustomCursor cursorText={cursorText} />
      {/* Top Navigation */}
      <nav className="flex justify-between items-start">
        <a href="/" className="text-2xl font-bold">
          RAAYHAN
        </a>
        <div className="flex gap-8">
          <a href="/more" className="hover:opacity-70 transition-opacity">
            more
          </a>
          <a href="/about" className="hover:opacity-70 transition-opacity">
            about
          </a>
          <a href="/work" className="hover:opacity-70 transition-opacity">
            work
          </a>
        </div>
      </nav>

      {/* Studio Info */}
      <div className="mt-24 hidden grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <a href="mailto:shaikh56742@gmail.com" className="text-gray-400">
            @shaikh studio
          </a>
          <p className="text-gray-400">created by Mubashir Shaikh</p>
        </div>
        <div className="space-y-2 text-right">
          <p className="text-gray-400">contact</p>
          <motion.button
            whileHover={{ opacity: 0.7 }}
            onClick={handleCopyEmail}
            className="text-white cursor-pointer"
          >
            raayhaangraphic@gmail.com
          </motion.button>
          <p className="text-white">+91 9987876738</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="grid grid-cols-2 gap-8">
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left text-gray-400 hover:text-white transition-colors"
          >
            back to top
          </motion.button>
          <div className="text-right space-y-2">
            <p className="text-gray-400">social media</p>
            <div className="space-y-1">
              <motion.a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white text-gray-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                behance
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white text-gray-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                instagram
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white text-gray-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                linkedin
              </motion.a>
            </div>
          </div>
        </div>

        {/* Let's Talk Text - Moved to bottom */}
        <motion.div
          className="mt-24 h-full relative w-full text-left cursor-pointer"
          onClick={handleCopyEmail}
          onMouseEnter={() => setIsEmailHover(true)}
          onMouseLeave={() => setIsEmailHover(false)}
        >
          <h2 className="text-[24vw] max-sm:text-[40vw] leading-none font-bold space-grotesk-med tracking-tighter">
            Let's talk
          </h2>
          <span className="md:hidden absolute -right-2 text-slate-300 bottom-6">
            Tap to <br />
            copy
            <br /> email
          </span>
        </motion.div>
      </div>
    </footer>
  );
}

export function LetsTalk() {
  return (
    <CursorProvider>
      <LetsTalkContent />
    </CursorProvider>
  );
}
