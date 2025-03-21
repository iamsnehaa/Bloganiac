"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Home, Star, Info, User, Phone } from "lucide-react";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() || 0);
      setVisible(scrollYProgress.get() >= 0.05 && direction < 0);
    }
  });

  const navItems = [
    { name: "Home", link: "/home", icon: <Home size={18} /> },
    { name: "Stars", link: "/stars", icon: <Star size={18} /> },
    { name: "About", link: "/about", icon: <Info size={18} /> },
    { name: "Contact Us", link: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-[5000] pr-4 pl-6 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className="relative dark:text-neutral-50 flex items-center space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-2 py-1"
          >
            {navItem.icon}
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link
          href="/login"
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <User size={18} className="inline-block mr-1" />
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
