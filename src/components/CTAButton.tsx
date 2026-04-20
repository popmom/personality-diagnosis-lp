"use client";

import { useCallback } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const FORM_URL =
  "https://docs.google.com/forms/u/0/d/1wCBEO7EaEKMvGxfJfQ3mJp4KjUc_3zHgXRMuimuDziY/viewform?pli=1&usp=drivesdk&pli=1&authuser=0&edit_requested=true";

type Variant = "primary" | "ghost";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  location: string;
  className?: string;
};

export default function CTAButton({
  children,
  variant = "primary",
  location,
  className = "",
}: Props) {
  const handleClick = useCallback(() => {
    try {
      sendGAEvent("event", "diagnosis_form_click", {
        event_category: "engagement",
        event_label: "google_form_redirect",
        cta_location: location,
      });
    } catch {
      /* GA not ready — proceed to redirect regardless */
    }

    window.setTimeout(() => {
      try {
        sendGAEvent("event", "diagnosis_form_redirect", {
          event_category: "engagement",
          event_label: "google_form",
          cta_location: location,
        });
      } catch {
        /* GA not ready */
      }
      window.location.href = FORM_URL;
    }, 500);
  }, [location]);

  if (variant === "ghost") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`group inline-flex items-center gap-3 pb-1 text-sm tracking-[0.18em] text-ink border-b border-ink/60 hover:border-terra hover:text-terra transition-colors duration-500 ${className}`}
      >
        <span>{children}</span>
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group relative inline-flex items-center gap-5 overflow-hidden bg-ink px-10 py-5 text-paper transition-colors duration-500 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra focus-visible:ring-offset-4 focus-visible:ring-offset-paper ${className}`}
      aria-label="無料で診断を受ける"
    >
      <span className="relative z-10 text-[0.95rem] font-medium tracking-[0.14em]">
        {children}
      </span>
      <span
        aria-hidden
        className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-2"
      >
        →
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-terra transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-x-100"
      />
    </button>
  );
}
