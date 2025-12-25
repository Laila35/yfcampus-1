"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";
import {ChevronDownIcon,HomeIcon,BookOpenIcon,InformationCircleIcon,ClipboardListIcon,GlobeAltIcon,CurrencyDollarIcon,PencilAltIcon,PhoneIcon,} from '@heroicons/react/solid';
import { useCountry } from '@/app/context/CountryContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus,faSignInAlt,} from "@fortawesome/free-solid-svg-icons";
import {faInstagram,faFacebook,faLinkedin,faXTwitter,faPinterest,faYoutube ,faTiktok } from "@fortawesome/free-brands-svg-icons";


export default function Navbar() {

  const { country } = useCountry()
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpenSubjects, setDropdownOpenSubjects] = useState(false);
  const [dropdownOpenLanguages , setdropdownOpenLanguages ] = useState(false);


  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


    const timeoutRef = useRef(null);
  const handleMouseEnter = (setDropdown) => {
    clearTimeout(timeoutRef.current);
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(false);
    }, 200);
  };
  const handleMouseEnterSubjects = (setDropdown, otherDropdowns) => {
    clearTimeout(timeoutRef.current);
    otherDropdowns.forEach(closeDropdown => closeDropdown(false));
    setDropdown(true);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.55) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMathClick = () => {
    if (country) {
      switch (country) {
        case 'Canada':
          router.push('/ca/online-math-tuition');
          break;
        case 'United States':
          router.push('/us/online-math-tuition');
          break;
        case 'United Kingdom':
          router.push('/uk/online-maths-tuition');
          break;
        case 'Australia':
          router.push('/au/online-maths-tuition');
          break;
        case 'New Zealand':
          router.push('/nz/online-maths-tuition');
          break;
        case 'India':
          router.push('/in/online-maths-tuition');
          break;
        case 'United Arab Emirates':
          router.push('/ae/online-maths-tuition');
          break;
        default:
          router.push('/online-maths-tuition');
      }
    } else {
      router.push('/online-maths-tuition'); 
    }
  };
  const handleScienceClick = () => {
    if (country) {
      switch (country) {
        case 'Canada':
          router.push('/ca/online-science-tuition');
          break;
        case 'Australia':
          router.push('/au/online-science-tuition');
          break;
        case 'Hong Kong':
          router.push('/hk/online-science-tuition');
          break;
        case 'Singapore':
          router.push('/sg/online-science-tuition');
          break;
        case 'Malaysia':
          router.push('/my/online-science-tuition');
          break;
        case 'Philippines':
          router.push('/ph/online-science-tuition');
          break;
        case 'United States':
          router.push('/us/online-science-tuition');
          break;
        case 'United Kingdom':
          router.push('/uk/online-science-tuition');
          break;
        case 'New Zealand':
          router.push('/nz/online-science-tuition');
          break;
        case 'India':
          router.push('/in/online-science-tuition');
          break;
        case 'United Arab Emirates':
          router.push('/ae/online-science-tuition');
          break;
        case 'South Africa':
          router.push('/za/online-science-tuition');
          break;
        default:
          router.push('/online-science-tuition'); 
      }
    } else {
      router.push('/online-science-tuition'); 
    }
  };
  const handleEnglishClick = () => {
    if (country) {
      switch (country) {
        case 'Canada':
          router.push('/ca/online-english-tuition');
          break;
        case 'Australia':
          router.push('/au/online-english-tuition');
          break;
        case 'Hong Kong':
          router.push('/hk/online-english-tuition');
          break;
        case 'Singapore':
          router.push('/sg/online-english-tuition');
          break;
        case 'Malaysia': 
          router.push('/my/online-english-tuition');
          break;
        case 'Philippines': 
          router.push('/ph/online-english-tuition');
          break;
        case 'United States':
          router.push('/us/online-english-tuition');
          break;
        case 'United Kingdom':
          router.push('/uk/online-english-tuition');
          break;
        case 'New Zealand':
          router.push('/nz/online-english-tuition');
          break;
        case 'India':
          router.push('/in/online-english-tuition');
          break;
        case 'United Arab Emirates':
          router.push('/ae/online-english-tuition');
          break;
        case 'South Africa':
          router.push('/za/online-english-tuition');
          break;
        default:
          router.push('/online-english-tuition'); 
      }

    } else {
      router.push('/online-english-tuition');
    }
  };
  const handlePricingClick = () => {
    if (country) {
      switch (country) {
        case 'Canada':
          router.push('/ca/pricing');
          break;
        case 'Australia':
          router.push('/au/pricing');
          break;
        case 'Hong Kong':
          router.push('/hk/pricing');
          break;
        case 'Singapore':
          router.push('/sg/pricing');
          break;
        case 'Malaysia': 
          router.push('/my/pricing');
          break;
        case 'Philippines': 
          router.push('/ph/pricing');
          break;
        case 'United States':
          router.push('/us/pricing');
          break;
        case 'United Kingdom':
          router.push('/uk/pricing');
          break;
        case 'New Zealand':
          router.push('/nz/pricing');
          break;
        case 'India':
          router.push('/in/pricing');
          break;
        case 'United Arab Emirates':
          router.push('/ae/pricing');
          break;
        case 'South Africa':
          router.push('/za/pricing');
          break;
        default:
          router.push('/pricing'); 
      }

    } else {
      router.push('/pricing');
    }
  };


  
  return (



    <header className="p-2">
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center text-teal-700">
          <div className="flex flex-col  sm:flex-row items-center gap-3">
       
           <Link aria-label="logo" href="/">
           <img src="/Images/yfc-logo.png" alt="yfcampus" className="w-20 mr-2" />
           </Link>  

            
            {country === 'United States' || country === 'Canada' ? (
             
              <Link aria-label="whatsapp link" href="https://wa.me/19142791693" className="hover:bg-teal-600 transition-colors duration-200 flex items-center gap-2 p-2 rounded-full" target="_blank" rel="noopener noreferrer">
             
                <PhoneIcon className="h-4 w-4 text-teal-600" />
                <span className="text-teal-700">+19142791693</span>
              </Link>

            ) : country === 'Australia' || country === 'New Zealand' ? (
              <Link aria-label="whatsapp link" href="https://wa.me/61480050048" className="hover:bg-teal-600 transition-colors duration-200 flex items-center gap-2 p-2 rounded-full" target="_blank" rel="noopener noreferrer">
                <PhoneIcon className="h-4 w-4 text-teal-600" />
                <span className="text-teal-700">+61480050048</span>
              </Link>
            ) : (
              <Link aria-label="whatsapp link" href="https://wa.me/447532792318" className="hover:bg-teal-600 transition-colors duration-200 flex items-center gap-2 p-2 rounded-full" target="_blank" rel="noopener noreferrer">
             <div className="hover:bg-teal-100 flex items-center p-2 rounded-full">
             <PhoneIcon className="h-4 w-4 text-teal-600 mr-2" />
             <span className="text-teal-700">+447532792318</span>
             </div>
             </Link>)}</div>



          <div className="flex  justify-center sm:justify-end items-center gap-7 mt-4 sm:mt-0">
            
          <div className="hidden  lg:flex space-x-4 xl:space-x-6">
          <Link
          aria-label="get register"
    href="/get-register"
    className=" p-2 rounded-full flex items-center justify-center gap-2 hover:text-teal-800 transition-colors duration-200  md:w-auto  md:text-base"
  >
    <FontAwesomeIcon icon={faUserPlus} className="text-sm w-5 h-5" />
    Register Now
  </Link>

  <Link
  aria-label="student login"
    href="https://cp.ilmulquran.com/"
    className=" p-2 rounded-full flex items-center justify-center gap-2 hover:text-teal-800 transition-colors duration-200  md:w-auto  md:text-base"
  >
    <FontAwesomeIcon icon={faSignInAlt} className="w-5 h-5" />
    Student Login
  </Link>
</div>

{[
  { href: "https://x.com/yfcampus", icon: faXTwitter, hoverColor: "hover:text-blue-500", label: "Twitter" },
  { href: "https://www.facebook.com/yourfuturecampus", icon: faFacebook, hoverColor: "hover:text-blue-700", label: "Facebook" },
  { href: "https://www.pinterest.com/yourfuturecampus", icon: faPinterest, hoverColor: "hover:text-red-500", label: "Pinterest" },
  { href: "https://www.linkedin.com/company/yourfuturecampus", icon: faLinkedin, hoverColor: "hover:text-blue-600", label: "LinkedIn" },
  { href: "https://www.instagram.com/yourfuturecampus", icon: faInstagram, hoverColor: "hover:text-pink-500", label: "Instagram" },
  { href: "https://www.youtube.com/@yourfuturecampus", icon: faYoutube, hoverColor: "hover:text-red-600", label: "YouTube" },
  { href: "https://www.tiktok.com/@yourfuturecampus", icon: faTiktok, hoverColor: "hover:text-black", label: "TikTok" },
].map((social, index) => (
  <Link
  
    key={index}
    href={social.href}
    target="_blank"
    className="group"
    aria-label={`Visit our ${social.label} page`}
    title={`Visit our ${social.label} page`}
  >
    <FontAwesomeIcon
      size="lg"
      icon={social.icon}
      className={`text-teal-600 group-hover:text-teal-500 transition-colors duration-200 ${social.hoverColor}`}
    />
  </Link>
))}

            
            </div>
        </div>
      </div>




      <div className="w-11/12 flex max-w-6xl justify-center mx-auto py-3 px-5  text-white mt-6 sticky top-4 z-10 font-sans bg-gradient-to-r from-teal-500 to-teal-600">
        <nav className="hidden lg:flex space-x-4 xl:space-x-6">
        
        
        
        
          {/* Home */}
          <Link aria-label="home" href="/" className="hover:text-black  font-medium text-sm transition duration-200 flex items-center space-x-1.5">
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </Link>

          {/* Subjects Dropdown (without country-specific links) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setDropdownOpenSubjects)}
            onMouseLeave={() => handleMouseLeave(setDropdownOpenSubjects)}
          >
            <div className="flex items-center">
              <span className="hover:text-black font-medium text-sm flex items-center space-x-1.5 transition duration-200">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              <Link aria-label="subjects" href="/subjects">
                  Subjects
                 </Link>
                <ChevronDownIcon className="w-3 h-3 ml-1" />
              </span>
            </div>
            {dropdownOpenSubjects && (
           <div className="relative z-10">
           <div className="absolute z-10 bg-teal-400 text-white rounded-lg shadow-lg w-64 mt-2"> {/* Adjusted width */}
             <ul className="py-1 text-sm">
               <li>
                 <Link aria-label="maths tuition" href="/online-maths-tuition" className="block px-4 py-2 hover:bg-teal-600 transition duration-200">
                   Maths Tuition
                 </Link>
               </li>
               <li>
                 <Link aria-label="science tuition" href="/online-science-tuition" className="block px-4 py-2 hover:bg-teal-600 transition duration-200">
                   Science Tuition
                 </Link>
               </li>
               <li>
                 <Link aria-label="english tuition" href="/online-english-tuition" className="block px-4 py-2 hover:bg-teal-600 transition duration-200">
                   English Tuition
                 </Link>
               </li>
               <li>
                 <Link aria-label="online computer science tuition" href="/online-computer-science-tuition" className="block px-4 py-2 hover:bg-teal-600 transition duration-200">
                   Computer Science Tuition
                 </Link>
               </li>
             </ul>
           </div>
         </div>
         
            )}
          </div>

          {/* Language Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setdropdownOpenLanguages)}
            onMouseLeave={() => handleMouseLeave(setdropdownOpenLanguages)}
          >
            <div className="flex items-center">
              <span className="hover:text-black font-medium text-sm flex items-center space-x-1.5 transition duration-200">
              <GlobeAltIcon className="w-4 h-4 mr-2" />

     <Link aria-label="online english courses" href="/online-language-courses">
                Language Courses
     
     </Link>

                <ChevronDownIcon className="w-3 h-3 ml-1" />
              </span>
            </div>
            {dropdownOpenLanguages && (
             <div className="relative z-10">
             <div className="absolute z-10 bg-teal-400 text-white rounded-lg shadow-lg w-64 mt-2"> {/* Adjusted width */}
               <ul className="py-1 text-sm">
                 <li>
                   <Link aria-label="arabic language courses" href="/online-arabic-course" className="block px-4 py-2 hover:bg-teal-600 transition duration-200">
                     Arabic Language Course
                   </Link>
                 </li>
                 <li>
                   <Link aria-label="urdu language course" href="/online-urdu-course" className="block px-4 py-2 hover:bg-teal-600 transition duration-200">
                     Urdu Language Course
                   </Link>
                 </li>
                 <li>
                   <Link aria-label="online esl langugae" href="/online-esl-course" className="block px-4 py-2 hover:bg-teal-600 transition duration-200">
                     English as a Second Language (ESL)
                   </Link>
                 </li>
                 <li>
                   <Link aria-label="online persian course" href="/online-persian-course" className="block px-4 py-2 hover:bg-teal-600 transition duration-200">
                     Persian Language Course
                   </Link>
                 </li>
               </ul>
             </div>
           </div>
           
            )}
          </div>

          {/* Test Preparation */}
          <div className="flex items-center space-x-2 hover:text-black">
  <ClipboardListIcon className="w-4 h-4 transition duration-200" />
  <Link aria-label="online test preparations" href="/online-test-preparation" className="font-medium text-sm transition duration-200">
    Test Preparation
  </Link>
