"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  /** Width class for responsive sizing. Default: "w-[140px] sm:w-[170px] lg:w-[200px]" */
  size?: "default" | "small" | "large";
}

/**
 * Digency Consults brand logo that adapts to the current theme.
 * - Light theme: shows the original colored logo
 * - Dark theme: applies brightness/invert filter for white appearance
 * 
 * No separate text is rendered — the logo image IS the brand.
 */
export function BrandLogo({ className, size = "default" }: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const sizeClasses = {
    small: "w-[120px] sm:w-[140px] lg:w-[160px]",
    default: "w-[140px] sm:w-[170px] lg:w-[200px]",
    large: "w-[160px] sm:w-[190px] lg:w-[220px]",
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Image
      src="/branding/digency-logo.png"
      alt="Digency Consults"
      width={220}
      height={50}
      className={cn(
        sizeClasses[size],
        "h-auto object-contain transition-all duration-300",
        // In dark mode, invert + increase brightness to make logo white/light
        isDark && "brightness-0 invert",
        className
      )}
      priority
    />
  );
}
