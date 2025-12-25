import Cta from "@/components/examprep/subjects/Cta";
import ExamPagesSection from "@/components/examprep/subjects/ExamPagesSection";

import HeroSection from "@/components/examprep/subjects/HeroSection";
import WhatWeProvideSection from "@/components/examprep/subjects/WhatWeProvideSection";
import Faqs from "@/components/shared/FAQ";
import { createClient } from "@/prismicio";

import { notFound } from "next/navigation";
import Script from "next/script";
import React from "react";
export async function generateMetadata( ) {
    const BASE_URL = "https://www.yfcampus.com";
     
    const client = createClient();
    
    let page;
    try {
        page = await client.getByUID("examprep", "maths");
        console.log(page);
        if (!page) {
            return notFound();
        }
        return {
            title: page.data.meta_title,
            description: page.data.meta_description,
            alternates: { canonical: `${BASE_URL}/uk/exam-prep/maths` },
            robots: { index: true, follow: true },
            openGraph: {
                title: page.data.meta_title,
                description: page.data.meta_description,
                url: `${BASE_URL}/uk/exam-prep/maths`,
                images: page.data.meta_image?.url
                    ? [
                          {
                              url: page.data.meta_image.url,
                              width: 800,
                              height: 600,
                              alt: page.data.meta_image.alt,
                          },
                      ]
                    : [],
            },
            twitter: {
                card: "summary_large_image",
                title: page.data.meta_title,
                description: page.data.meta_description,
                images: page.data.meta_image?.url
                    ? [
                          {
                              url: page.data.meta_image.url,
                              width: 800,
                              height: 600,
                              alt: page.data.meta_image.alt,
                          },
                      ]
                    : [],
            },
        };
    } catch (error) {
        console.log(error);
        return notFound();
    }
    const title = page?.data?.hero[0].title[0].text;
    const subtitle = page?.data?.hero[0].subtitle;
    const description = page?.data?.hero[0].desc[0].text;
    const imageSrc = "Images/Icons/examBoard/maths.webp";
}
const page = async ( ) => {
    const BASE_URL = "https://www.yfcampus.com";
   
    const client = createClient();
    
    let page;
    try {
        page = await client.getByUID("examprep", "maths");
        console.log(page);
        if (!page) {
            return notFound();
        }
    } catch (error) {
        console.log(error);
        return notFound();
    }
 
    const title = page?.data?.hero[0].title[0].text;
     const description = page?.data?.hero[0].desc[0].text;
    const imageSrc = "Images/Icons/examBoard/maths.webp";
    const exams = page?.data?.exam_pages.map((i) => {
        return {
            title: i.title[0].text,
            link: i.page_link.url,
            text: i.page_link.text,
        };
    });
    const features = page?.data?.what_we_provide.map((i) => {
        return {
            title: i.title[0].text,
            icon: i.image.url,
            alt: i.image.alt,
        };
    });
    //faqs schema
    const faqsSchema = {
        "@context": "https://schema.org/FAQPage",
        "@type": "FAQPage",
        mainEntity: page?.data?.faqs?.map((faq) => ({
            "@type": "Question",
            name: faq?.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq?.answer?.map((block) => block.text).join(" "),
            },
        })),
    };
    // BreadcrumbList schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: BASE_URL,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Exam Preparation",
                item: `${BASE_URL}/uk/exam-prep`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Maths",
                item: `${BASE_URL}/uk/exam-prep/maths`,
            },
        ],
    };
    // course schema
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name:
            "Maths Exam Preparation (SATs, GCSE, A-Level, University)" ||
            page?.data?.meta_title,
        description: page?.data?.meta_description,
        provider: {
            "@type": "Organization",
            name: "YF Campus",
            url: BASE_URL,
        },
    };
    const combinedSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page.data.meta_title,
        description: page.data.meta_description,

        breadcrumb: breadcrumbSchema,
        mainEntity: faqsSchema,
        hasCourse: courseSchema,
    };
    return (
        <main className="mx-10 ">
            <HeroSection
                title={title}
              
                description={description}
                imageSrc={page?.data?.hero[0].image.url}
            />
            <ExamPagesSection exams={exams} />
            <WhatWeProvideSection features={features} />
            <Cta cta={page?.data?.cta[0].title[0].text} />
            <Faqs faqs={page?.data?.faqs} />
            <Script
                id="combined-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(combinedSchema),
                }}
                strategy="beforeInteractive"
            />
        </main>
    );
};

export default page;
