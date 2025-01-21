import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor-context";

export function CustomCursor({ cursorText }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { isEmailHover } = useCursor();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor fixed pointer-events-none z-50 flex items-center justify-center"
      animate={{
        x: position.x - 30,
        y: position.y - 30,
        opacity: isVisible ? 1 : 0,
        scale: isEmailHover ? 2 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 50 }}
      style={{ width: "50px", height: "50px" }}
    >
      <div
        className={`relative rounded-full ${
          isEmailHover
            ? "backdrop-invert text-inherit text-slate-400"
            : "border-2 border-white bg-transparent"
        } w-full h-full flex items-center justify-center text-xs`}
      >
        <p className="text-center cursortext">{isEmailHover && cursorText}</p>
      </div>
    </motion.div>
  );
}
