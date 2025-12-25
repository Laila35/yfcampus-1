"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import StickyNavbar from "@/components/StickyNavbar";

import UkDynamicNavbar from "./UkDynamicNavba";

export default function DynamicNavbar() {
    const pathname = usePathname();
    const isUkPage = pathname?.startsWith("/uk");

    return (
        <>
            {isUkPage ? <UkDynamicNavbar /> : <Navbar />}

            {isUkPage ? <UkDynamicNavbar /> : <StickyNavbar />}
        </>
    );
}
