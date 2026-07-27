"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4",
            light ? "text-white" : "text-primary"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "text-lg md:text-xl max-w-2xl",
              centered && "mx-auto",
              light ? "text-gray-300" : "text-text-gray"
            )}
          >
            {subtitle}
          </p>
        )}
        <div
          className={cn(
            "h-1 w-20 bg-accent mt-6",
            centered ? "mx-auto" : "mr-auto"
          )}
        />
      </motion.div>
    </div>
  );
}
