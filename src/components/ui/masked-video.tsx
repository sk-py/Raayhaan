"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MaskedVideo({ videoPath }: { videoPath: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const clipPathProgress = useTransform(scrollYProgress, [0, 0.5], [20, 80]);

  return (
    <div ref={containerRef} className="relative bg-black w-full h-[200vh]">
      <div
        ref={stickyRef}
        className="top-0 sticky flex justify-center items-center w-full h-screen"
      >
        <div className="relative w-full max-w-full h-full max-h-full overflow-hidden aspect-square">
          <motion.div
            className="w-full h-full"
            style={{
              clipPath: useTransform(
                clipPathProgress,
                (value: number) => `circle(${value}% at 50% 50%)`
              ),
            }}
          >
           
            <video
              className="absolute inset-0 rounded-lg w-full h-full object-cover"
              src={videoPath}
              autoPlay
              loop
              muted
              playsInline
            />
                        <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8 rounded-xl bg-black bg-opacity-30  max-w-3xl">
                <h2 className="text-4xl font-bold mb-4 leading-tight roboto-bold">Bringing Ideas to Life with Motion & CGI</h2>
                <p className="text-lg leading-relaxed roboto-bold">
                  From dynamic motion graphics to immersive 3D visuals and stunning CGI ads, I craft videos that
                  captivate, engage, and leave a lasting impact. Elevate your brand with visually compelling
                  storytelling.
                </p>
              </div>
            </div>
          </motion.div>
          <div
            className="bottom-0 z-[10] absolute w-full h-[370px] translate-y-[5px]"
            style={{
              maskImage: "linear-gradient(transparent, black 85%)",
              backgroundColor: "rgb(12, 12, 12)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
