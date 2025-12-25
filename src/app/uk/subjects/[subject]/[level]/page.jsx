import { createClient } from "@/prismicio";
import { components } from "@/slices"; // auto-generated slice mapping
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import Script from "next/script";
export async function generateMetadata({ params }) {
    const { subject, level } = await params;
    const client = createClient();
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    try {
        let page = await client.getByUID("level1", `${level}`);
        return {
            title: page.data.meta_title,
            description: page.data.meta_description,
            alternates: { canonical: `${url}/uk/subjects/${subject}/${level}` },
            robots: { index: true, follow: true },
            keywords: page.data.keywords.map((k) => k.keyword),
            openGraph: {
                title: page.data.meta_title,
                description: page.data.meta_description,
                url: `${url}/uk/subjects/${subject}/${level}`,
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
            twitter: {
                card: "summary_large_image",
                title: page.data.meta_title,
                description: page.data.meta_description,
                images: page.data.meta_image?.url,
            },
        };
    } catch (error) {
        return {
            title: "Page Not Found | Your Future Campus UK",
            description: "The requested page could not be found.",
            robots: { index: false, follow: false },
        };
    }
}
const Level = async ({ params }) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const { subject, level } = await params;

 
    const client = createClient();
    let page;
    try {
        page = await client.getByUID("level1", `${level}`);
if (  page.data.parenturl !== subject) {
  return notFound();
}

    } catch (error) {
        console.log(error.message);
        return notFound();
    }
    const faqs =
        page?.data?.slices
            ?.filter(
                (slice) =>
                    slice.slice_type === "faqs_section" &&
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
        canonicalUrl: `${BASE_URL}/uk/subjects/${subject}/${level}`,
        image: page.data.meta_image?.url,
        inLanguage: "en-GB",
        isPartOf: {
            "@type": "WebSite",
            name: "Your Future Campus",
            url: BASE_URL,
        },
    };
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
        ],
    };
const ItemPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemPage",
  "name": page.data.meta_title,
  "description": page.data.meta_description,
  "image": page.data.meta_image?.url,
  "url": `${BASE_URL}/uk/subjects/${subject}/${level}`,
  "mainEntity": {
    "@type": "Service",
    "name": page.data.meta_title,
    "description": page.data.meta_description,
    "provider": {
      "@type": "Organization",
      "name": "Your Future Campus",
      "url": BASE_URL,
      "logo": `${BASE_URL}/logo.png`
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Future Campus",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`
  }
}

    return (
        <main className="px-6 py-10">
            <SliceZone
                slices={page.data.slices}
                components={components}
                context={{ stage: level }}
            />
            <Script
                type="application/ld+json"
                id="course-schema"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(CourseSchema),
                }}
            />
            {faqSchema && (
                <Script
                    type="application/ld+json"
                    id="faq-schema"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema, null, 2),
                    }}
                   
                />
            )}

            <Script
                type="application/ld+json"
                id="breadcrumb-schema"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadCrumbSchema),
                }}
                
            />
            <Script
                type="application/ld+json"
                id="item-page-schema"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(ItemPageSchema),
                }}
                
            />
        </main>
    );
};

export default Level;
