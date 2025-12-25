import CommonCta from '@/components/shared/CommonCta';
import BlogBenefits from '@/components/uk/blog/BlogBenefits';
import BlogHeroSection from '@/components/uk/blog/BlogHeroSection'
import BrowseByCategory from '@/components/uk/blog/BrowseByCategory';
import FeaturedArticles from '@/components/uk/blog/FeaturedArticles';
import Script from 'next/script';
import React from 'react'
const keywords = [
  "study tips for uk students",
  "gcse revision advice blog",
  "how to improve online learning at home",
  "maths and english study guide uk",
  "parent tips for online education uk"
];

export const metadata={
    title:"Blog & Learning Hub | Study Tips, Parent Guides & UK Curriculum Insights | Your Future Campus",
    description:"Explore study tips, exam strategies, and parent advice for UK students. Expert articles on Maths, English, Science & more from Your Future Campus tutors.",
    alternates:{canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/blog`},
    keywords:keywords.map((k) => k),
    openGraph: {
      title:"Blog & Learning Hub | Study Tips, Parent Guides & UK Curriculum Insights | Your Future Campus",
      description:"Explore study tips, exam strategies, and parent advice for UK students. Expert articles on Maths, English, Science & more from Your Future Campus tutors.",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/uk/blog`,
      images: [
        {
          url: '/Images/HeroSection/blog.avif',
          width: 800,
          height: 600,
          alt: 'Blog & Learning Hub | Study Tips, Parent Guides & UK Curriculum Insights | Your Future Campus',
        },
      ],
      siteName: 'Your Future Campus UK',
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title:"Blog & Learning Hub | Study Tips, Parent Guides & UK Curriculum Insights | Your Future Campus",
      description:"Explore study tips, exam strategies, and parent advice for UK students. Expert articles on Maths, English, Science & more from Your Future Campus tutors.",
      images: [
        {
          url: '/Images/HeroSection/blog.avif',
          width: 800,
          height: 600,
          alt: 'Blog & Learning Hub | Study Tips, Parent Guides & UK Curriculum Insights | Your Future Campus',
        },
      ]
    }
}
const page = () => {
    const title="Learning Hub & Blog – Tips, Insights & Success Strategies";
    const subline="Explore expert learning advice, study tips, and parental guides to help students succeed in UK curriculum subjects and exams.";
    const intro="Welcome to the Your Future Campus UK Learning Hub — your go-to source for educational insights, learning tips, and practical advice from professional tutors.Here, we share expert articles and parent-friendly resources that cover everything from exam preparation and subject techniques to study motivation and time management.Whether your child is preparing for GCSE Maths, improving English grammar, or learning coding basics, our blog provides actionable advice and real-world learning strategies to make studying enjoyable and effective.";
const cta={
    text:"Book Your Free Trial Lesson ",
    url:"/uk/book-lesson"
}
const articles = [
  {
    title: "Top 10 GCSE Maths Revision Mistakes – And How to Avoid Them",
    url: "/uk/blog/top-10-gcse-maths-revision-mistakes",
    description:
      "Discover the most common pitfalls students make during revision and how to overcome them using smart practice routines.",
    datePublished: "2025-11-11",
    author: "Your Future Campus UK",
  },
  {
    title: "5 Ways to Improve English Writing for GCSE Exams",
    url: "/uk/blog/5-ways-to-improve-english-writing",
    description:
      "Tutor-recommended writing structures and vocabulary techniques to boost grades and clarity.",
    datePublished: "2025-11-11",
    author: "Your Future Campus UK",
  },
  {
    title: "Understanding Newton’s Laws – GCSE Physics Simplified",
    url: "/uk/blog/understanding-newtons-laws",
    description:
      "A student-friendly breakdown of motion, forces, and mechanics with simple real-life examples.",
    datePublished: "2025-11-11",
    author: "Your Future Campus UK",
  },
  {
    title: "Why Learning to Code Early Builds Logical Thinking",
    url: "/uk/blog/why-learning-to-code-early",
    description:
      "Learn how computer programming helps students improve maths and problem-solving skills from KS2 onwards.",
    datePublished: "2025-11-11",
    author: "Your Future Campus UK",
  },
  {
    title: "The Parent’s Guide to Supporting Online Learning at Home",
    url: "/uk/blog/parents-guide-to-online-learning",
    description:
      "Simple steps to create a positive study environment and monitor progress effectively.",
    datePublished: "2025-11-11",
    author: "Your Future Campus UK",
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Your Future Campus UK Learning Hub",
  "url": `${process.env.NEXT_PUBLIC_BASE_URL}/uk/blog`,
  "description":
    "Explore study tips, exam strategies, and parent advice for UK students. Expert articles on Maths, English, Science & more from Your Future Campus tutors.",
  "blogPost": articles.map((article) => ({
    "@type": "BlogPosting",
    "headline": article.title,
    "image": `${process.env.NEXT_PUBLIC_BASE_URL}/Images/HeroSection/blog.avif`,
    "url": `${process.env.NEXT_PUBLIC_BASE_URL}${article.url}`,
    "datePublished": article.datePublished,
    "author": {
      "@type": "Organization",
      "name": article.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Future Campus UK",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_BASE_URL}/Images/logo.png`,
      },
    },
    "description": article.description,
  })),
};
const breadcrumbSchema={
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/blog`,
      },
    ],
}
  return (
    <main className='mx-4 md:mx-16 mt-4'>
      <BlogHeroSection title={title} subline={subline} intro={intro}  />
      <BrowseByCategory />
      <FeaturedArticles />
      <BlogBenefits />
      <CommonCta  heading={" Learn smarter — start applying what you read today!"} subtitle={" Join hundreds of UK families already learning with Your Future Campus."} number={" +44 7532 792318"} email={"admin@yfcampus.com"} cta={cta} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} bef />
    </main>
  )
}

export default page
