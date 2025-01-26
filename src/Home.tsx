import { useEffect, useState } from "react";
import { LetsTalk } from "./sections/LetsTalk";
import { Hero } from "./sections/Hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import { HomeIcon, Mail, User } from "lucide-react";
import MaskedVideo from "./components/ui/masked-video";
import CardStackSection from "./sections/CardsStackSection";
import { ReactLenis, useLenis } from "lenis/react";
import AnimatedCursor from "react-animated-cursor";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const copyEmailElement = document.getElementById("copyemail");

    if (copyEmailElement) {
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);

      copyEmailElement.addEventListener("mouseenter", handleMouseEnter);
      copyEmailElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        copyEmailElement.removeEventListener("mouseenter", handleMouseEnter);
        copyEmailElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  console.log(isHovered);

  function isShortcutKey(e: KeyboardEvent, keyCode: string) {
    // Check for Ctrl + Shift + Key or Cmd + Option + Key
    return (
      (e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0)) ||
      (e.metaKey && e.altKey && e.keyCode === keyCode.charCodeAt(0))
    );
  }

  useEffect(() => {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    document.onkeydown = (e) => {
      // Disable F12, Ctrl + Shift + I/J/C, Cmd + Option + I/J/C, Ctrl + U
      if (
        e.keyCode === 123 ||
        isShortcutKey(e, "I") ||
        isShortcutKey(e, "J") ||
        isShortcutKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) ||
        (e.metaKey && e.keyCode === "U".charCodeAt(0))
      ) {
        e.preventDefault();
        return false;
      }
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "home",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "letstalk",
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="no-scrollbar">
      <ReactLenis root>
        <FloatingNav navItems={navItems} />
        <Hero />
        <MaskedVideo videoPath="/maskedVideo.mp4" />
        <CardStackSection />
        <LetsTalk />
        <AnimatedCursor
          showSystemCursor={true}
          outerScale={isHovered ? 10 : 4}
          outerSize={isHovered ? 24 : 10}
        >
          {isHovered && "Vopy email"}
        </AnimatedCursor>
      </ReactLenis>
    </div>
  );
}

export default Home;
