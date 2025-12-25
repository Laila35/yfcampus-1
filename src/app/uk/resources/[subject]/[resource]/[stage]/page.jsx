import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react'
import { notFound } from 'next/navigation';
import React from 'react'
export async function generateMetadata({params}) {

  const client=createClient()
  const {stage}=await params
 
  try {
    let page=await client.getByUID( params.resource.split("-").join("_"),`${stage}`);
    return{
      title:page.data.meta_title,
      description:page.data.meta_description,
      keywords:page.data.keywords?.map((k) => k.keyword),
      alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/resources/${params.resource}/${stage}` },
      robots: { index: true, follow: true },
      openGraph: {
        title: page?.data?.meta_title,
        description: page?.data?.meta_description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/resources/${params.resource}/${stage}`,
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
    const{resource,stage}=await params
    const client=createClient();
    let page;
  
    try {
      page=await client.getByUID( resource.split("-").join("_"),`${stage}`);
      if(page?.data?.parenturl.toLowerCase() !== resource.toLowerCase()){
        return notFound();
      }
    } catch (error) {
      return notFound();
    }
  return (
    <main className='mx-6 md:mx-10'>
 
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  )
}

export default page
