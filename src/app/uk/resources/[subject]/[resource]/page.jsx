import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import { notFound } from 'next/navigation';
import Script from 'next/script';
export async function generateMetadata({params}) {
  const{subject,resource}=await params
  const client=createClient();
  let page;
  try {
    page=await client.getByUID("resource",`${resource}`);
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
const page = async({params}) => { 
  const client=createClient();
    const{subject,resource}=await params
    
    let page;
    
    try {
    page = await client.getByUID("resource",`${resource}`); 
     if (!page?.data?.parenturl || page.data.parenturl.toLowerCase() !== subject.toLowerCase()) {
     
      return notFound();
    }
    } catch (error) {
      return notFound()
    }
     console.log("parenetUrl",page.data.parenturl);
     // Extract FAQs from the page data
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
            //breadcrumb schema
            const breadcrumbSchema = {
              "@context": "https://schema.org",
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
                  name: subject,
                  item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/resources/${subject}`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Resources",
                  item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/resources`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: resource,
                  item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/resources/${subject}/${resource}`,
                },
              ],
            }
            // itemlist schema
            const itemlistSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name":  page?.data?.meta_title,
  "description":  page?.data?.meta_description,
  "numberOfItems": page?.data?.stages?.length,
  "itemListElement": page?.data?.stages?.map((stage) => ({
    "@type": "ListItem",
    "position": stage.stage,
    "name": stage.name,
    "url": `${process.env.NEXT_PUBLIC_BASE_URL}/uk/resources/${subject}/${resource}/${stage.stage}`
  }))
}

  return (
    <main className='sm:mx-4 md:mx-10'>
     <SliceZone slices={page?.data?.slices} components={components} context={{subject,resource}}/>
     <Script type="application/ld+json" id="faq-schema" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
     <Script type="application/ld+json" id="breadcrumb-schema" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
     <Script type="application/ld+json" id="itemlist-schema" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemlistSchema) }} />
    </main>
  )
}

export default page
