import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import Script from "next/script";
import { title } from "node_modules/@prismicio/client/dist/helpers/isFilled";
import React from "react";
export async function generateMetadata({params}) {
    const {subject, level,level2} = await params
    const client = createClient();
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    try {
        let page=await client.getByUID("level2", `${level2}`);
        let keyword = page?.data?.keywords?.map(i => i.keyword) ?? [];

        return{
            title:page.data.meta_title,
            description:page.data.meta_description,
            robots:{index:true,follow:true},
            keywords:[...keyword],
            alternates: { canonical: `${baseurl}/uk/subjects/${subject}/${level}/${level2}` },
openGraph: {
                title: page.data.meta_title,
                description: page.data.meta_description,
                url: `${baseurl}/uk/subjects/${subject}/${level}/${level2}`,
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
                siteName: "Your Future Campus",
                locale: "en-GB",
                type: "website",
            },
             twitter:{
                card:"summary_large_image",
                title: page.data.meta_title,
                description: page.data.meta_description,
                image: page.data.meta_image?.url
             }
}
        }
        
     catch (error) {
        return{
            title:"title not found",
            description:"description not found",
            robots:{index:false,follow:false}
            
    }
}
}
const Level2 = async({ params}) => {
    let BASE_URL=process.env.NEXT_PUBLIC_BASE_URL
const {subject, level, level2} = await params
const client=createClient()
 
let page;
try {
    page=await client.getByUID("level2", `${level2}`);
    if (!page || !page.data || page.data.parenturl !== level ) {
        return notFound();
    }
    
} catch (error) {
    return notFound();
}
const faqs =
        page?.data?.slices
            ?.filter(
                (slice) =>
                    slice.slice_type === "level2_faqs" &&
                    Array.isArray(slice.primary?.faqs) &&
                    slice.primary.faqs.length > 0,
            )
            ?.flatMap((slice) =>
                slice.primary.faqs.map((faq) => ({
                    question: faq.question,
                    answer: faq.answer[0].text,
                })),
            ) || [];

    // ✅ Build JSON-LD only if FAQs exist
    const faqSchema =
        faqs.length > 0
            ? {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                          "@type": "Answer",
                          text: faq.answer,
                      },
                  })),
              }
            : null;
            //course Schema
             const CourseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        title: page.data.title,
        description: page.data.description,
        provider: {
            "@type": "Organization",
            name: "Your Future Campus",
            url: BASE_URL,
        },
        canonicalUrl: `${BASE_URL}/uk/subjects/${subject}/${level}/${level2}`,
        image: page.data.meta_image?.url,
        inLanguage: "en-GB",
        isPartOf: {
            "@type": "WebSite",
            name: "Your Future Campus",
            url: BASE_URL,
        },
    };
    //breadcrumb schema
      const breadCrumbSchema = {
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
                name: subject,
                item: `${BASE_URL}/uk/subjects/${subject}`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: level,
                item: `${BASE_URL}/uk/subjects/${subject}/${level}`,
            },
            {
                "@type": "ListItem",
                position: 4,
                name: level2,
                item: `${BASE_URL}/uk/subjects/${subject}/${level}/${level2}`,
            }
        ],
    };
    return (
        <main className="px-6 py-10">
           
            <SliceZone
                slices={page.data.slices}
                components={components}
                context={{level2}}
            />
            <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            key="faq-schema"
        
            />
            <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(CourseSchema) }}
            key="course-schema"
      
            />
            <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbSchema) }}
            key="breadcrumb-schema"
           
            />
        </main>
    );
};

export default Level2;
