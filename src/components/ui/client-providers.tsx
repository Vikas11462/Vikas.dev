"use client";

import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { CommandPalette } from "@/components/ui/command-palette";
import { CustomCursor } from "@/components/ui/custom-cursor";

/**
 * ClientProviders — Wraps all client-side context providers and global UI.
 * Separated from layout.tsx to keep the root layout a Server Component.
 */
export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <CommandPalette />
      <CustomCursor />
    </ThemeProvider>
  );
}
