"use client";

import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import BackToTop from "@/components/back-to-top";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}


