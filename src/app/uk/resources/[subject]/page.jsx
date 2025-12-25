 import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation';
import Script from 'next/script';
import React from 'react'
 export async function generateMetadata({params}) {
  const{subject}=await params
  const client=createClient();
  let page;
  try {
    page=await client.getByUID("resource",subject);
  } catch (error) {
    return {
      title:"Not Found",
      description:"The requested page could not be found.",
      robots:{index:false,follow:false},
    }
  }
  return {
    title:page?.data?.meta_title,
    description:page?.data?.meta_description,
    keywords:page?.data?.keywords?.map((k) => k.keyword),
    alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/resources/${subject}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: page?.data?.meta_title,
      description: page?.data?.meta_description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/resources/${subject}`,
      images: page?.data?.meta_image?.url
        ? [
            {
              url: page?.data?.meta_image?.url,
              width: 800,
              height: 600,
              alt: page?.data?.meta_image?.alt,
            },
          ]
        : [],
      siteName: "Your Future Campus",
      locale: "en-GB",
      type: "website",
    },
    publisher:  'Your Future Campus',
    twitter: {
      card: "summary_large_image",
      title: page?.data?.title,
      description: page?.data?.description,
      images: page?.data?.meta_image?.url
        ? [
            {
              url: page?.data?.meta_image?.url,
              width: 800,
              height: 600,
              alt: page?.data?.meta_image?.alt,
            },
          ]
        : [],
    },
  }
 }
 const UkResourecs = async({params}) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const{subject}=await params
  const client=createClient();
  let page;
  try {
    page=await client.getByUID("resource",subject);
  } catch (error) {
    return notFound();
  }
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
            const ItemPageSchema= {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name":  page?.data?.meta_title,
  "url":  `${BASE_URL}/uk/resources/${subject}`,
  "description":  page?.data?.meta_description,
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item":  BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Maths",
        "item": "https://www.yourfuturecampus.com/uk/resources/maths/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Resources",
        "item": `${BASE_URL}/uk/resources/${subject}`
      }
    ]
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Maths Resource Categories",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Worksheets",
        "url":  `${BASE_URL}/uk/resources/${subject}/worksheets`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Past Papers",
        "url":  `${BASE_URL}/uk/resources/${subject}/past-papers`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Study Guides",
        "url":  `${BASE_URL}/uk/resources/${subject}/study-guides`
      }
    ]
  }
}

   return (
     <main>
       <SliceZone slices={page.data.slices} components={components} context={{subject}}/>
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ItemPageSchema) }} />
     </main>
   )
 }
 
 export default UkResourecs
 