</div>



   


          <div className="flex items-center space-x-2 hover:text-black">
  <CurrencyDollarIcon className="w-4 h-4 transition duration-200" />
  <Link aria-label="pricing" href="/pricing" className="font-medium text-sm transition duration-200">
    Pricing
  </Link>
</div>


       



          <div className="flex items-center space-x-2  hover:text-black">
            <PhoneIcon className="w-4 h-4  transition duration-200" />
      <Link
      aria-label="contact us "
        href="/contact-us"
        className="font-medium text-sm transition duration-200"
      >
        Contact Us
      </Link>
    </div>

    
<div className="flex items-center space-x-2 hover:text-black">
  <InformationCircleIcon className="w-4 h-4 transition duration-200" />
  <Link aria-label="about us" href="/about-us" className="font-medium text-sm transition duration-200">
    About Us
  </Link>
</div>
        </nav>



        {/* Mobile Menu Toggle */}
        <button aria-label="Toggle" onClick={toggleMenu} className="lg:hidden pr-3">
          <svg className="w-6 h-7" fill="none" color="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div className="flex lg:hidden space-x-4 xl:space-x-6">
      <Link
      aria-label="Register now"
            href="/get-register"
            className="rounded-full flex items-center justify-center gap-1 hover:text-teal-800 transition-colors duration-200 md:w-auto md:text-base"
          >
            <FontAwesomeIcon icon={faUserPlus} className="text-sm w-3 h-3 " />
           <h2 className="text-[15px]">
             Register Now
            </h2>
          </Link>

          <Link
          aria-label="Student Login"
            href="https://cp.ilmulquran.com/"
            className="rounded-full flex items-center justify-center gap-1 hover:text-teal-800 transition-colors duration-200 md:w-auto md:text-base"
          >
            <FontAwesomeIcon icon={faSignInAlt} className="w-3 h-3" />
            <h2 className="text-[15px]">

            Student Login
            </h2>
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
