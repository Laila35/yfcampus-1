"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";
import { useCountry } from '@/app/context/CountryContext';

export default function StickyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenLanguages , setdropdownOpenLanguages ] = useState(false);
    const [dropdownOpenHelp, setDropdownOpenHelp] = useState(false);
    const [dropdownOpenSubjects, setDropdownOpenSubjects] = useState(false);
    const { country } = useCountry()
    const router = useRouter();
  
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
            setIsSticky(window.scrollY > window.innerHeight * 0.55);
            setIsMenuOpen(!window.scrollY > window.innerHeight * 0.55);};

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);};

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
    return (
        <>
         <div
  className={`${
    isSticky
      ? "fixed inset-x-0 top-1 mx-auto z-50 w-full max-w-[95%] sm:max-w-[95%] sm:h-12 bg-white border shadow-sm transition-opacity duration-300 opacity-100  px-4 sm:px-6 flex sm:justify-center items-center"
      : "fixed inset-x-0 top-0 mx-auto z-50 w-full max-w-[95%] sm:max-w-[90%] transition-opacity duration-300 opacity-100 -translate-y-full bg-opacity-50 backdrop-blur-lg rounded-lg px-4 sm:px-6 flex justify-center items-center"
  }`}
>
    <nav className="lg:flex lg:space-x-6 xl:space-x-12 p-4 hidden">
        {/* Desktop Menu */}
        <Link aria-label="yfcampus home" href="/" className="hover:text-black text-black font-medium">
            Home
        </Link>
        {/* Subjects Dropdown */}
          {/* Subjects Dropdown (without country-specific links) */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setDropdownOpenSubjects)}
            onMouseLeave={() => handleMouseLeave(setDropdownOpenSubjects)}
          >            <span className="hover:text-black text-black font-medium flex items-center space-x-1.5 transition duration-200 cursor-pointer">
            <Link aria-label="subjects" href="/subjects" className="hover:text-black text-black font-medium">
            Subjects
        </Link>
                <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </span>
            {dropdownOpenSubjects && (
                <div className="absolute z-10 bg-white text-black rounded-lg shadow-lg w-52 mt-2 transition-opacity duration-300 opacity-100">
                    <ul className="py-1 text-sm">
                        <li><Link aria-label="online maths courses" href="/online-maths-tuition" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition duration-200">Maths Tuition</Link></li>
                        <li><Link  aria-label="online science courses" href="/online-science-tuition" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition duration-200">Science Tuition</Link></li>
                        <li><Link aria-label="online english courses" href="/online-english-tuition" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition duration-200">English Tuition</Link></li>
                        <li><Link aria-label="online computer courses" href="/online-computer-science-tuition" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition duration-200">Computer Science Tuition</Link></li>
                    </ul>
                </div>
            )}
        </div>
        {/* Language Courses Dropdown */}
        <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setdropdownOpenLanguages)}
            onMouseLeave={() => handleMouseLeave(setdropdownOpenLanguages)}
          >            <span className="hover:text-black text-black font-medium flex items-center space-x-1.5 transition duration-200 cursor-pointer">
            <Link aria-label="Online Languages courses" href="/online-language-courses" className="hover:text-black text-black font-medium">
            Language Courses
        </Link>                <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </span>
            {dropdownOpenLanguages && (
                <div className="absolute z-10 bg-white text-black rounded-lg shadow-lg w-52 mt-2 transition-opacity duration-300 opacity-100">
                    <ul className="py-1 text-sm">
                        <li><Link aria-label="online arabic courses" href="/online-arabic-course" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition duration-200">Arabic Language Course</Link></li>
                        <li><Link aria-label="online urdu courses" href="/online-urdu-course" className="block px-4 py-2 hover:bg-gray-700  hover:text-white transition duration-200">Urdu Language Course</Link></li>
                        <li><Link aria-label="online english courses" href="/online-esl-course" className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition duration-200">English as a Second Language (ESL)</Link></li>
                        <li><Link aria-label="online persian courses" href="/online-persian-course" className="block px-4 py-2 hover:bg-gray-700 hover:text-white  transition duration-200">Persian Language Course</Link></li>
                    </ul>
                </div>
            )}
        </div>
        <Link aria-label="test Preparation" href="/online-test-preparation" className="hover:text-black text-black font-medium">
            Test Preparation
        </Link>
        <Link aria-label="Pricing" href="/pricing" className="hover:text-black text-black font-medium">
            Pricing
        </Link>
        <Link aria-label="Contact us" href="/contact-us" className="hover:text-black text-black font-medium">
            Contact Us
        </Link>
        <Link aria-label="About us" href="/uk/about" className="hover:text-black text-black font-medium">
            About Us
        </Link>
    </nav>
    {/* Mobile Menu Toggle Button */}
    <div className="lg:hidden flex items-center justify-between p-4">
        <button
        aria-label="Menu Toggle"
            className="text-black focus:outline-none"

            
            onClick={toggleMenu}
        >
            <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        </button>
    </div>
</div>
{/* Mobile Menu */}
<div
    className={`lg:hidden fixed top-[6.5vh] inset-x-0 text-black z-40 shadow-lg transition-transform duration-300 ${isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
>
<MobileMenu
        isMenuOpen={isMenuOpen}
        dropdownOpen={dropdownOpen}
        dropdownOpenHelp={dropdownOpenHelp}
        dropdownOpenSubjects={dropdownOpenSubjects}
        dropdownOpenLanguage={dropdownOpenLanguages}
        setIsMenuOpen={setIsMenuOpen}
        setDropdownOpen={setDropdownOpen}
        setDropdownOpenHelp={setDropdownOpenHelp}
        setDropdownOpenSubjects={setDropdownOpenSubjects}
        setDropdownOpenLanguage={setdropdownOpenLanguages}
    />
</div>
</>
);}


