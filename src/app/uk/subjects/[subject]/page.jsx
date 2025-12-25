import { createClient } from "@/prismicio";
import { components } from "@/slices"; // auto-generated slice mapping
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import Script from "next/script";
export async function generateMetadata({ params }) {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const { subject } = await params;

    const client = createClient();
    let page;
    try {
        page = await client.getByUID("subject", subject);

        return {
            title: page.data.meta_title,
            description: page.data.meta_description,

            alternates: { canonical: `${BASE_URL}/uk/subjects/${subject}` },
            robots: { index: true, follow: true },
            keywords: page.data.keywords.map((k) => k.keyword),
            openGraph: {
                title: page.data.meta_title,
                description: page.data.meta_description,
                url: `${BASE_URL}/uk/subjects/${subject}`,
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
        return {
            title: "Not Found",
            description: "The requested page could not be found.",
            robots: { index: false, follow: false },
        }
    }
}
const Page = async ({ params }) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const { subject } = await params;
    const client = createClient();
    let page;
    try {
        page = await client.getByUID("subject", subject);
    } catch (error) {
        console.log(error);
        return notFound();
    }
    //jsonld schmea
     const faqs =
        page?.data?.slices
            ?.filter(
                (slice) =>
                    slice.slice_type === "faqs" &&
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
                name: "Subjects",
                item: `${BASE_URL}/uk/subjects`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: subject,
                item: `${BASE_URL}/uk/subjects/${subject}`,
            },
        ],
    };
   
    // ✅ ItemPage Schema (represents the Science Tuition page)
    const itemPageSchema = {
        "@context": "https://schema.org",
        "@type": "ItemPage",
        name: page.data.meta_title,
        description: page?.data?.meta_description,
        url: `${BASE_URL}/uk/subjects/${subject}`,
        inLanguage: "en-GB",
        isPartOf: {
            "@type": "WebSite",
            name: "Your Future Campus UK",
            url: BASE_URL,
        },
        mainEntity: {
            "@type": "Service",
            name: page?.data?.meta_title || "Your Future Campus UK",
            provider: {
                "@type": "Organization",
                name: "Your Future Campus UK",
                url: BASE_URL,
            },
            areaServed: {
                "@type": "Country",
                name: "United Kingdom",
            },
        },
    };
 

    return (
        <main className="px-6 md:px-10">
            {/* Render all slices */}
            <SliceZone
                slices={page.data.slices}
                components={components}
                context={{ subject }}
            />
           {faqSchema && (
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                    id="faq-schema"
                 
                />
            )}
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadCrumbSchema),
                }}
                id="breadcrumb-schema"
                 
            />
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(itemPageSchema),
                }}
                id="itempage-schema"
              
            />
                 
        </main>
    );
};

export default Page;
