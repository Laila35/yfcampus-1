 
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation';
import Script from 'next/script';
 
import React from 'react'
export async function generateMetadata({params}) {
  const base_url=process.env.NEXT_PUBLIC_BASE_URL;
  const client=createClient();
  const{board,domain}=await params
  try {
    let page=await client.getByUID(board.split("-").join("_"),domain);
    return{
      title:page.data.meta_title,
      description:page.data.meta_description,
      keywords:page.data.keywords?.map((k) => k.keyword),
      alternates: { canonical: `${base_url}/uk/exam-prep/${board}/${domain}` },
      robots: { index: true, follow: true },
      publisher:"Your Future Campus",
      openGraph: {
        title: page?.data?.meta_title,
        description: page?.data?.meta_description,
        url: `${base_url}/uk/exam-prep/${board}/${domain}`,
        publisher:"Your Future Campus",
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
      twitter: {
        card: "summary_large_image",
        title: page?.data?.meta_title,
        description: page?.data?.meta_description,
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
  } catch (error) {
    
  }
}
const page = async({params}) => {
  const client=createClient();
    const{board,domain}=await params
    let page;
    try {
page=await client.getByUID(board.split("-").join("_"),domain);
      if(page?.data?.parenturl.toLowerCase() !== board.toLowerCase())
        return notFound();
    } catch (error) {
      return notFound()
    }
    const breadcrumbSchema={
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name:  domain,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/exam-prep/${board}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Exam-Prep`,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/exam-prep`,  
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `${board}`,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/exam-prep/${board}`,
          }
        ]
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
            const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name":page.data.meta_title,
  "description":  page.data.meta_description,
  "provider": {
    "@type": "Organization",
    "name": "Your Future Campus",
    "sameAs": process.env.NEXT_PUBLIC_BASE_URL
  },
  "educationalLevel":  `${board.toUpperCase()}`,
  "courseMode": "Online",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "name":  page.data.meta_title,
    "courseMode": "Online one-to-one tutoring",
    "location": {
      "@type": "VirtualLocation",
      "url": `${process.env.NEXT_PUBLIC_BASE_URL}/uk/exam-prep/${board}/${domain}/`
    },
    "instructor": {
      "@type": "Person",
      "name":   `Qualified ${domain}Tutor `
    }
  }
};

  return (
    <main className='mx-6 md:mx-10'>
     <SliceZone slices={page.data.slices} components={components} />
     <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
     <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
     <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
    </main>
  )
}

export default page
