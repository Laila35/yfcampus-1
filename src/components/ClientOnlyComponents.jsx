"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import client-only widgets
const WhatsappFloating = dynamic(() => import("./WhatsappFloating"));
const Footer = dynamic(() => import("./Footer"));
const TawkTo = dynamic(() => import("./TawkChat"));

export default function ClientOnlyComponents() {
  const [showTawk, setShowTawk] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTawk(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WhatsappFloating />
      {showTawk && <TawkTo />}
      <Footer />
    </>
  );
}
