import SuccessStories from "@/components/SuccessStories";
import Image from "next/image";
import Script from "next/script"; 

export const metadata = {
    title: "About Us | Your Future Campus (YFC) - Empowering Online Learning Globally",
    description:
        "Your Future Campus (YFC) is a global online learning platform dedicated to empowering students through expert tutoring in Maths, Science, English, and more.",
    keywords: [
        "About Your Future Campus",
        "Online Tutoring Platform",
        "Global E-learning",
        "YFC Tutors",
        "Maths Online Classes",
        "Science Online Tutoring",
        "English Coaching",
        "Online Learning Mission",
        "Academic Excellence",
        "Virtual Education",
        "Online Teachers"
    ],
    alternates: {
        canonical: "https://yfcampus.com/about-us",
    },
    openGraph: {
        title: "About Us | Your Future Campus (YFC) - Empowering Online Learning Globally",
        description:
            "Explore the mission, values, and team behind YFC, your trusted global online tutoring partner.",
        url: "https://yfcampus.com/about-us",
        siteName: "Your Future Campus (YFC)",
        images: [
            {
                url: "https://yfcampus.com/Images/hero_image.webp",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "About Us | Your Future Campus (YFC) - Empowering Online Learning Globally",
        description:
            "Meet the YFC team and learn how we're redefining online education with expert tutoring.",
        images: ["https://yfcampus.com/Images/hero_image.webp"],
        site: "@YFC_Global",
    },
};

const AboutHero = () => { 
    return (
        <>
           <Script
                id="jsonld-about-yfc"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Your Future Campus",
                        alternateName: "YFC",
                        url: "https://yfcampus.com",
                        logo: "https://yfcampus.com/images/yfc-logo.png",
                        sameAs: [
                            "https://www.facebook.com/yourfuturecampus/",
                            "https://twitter.com/yfcampus/",
                            "https://www.linkedin.com/company/yfcampus/",
                            "https://www.instagram.com/yourfuturecampus/",
                        ],
                        description:
                            "Your Future Campus (YFC) is a global online tutoring platform providing expert education in subjects like Maths, Science, English, and more.",
                        foundingDate: "2014",
                        founder: {
                            "@type": "Person",
                            name: "Zulqarnain basheer",
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+447532792318",
                            contactType: "Customer Support",
                            availableLanguage: ["English"],
                        },
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Worldwide",
                            addressCountry: "Global",
                        },
                    }),
                }}
            />

            <div className="px-2  p-1 mx-auto w-[90%]">
                {/* Top Section */}
                <div className="flex  flex-col md:flex-row items-center justify-between mb-12 mt-5 p-6 ">
                    {/* Left Section with Text */}
                    <div className="md:w-1/2 mb-6 m-2  md:mb-0">
                        <h1 className="text-4xl font-bold text-teal-700 mb-4">
                            About Your Future Campus | <br /> Online Education
                            That Empowers
                        </h1>
                        <p className="text-lg text-gray-700 mb-4">
                            Welcome to Your Future Campus (YFC), an online
                            education platform committed to helping students
                            achieve academic success and personal growth. With a
                            focus on personalized tutoring, flexible learning
                            schedules, and experienced tutors, we provide
                            top-quality education to students around the world.
                            From Maths and Science to English, Computer Science,
                            and Language Courses, we cover a wide range of
                            subjects tailored to meet the needs of each
                            individual learner. Our mission is to ensure every
                            student has the tools they need to succeed—whether
                            it’s in school, standardized exams, or personal
                            development.
                        </p>
                    </div>

                    {/* Right Section with Hero Image */}
                    <div className="md:w-1/2 m-2 flex items-center justify-center p-0">
                        <Image
                            src="/Images/hero_image.webp" // Replace with your actual hero image path
                            alt="Your Future Campus"
                            width={500} // Adjust the width as needed
                            height={400} // Adjust the height as needed
                        />
                    </div>
                </div>

                {/* Our Story and Values Section */}
                <div className="flex flex-col md:flex-row items-start justify-between mb-12  p-6  ">
                    {/* Left Section with Image */}
                    <div className="md:w-1/2 mb-6 m-2 md:mb-0">
                        <Image
                            src="/Images/values_image.webp" // Replace with your actual image path for this section
                            alt="Our Values"
                            width={500} // Adjust the width as needed
                            height={100} // Decreased height for better proportions
                        />
                    </div>

                    {/* Right Section with Content */}
                    <div className="md:w-1/2 m-2">
                        <h2 className="text-4xl font-bold text-teal-700 mb-4">
                            Our Story and Values
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            At Your Future Campus, our journey began with a
                            vision to provide quality education to students
                            around the world. We believe in fostering a learning
                            environment that is inclusive, supportive, and
                            focused on personal growth.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Our core values include integrity, excellence, and
                            innovation. We strive to empower our students to
                            become critical thinkers and lifelong learners,
                            preparing them to face the challenges of the future
                            with confidence.
                        </p>
                    </div>
                </div>

                <section className="py-16 ">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-12">
                            Our Mission & Vision
                        </h2>
                        <div className="flex flex-col md:flex-row md:justify-between gap-8">
                            {/* Mission Card */}
                            <div className="flex flex-col border border-teal-600 p-8 rounded-lg shadow-lg bg-white w-full md:w-1/2">
                                <h3 className="text-3xl font-semibold text-teal-700 mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-gray-700">
                                    At YFC, our mission is simple: to make
                                    high-quality education accessible to
                                    everyone, everywhere. We believe that every
                                    student deserves the chance to unlock their
                                    full potential, and we are dedicated to
                                    providing personalized support that caters
                                    to their unique learning needs. By offering
                                    flexible, interactive online lessons, we
                                    make learning not just effective, but
                                    engaging and enjoyable.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div className="flex flex-col border border-teal-600 p-8 rounded-lg shadow-lg  bg-white w-full md:w-1/2">
                                <h3 className="text-3xl font-semibold text-teal-700 mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-gray-700">
                                    Our vision is to build a world where
                                    education knows no boundaries—where students
                                    can access expert instruction regardless of
                                    their location or background. With Your
                                    Future Campus, we aim to bridge the gap
                                    between students and academic success, using
                                    cutting-edge technology and innovative
                                    teaching methods to foster learning and
                                    growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-12">
                            What Makes YFC Different?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Personalized Tutoring",
                                    description:
                                        "We believe that no two students are alike. That’s why our tutors develop customized learning plans tailored to the strengths and weaknesses of each student.",
                                },
                                {
                                    title: "Global Reach, Local Impact",
                                    description:
                                        "YFC serves students from diverse backgrounds around the world, offering region-specific content for exams like GCSE, A-Level, SAT, ACT, and more. We provide tutoring based on the curriculums of countries like the UK, USA, Canada, Australia, New Zealand, and others.",
                                },
                                {
                                    title: "Expert Tutors",
                                    description:
                                        "All of our tutors are experts in their subjects, with many years of teaching experience. Whether it’s Maths, Science, or language learning, our team of qualified educators is passionate about helping students succeed.",
                                },
                                {
                                    title: "Flexible, Online Learning",
                                    description:
                                        "With YFC, learning is no longer confined to a classroom. Our online tutoring platform allows students to learn from anywhere at any time, offering flexibility and convenience that fits into their busy schedules.",
                                },
                                {
                                    title: "Comprehensive Support",
                                    description:
                                        "From academic tutoring to test preparation for major exams like SAT, ACT, GCSE, and A-Level, we provide comprehensive learning solutions that help students gain confidence and achieve higher results.",
                                },
                                {
                                    title: "Academic Assistance",
                                    description:
                                        "At YFC, we provide a full spectrum of support, from personalized tutoring to in-depth test preparation for exams like SAT, ACT, GCSE, and A-Level. Our focus is on building strong academic foundations and equipping students with the skills they need to excel in school and beyond.",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col border border-teal-600 p-6 rounded-lg shadow-lg  bg-white"
                                >
                                    <h3 className="text-2xl font-semibold text-teal-700 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our tutors */}
                <section className="py-16 ">
                    <div className="w-full p-2 mx-auto px-">
                        <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-10">
                            Our Tutors
                        </h2>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col border border-teal-600 p-8 rounded-lg shadow-lg   text-center">
                                <h3 className="text-2xl font-semibold text-teal-700 mb-4">
                                    Qualified and Experienced Tutors
                                </h3>
                                <p className="text-gray-700">
                                    At YFC, we pride ourselves on having a team
                                    of qualified tutors who bring a wealth of
                                    knowledge and experience to the classroom.
                                    Each tutor is carefully selected based on
                                    their expertise and their ability to connect
                                    with students. Our tutors specialize in a
                                    wide range of subjects, including Maths,
                                    Science, English, and Computer Science, and
                                    they are trained to teach students in a way
                                    that builds both understanding and
                                    confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our values */}
                <section className="py-16 ">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-12">
                            Our Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Excellence in Education",
                                    description:
                                        "We strive to deliver the highest standard of education to our students, ensuring that they receive the support they need to excel in their academic pursuits.",
                                },
                                {
                                    title: "Student-Centered Approach",
                                    description:
                                        "We place our students at the heart of everything we do. Our tutors work closely with students to understand their goals and learning styles, delivering personalized education that meets their needs.",
                                },
                                {
                                    title: "Innovation and Technology",
                                    description:
                                        "We are committed to using the latest educational technology to enhance learning. Our platform offers interactive tools, live tutoring sessions, and real-time feedback to make learning more engaging and effective.",
                                },
                                {
                                    title: "Global Accessibility",
                                    description:
                                        "Education should be available to everyone, no matter where they are. YFC uses online platforms to bring expert tutoring into the homes of students across the globe, breaking down the barriers to quality education.",
                                },
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col border border-teal-600 p-6 rounded-lg shadow-lg "
                                >
                                    <h3 className="text-2xl font-semibold text-teal-700 mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* our journey */}
                <section className="py-16mx-auto">
                    <div className="w-full mx-auto">
                        <h2 className="text-4xl font-extrabold text-teal-700 text-center mb-10">
                            Our Journey
                        </h2>
                        <div className="flex justify-center  items-center ">
                            <div className="flex flex-col  border border-teal-600 p-8 rounded-lg  bg-white  text-center">
                                <h3 className="text-3xl font-semibold text-teal-700 mb-4">
                                    A Mission to Empower Learning
                                </h3>
                                <p className="text-gray-700">
                                    YFC was founded with the goal of making
                                    education more accessible to students
                                    worldwide. Over the years, we’ve grown into
                                    a trusted platform that provides expert
                                    tutoring in a range of subjects. Our journey
                                    has been defined by our passion for
                                    education and our commitment to helping
                                    students succeed. We continue to evolve,
                                    using cutting-edge technology and innovative
                                    teaching methods to deliver a world-class
                                    learning experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success stories */}
                <SuccessStories />

                {/* Meet the Team Section */}
                <div className="mb-12 p-6    rounded-2xl ">
                    <h2 className="text-4xl font-bold text-teal-700 mb-6 text-center">
                        Meet the Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                        {/* Team Member 1 */}
                        <div className="bg-white p-4 rounded-lg  text-center">
                            <Image
                                src="/Images/ceo.webp" // Replace with your actual image path
                                alt="Team Member 1"
                                width={200} // Adjust width
                                height={200} // Adjust height
                                className="rounded-full mb-4 mx-auto"
                            />
                            <h3 className="text-xl font-semibold text-teal-700">
                                Zulqarnain Bashir
                            </h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>
                    </div>
                </div>
                {/* Accreditation and Partnerships Section */}
                <div className="mb-12 p-6 bg-white ">
                    <h2 className="text-4xl font-bold text-teal-700 mb-6 text-center">
                        Accreditation and Partnerships
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        We are proud to be accredited by various educational
                        organizations and partnered with leading institutions to
                        provide our students with the best educational
                        experience.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {/* Accreditation Logos */}
                        <div className="container mx-auto w-full py-10">
                            {/*Need to add all the logos from the rewuired serviced  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutHero;
