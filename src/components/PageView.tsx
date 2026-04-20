"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function PageView() {
  useEffect(() => {
    try {
      sendGAEvent("event", "diagnosis_lp_view", {
        event_category: "engagement",
        event_label: "lp_home",
        page_path: window.location.pathname,
      });
    } catch {
      /* GA not ready yet */
    }
  }, []);

  return null;
}
