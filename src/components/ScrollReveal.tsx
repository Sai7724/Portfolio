import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.4,
}: ScrollRevealProps) {
  const ref = useRef(null);
  // Trigger when 10% of the element is in view
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96, rotate: -1.5 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
          : { opacity: 0, y: 30, scale: 0.96, rotate: -1.5 }
      }
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom snappy bezier
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
