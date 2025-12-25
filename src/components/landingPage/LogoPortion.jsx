"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LogoPortion = ({ heading }) => {
    const pathname = usePathname();

    return (
        <div className="p-6 md:p-8 rounded-lg text-center text-black">
            {(pathname === "/online-quran-classes-nz" || pathname === "/online-quran-classes-au") && (
                <Image
                    width={175}
                    height={175}
                    src="/Images/yfc-logo.webp"
                    alt="Yfc Logo"
                    className="mx-auto mb-4"
                />
            )}

            <div className="font-bold text-[20px] md:text-[24px] mb-2">
                {heading}
            </div>
            <div className="text-[16px] mb-2">(Male & Female)</div>
            <hr className="mb-4 border-gray-400" />
            <div className="text-[16px] mb-6 text-black">
                Qualified Male & Female Teachers
            </div>
            <hr className="mb-4 border-gray-400" />
            <div className="text-[16px] mb-6 text-black">
                24/7 Flexible Scheduling
            </div>
            {/* test */}
            <hr className="mb-4 border-gray-400" />
            <Link href="https://wa.me/61480050048"
            aria-label="Whatsapp contact" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center mt-4 cursor-pointer"
                >
                    <img
                        alt="WhatsApp Icon"
                        src="/Images/Icons/whatsapp.svg"
                        className="w-6 mr-2 h-auto"
                    />
                    <span>+61 48 00500 48</span>
            
            </Link>
        </div>
    );
};

export default LogoPortion;
