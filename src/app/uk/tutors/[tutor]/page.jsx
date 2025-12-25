import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import { notFound } from 'next/navigation'
import React from 'react'
import Script from 'next/script'
export async function generateMetadata({ params }) {
  const { tutor } = params;
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/uk/tutors/${tutor}`;

  const client = createClient();
  let page;

  try {
    page = await client.getByUID("tutor", tutor);
  } catch (error) {
     return{
      title: "Not Found",
      robots: { index: false, follow: false },
     }
  }

  const metaTitle = page?.data?.meta_title || "Tutor Profile – Your Future Campus";
  const metaDescription =
    page?.data?.meta_description ||
    "Learn from experienced UK tutors at Your Future Campus.";
  const metaImage = page?.data?.meta_image?.url;

  return {
    title: metaTitle,
    description: metaDescription,
    robots: { index: true, follow: true },
    keywords: page?.data?.keywords?.map((k) => k.keyword) || [],
    alternates: { canonical: baseUrl },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: baseUrl,
      images: metaImage
        ? [
            {
              url: metaImage,
              width: 800,
              height: 600,
              alt: page?.data?.meta_image?.alt || "Tutor image",
            },
          ]
        : [],
      siteName: "Your Future Campus",
      locale: "en-GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: metaImage
        ? [
            {
              url: metaImage,
              width: 800,
              height: 600,
              alt: page?.data?.meta_image?.alt || "Tutor image",
            },
          ]
        : [],
    },
  };
}

const page = async({params}) => {
    const{tutor} = await params
    const client=createClient()
    let page;
    try {
page=await client.getByUID("tutor", `${tutor}`); 
      
    } catch (error) {
      return  notFound()
    }
    const breadCrumbSchema={
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
            name: "Tutors",
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/tutors`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${tutor}`,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/tutors/${tutor}`,
          },
        ],
    }
    const itemPageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: page?.data?.meta_title,
    description: page?.data?.meta_description,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/tutors/${tutor}`,
    mainEntity: {
      "@type": "Person",
      name: page?.data?.meta_title,
      jobTitle: "Online Tutor",
      worksFor: {
        "@type": "Organization",
        name: "Your Future Campus",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
    },
  }

  return (
    <main>
       <SliceZone slices={page.data.slices} components={components} />
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbSchema) }} />
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemPageSchema) }} />
    </main>
  )
}

export default page
