import { motion } from "framer-motion";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-semibold mb-8"
    >
      {children}
    </motion.h2>
  );
}


