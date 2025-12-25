"use client"

import React from 'react'
import { useEffect } from 'react'
import { useCountry } from '@/app/context/CountryContext'
import { useRouter } from 'next/navigation'
const ZaEnglish = () => {
    const { country } = useCountry()
    const router = useRouter();

    useEffect(() => {
        if (country) {
            if (country === 'South Africa') {
                return;
            } else {
                switch (country) {
                    case 'Canada':
                        router.push('/ca/online-english-tuition');
                        break;
                    case 'Hong Kong':
                        router.push('/hk/online-english-tuition');
                        break;
                    case 'Philippines':
                        router.push('/ph/online-english-tuition');
                        break;
                    case 'Malaysia':
                        router.push('/my/online-english-tuition');
                        break;
                    case 'New Zealand':
                        router.push('/nz/online-english-tuition');
                        break;
                    case 'United States':
                        router.push('/us/online-english-tuition');
                        break;
                    case 'United Kingdom':
                        router.push('/uk/online-english-tuition');
                        break;
                    case 'India':
                        router.push('/in/online-english-tuition');
                        break;
                    case 'Australia':
                        router.push('/au/online-english-tuition');
                        break;
                    case 'United Arab Emirates':
                        router.push('/ae/online-english-tuition');
                        break;
                    case 'Singapore':
                        router.push('/sg/online-english-tuition');
                        break;
                    default:
                        router.push('/online-english-tuition'); s
                }
            }
        }
    }, [country, router]);

    if (!country || country !== 'South Africa') {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center">
                    <div className="loader mb-4"></div>
                    <h2 className="text-xl font-semibold">Loading, please wait...</h2>
                </div>
            </div>
        );
    }

    return (
        <>
            {country === 'South Africa' && (

                <div>
                    South Africa english page will be here soon!...
                </div>
            )}
        </>

    )
}

export default ZaEnglish