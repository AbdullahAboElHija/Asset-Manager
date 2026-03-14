import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ScrollReveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out curve
        delay 
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
