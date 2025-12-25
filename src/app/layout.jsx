export const dynamic = "force-dynamic";

import ClientOnlyComponents from "@/components/ClientOnlyComponents";
// import Navbar from "@/components/Navbar";
 
import { GoogleTagManager } from "@next/third-parties/google";
 
import { CountryProvider } from "../app/context/CountryContext";
import "./globals.css";
 
import DynamicNavbar from "@/components/Navbar/DynamicNavbar";

export const metadata = {
    title: "Your Website Title",
    description: "Your Website Description",
};

export default async function RootLayout({ children }) {
 

    return (
        <html lang="en">
            <body>
                <CountryProvider>
                    <GoogleTagManager gtmId="GTM-5KG5FBG" /> 
                     <DynamicNavbar />
                    {children}
                    <ClientOnlyComponents />
                </CountryProvider>
            </body>
        </html>
    );
}
