export const dynamic = "force-dynamic";

import CommonCta from "@/components/shared/CommonCta";
import TestimonialCarousel from "@/components/shared/Testimonials";
import AdditionalSupport from "@/components/uk/AdditionalSupport";
import HeroSection from "@/components/uk/HeroSection";
import LearningPathwaySection from "@/components/uk/LearningPathwaySection";
import LessonStepsSection from "@/components/uk/LessonStepsSection";
import PricePlan from "@/components/uk/PricePlan";
import StudentSuccessHighlights from "@/components/uk/StudentSuccessHighlights";
import SubjectsSection from "@/components/uk/SubjectsSection";
import ToolsTeachingMethodsSection from "@/components/uk/ToolsTeachingMethodsSection";
import WhyChooseSection from "@/components/uk/WhyChoose";

const keywords = [
  "online tuition uk",
  "one-to-one tutors uk",
  "online classes for primary secondary students uk",
  "maths english science tuition uk",
  "book online tutor uk",
];
// ✅ SEO Metadata
export const metadata = {
  title:
    "Your Future Campus UK | One-to-One Online Tuition for Primary to A-Level Students",
  description:
    "Trusted one-to-one online tuition for Primary to A-Level students. Learn Maths, English, Science & more with UK-qualified tutors.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/uk`,
  },
  keywords,
  openGraph: {
    title:
      "Your Future Campus UK | One-to-One Online Tuition for Primary to A-Level Students",
    description:
      "Trusted one-to-one online tuition for Primary to A-Level students. Learn Maths, English, Science & more with UK-qualified tutors.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/uk`,
    siteName: "Your Future Campus UK",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Your Future Campus UK | One-to-One Online Tuition for Primary to A-Level Students",
    description:
      "Trusted one-to-one online tuition for Primary to A-Level students.",
  },
};

export default async function UKPage() {
  const title = "Personalised Online Learning with Qualified UK Tutors";

  const description =
    "Build your child’s confidence and academic success through one-to-one lessons in Maths, English, Science, Computer Science, and Languages. Each session is tailored to the student’s level, taught live by experienced UK teachers.";

  return (
    <main>
      {/* ✅ Hero Section (NO button, NO WhatsApp number) */}
      <HeroSection title={title} description={description} />

      <WhyChooseSection />
      <SubjectsSection />
      <LearningPathwaySection />
      <LessonStepsSection />
      <ToolsTeachingMethodsSection />
      <StudentSuccessHighlights />
      <TestimonialCarousel />
      <PricePlan />
      <AdditionalSupport />

      {/* ✅ Bottom CTA kept (optional) */}
      <CommonCta
        heading="Start Your Child’s Learning Journey Today"
        subtitle="Join hundreds of families who trust Your Future Campus UK for quality one-to-one online education."
        email="admin@yfcampus.com"
      />
    </main>
  );
}
