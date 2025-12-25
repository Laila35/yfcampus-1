 
import CommonCta from '@/components/shared/CommonCta';
import FaqsSection from '@/components/shared/FAQS';
import ResultsAchievements from '@/components/uk/reviews/ResultsAchievements';
import ReviewHeroSection from '@/components/uk/reviews/ReviewsHeroSection'
import ReviewsSection from '@/components/uk/reviews/ReviewsSection';
import WhyFamiliesChoose from '@/components/uk/reviews/WhyFamiliesChoose';
import Script from 'next/script';
import React from 'react'
  const keywords = [
  "Your Future Campus reviews",
  "best online tutors UK",
  "student success stories UK",
  "gcse and a level tutoring results",
  "parent feedback on online tuition"
];
export const metadata={


  title:"Student Reviews & Success Stories – Your Future Campus UK",
  description:"Read real reviews from UK parents and students who improved grades with Your Future Campus. Trusted by 1,000+ families worldwide.",
  keywords:keywords.map((k) => k),
  alternates:{canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/uk/reviews`},
  robtos:{index:true,follow:true},
  publisher:"Your Future Campus UK",
  openGraph: {
    title:"Student Reviews & Success Stories – Your Future Campus UK",
     description:"Read real reviews from UK parents and students who improved grades with Your Future Campus. Trusted by 1,000+ families worldwide.",
url:`${process.env.NEXT_PUBLIC_BASE_URL}/uk/reviews`,

images: [
  {
    url: '/Images/HeroSection/reviews.avif',
    width: 800,
    height: 600,
    alt: 'Student Reviews & Success Stories – Your Future Campus UK',
  },
  
],
siteName: 'Your Future Campus UK',
locale: 'en_GB',
type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title:"Student Reviews & Success Stories – Your Future Campus UK",
  description:"Read real reviews from UK parents and students who improved grades with Your Future Campus. Trusted by 1,000+ families worldwide.",
  images: [
    {
      url: '/Images/HeroSection/reviews.avif',
      width: 800,
      height: 600,
      alt: 'Student Reviews & Success Stories – Your Future Campus UK',
    },
]
  }
}
const page = () => {
  const faqs = [
  {
    question: "Are the reviews genuine?",
    answer: "Yes — all reviews come directly from verified parents and students who have attended our online lessons."
  },
  {
    question: "Can I speak with a parent reference before joining?",
    answer: "Yes, we can connect you with a parent reference upon request for specific subjects or grade levels."
  },
  {
    question: "How do students share feedback?",
    answer: "After every month, students and parents are invited to rate tutors and lessons."
  },
  {
    question: "Do you showcase student progress publicly?",
    answer: "Only with parent consent. Most success stories are anonymised for privacy."
  },
  {
    question: "Where can I watch video testimonials?",
    answer: "Videos are available on our YouTube Channel and Instagram Page (@yfcampus)."
  },
];

  const title="Student Reviews & Success Stories – Your Future Campus UK";
  const subtitle="Discover why parents and students across the UK trust Your Future Campus for one-to-one online learning.";
  const description="At Your Future Campus, our students’ success speaks louder than any words.We’re proud to help learners across the UK and worldwide achieve better grades, stronger confidence, and a genuine love for learning.From primary students mastering their basics to A-Level and GCSE achievers reaching top grades, every success story is a reflection of our personalised approach and expert tutoring.Here’s what real parents and students have to say about their learning experience with us.";
  const imageUri="/Images/HeroSection/reviews.avif";
  const heading=" Ready to join our success stories?";
  const number="+44 7532 792318";
  const email="admin@yfcampus.com";
  const cta={
    text:"Book a Free Trial Lesson",
    url:"/uk/book-lesson"
  }
  const reviews = [
  {
    author: "Mrs. Eleanor H., Manchester (Year 6 Parent)",
    reviewBody: "My daughter was always nervous about maths, but within two months of lessons with Your Future Campus, she moved from average to top of her group. Her confidence has skyrocketed.",
    rating: 5
  },
  {
    author: "Olivia T., Birmingham (GCSE Student)",
    reviewBody: "The tutors helped me not only understand maths but also enjoy it! The exam preparation and mock sessions were a huge help — I got a Grade 9 in GCSE Maths.",
    rating: 5
  },
  {
    author: "Mr. James K., London (Year 8 Parent)",
    reviewBody: "They assigned a tutor who was perfect for my son’s personality. The assessment before trial made all the difference.",
    rating: 5
  },
  {
    author: "Hamza M., Leeds (A-Level Student)",
    reviewBody: "I was completely lost with mechanics and calculus, but my tutor explained everything patiently and in simple steps. I’m now predicted an A!",
    rating: 5
  },
  {
    author: "Mrs. Farah I., Bradford (GCSE Parent)",
    reviewBody: "The best part is how flexible the timings are. Lessons fit perfectly around school, and the tutors are always professional and supportive.",
    rating: 5
  },
  {
    author: "Mrs. Sarah A., Toronto (Parent of Year 4 & Year 9 Students)",
    reviewBody: "Even though we live in Canada, my children follow the UK curriculum online through YFC. It’s just like having a school at home!",
    rating: 5
  },
];
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Your Future Campus Online Tutoring",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": reviews.length
  },
  "review": reviews.map((r) => ({
    "@type": "Review",
    "author": r.author,
    "reviewBody": r.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  }))
};
const faqsSchema={
  "@context": "http://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}
const breadcrumbSchema={
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${process.env.NEXT_PUBLIC_BASE_URL}`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Reviews",
      "item": `${process.env.NEXT_PUBLIC_BASE_URL}/uk/reviews`
    }
  ]
}
  return (
    <main className='mx-6 md:mx-10'>
      <ReviewHeroSection title={title} subtitle={subtitle} description={description} imageUri={imageUri}/>
      <ReviewsSection/>
      <ResultsAchievements/>
      <WhyFamiliesChoose/>
      <CommonCta heading={heading} subtitle={"Book your free trial lesson today and see the results for yourself."} number={number} email={email} cta={cta}/>
      <FaqsSection faqs={faqs}/>
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema) }} />
       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
       <Script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
    </main>
  )
}

export default page
