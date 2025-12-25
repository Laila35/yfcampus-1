"use client";
import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    // Prevent duplicate script insertion (important during route changes)
    if (document.getElementById("tawkto-script")) return;

    const s0 = document.getElementsByTagName("script")[0];
    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/5d3553bc6d808312283955e7/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    return () => {
      const existing = document.getElementById("tawkto-script");
      if (existing) existing.remove();
    };
  }, []);

  return null;
};

export default TawkTo;
