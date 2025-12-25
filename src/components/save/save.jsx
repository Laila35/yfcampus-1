  "use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown, ChevronRight, Phone, Facebook, Twitter, Linkedin, Instagram, UserPlus, LogIn, Youtube } from "lucide-react";

// Social Media Links Array
const socialLinks = [
  { icon: Twitter, href: "https://x.com/yfcampus", label: "Twitter", hoverColor: "hover:bg-blue-500" },
  { icon: Facebook, href: "https://www.facebook.com/yourfuturecampus", label: "Facebook", hoverColor: "hover:bg-blue-700" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/yourfuturecampus", label: "LinkedIn", hoverColor: "hover:bg-blue-600" },
  { icon: Instagram, href: "https://www.instagram.com/yourfuturecampus", label: "Instagram", hoverColor: "hover:bg-pink-500" },
  { icon: Youtube, href: "https://www.youtube.com/@yourfuturecampus", label: "YouTube", hoverColor: "hover:bg-red-600" },
];

// Navigation data structure
const navItems = [
  {
    label: "Subjects",
    href: "/uk/subjects",
    children: [
      {
        label: "Maths",
        href: "/uk/subjects/maths",
        children: [
          {
            label: "KS1",
            href: "/uk/subjects/maths/ks1",
            children: [
              { label: "Year 1", href: "/uk/subjects/maths/ks1/year1" },
              { label: "Year 2", href: "/uk/subjects/maths/ks1/year2" },
            ],
          },
          {
            label: "KS2",
            href: "/uk/subjects/maths/ks2",
            children: [
              { label: "Year 3", href: "/uk/subjects/maths/ks2/year3" },
              { label: "Year 4", href: "/uk/subjects/maths/ks2/year4" },
              { label: "Year 5", href: "/uk/subjects/maths/ks2/year5" },
              { label: "Year 6", href: "/uk/subjects/maths/ks2/year6" },
            ],
          },
          {
            label: "KS3",
            href: "/uk/subjects/maths/ks3",
            children: [
              { label: "Year 7", href: "/uk/subjects/maths/ks3/year7" },
              { label: "Year 8", href: "/uk/subjects/maths/ks3/year8" },
              { label: "Year 9", href: "/uk/subjects/maths/ks3/year9" },
            ],
          },
          {
            label: "GCSE",
            href: "/uk/subjects/maths/gcse",
            children: [
              { label: "Year 10", href: "/uk/subjects/maths/gcse/year10" },
              { label: "Year 11", href: "/uk/subjects/maths/gcse/year11" },
            ],
          },
          {
            label: "A-Level",
            href: "/uk/subjects/maths/a-level",
            children: [
              { label: "Year 12", href: "/uk/subjects/maths/a-level/year12" },
              { label: "Year 13", href: "/uk/subjects/maths/a-level/year13" },
            ],
          },
        ],
      },
      {
        label: "Science",
        href: "/uk/subjects/science",
        children: [
          // {
          //   label: "KS1",
          //   href: "/uk/subjects/science/ks1",
          //   children: [
          //     { label: "Year 1", href: "/uk/subjects/science/ks1/year1" },
          //     { label: "Year 2", href: "/uk/subjects/science/ks1/year2" },
          //   ],
          // },
          // {
          //   label: "KS2",
          //   href: "/uk/subjects/science/ks2",
          //   children: [
          //     { label: "Year 3", href: "/uk/subjects/science/ks2/year3" },
          //     { label: "Year 4", href: "/uk/subjects/science/ks2/year4" },
          //     { label: "Year 5", href: "/uk/subjects/science/ks2/year5" },
          //     { label: "Year 6", href: "/uk/subjects/science/ks2/year6" },
          //   ],
          // },
          {
            label: "KS3",
            href: "/uk/subjects/science/ks3",
            children: [
              { label: "Biology", href: "/uk/subjects/science/biology" },
              { label: "Chemistry", href: "/uk/subjects/science/chemistry" },
              { label: "Physics", href: "/uk/subjects/science/physics" },
            ],
          },
          // {
          //   label: "GCSE",
          //   href: "/uk/subjects/science/gcse",
          //   children: [
          //     { label: "Combined Science", href: "/uk/subjects/science/gcse/combined" },
          //     { label: "Biology", href: "/uk/subjects/science/gcse/biology" },
          //     { label: "Chemistry", href: "/uk/subjects/science/gcse/chemistry" },
          //     { label: "Physics", href: "/uk/subjects/science/gcse/physics" },
          //   ],
          // },
          // {
          //   label: "A-Level",
          //   href: "/uk/subjects/science/a-level",
          //   children: [
          //     { label: "Biology", href: "/uk/subjects/science/a-level/biology" },
          //     { label: "Chemistry", href: "/uk/subjects/science/a-level/chemistry" },
          //     { label: "Physics", href: "/uk/subjects/science/a-level/physics" },
          //   ],
          // },
        ],
      },
      {
        label: "English",
        href: "/uk/subjects/english",
        // children: [
        //   {
        //     label: "KS1",
        //     href: "/uk/subjects/english/ks1",
        //     children: [
        //       { label: "Year 1", href: "/uk/subjects/english/ks1/year1" },
        //       { label: "Year 2", href: "/uk/subjects/english/ks1/year2" },
        //     ],
        //   },
        //   {
        //     label: "KS2",
        //     href: "/uk/subjects/english/ks2",
        //     children: [
        //       { label: "Year 3", href: "/uk/subjects/english/ks2/year3" },
        //       { label: "Year 4", href: "/uk/subjects/english/ks2/year4" },
        //       { label: "Year 5", href: "/uk/subjects/english/ks2/year5" },
        //       { label: "Year 6", href: "/uk/subjects/english/ks2/year6" },
        //     ],
        //   },
        //   {
        //     label: "KS3",
        //     href: "/uk/subjects/english/ks3",
        //     children: [
        //       { label: "Year 7", href: "/uk/subjects/english/ks3/year7" },
        //       { label: "Year 8", href: "/uk/subjects/english/ks3/year8" },
        //       { label: "Year 9", href: "/uk/subjects/english/ks3/year9" },
        //     ],
        //   },
        //   {
        //     label: "GCSE",
        //     href: "/uk/subjects/english/gcse",
        //     children: [
        //       { label: "English Language", href: "/uk/subjects/english/gcse/language" },
        //       { label: "English Literature", href: "/uk/subjects/english/gcse/literature" },
        //     ],
        //   },
        //   {
        //     label: "A-Level",
        //     href: "/uk/subjects/english/a-level",
        //     children: [
        //       { label: "English Language", href: "/uk/subjects/english/a-level/language" },
        //       { label: "English Literature", href: "/uk/subjects/english/a-level/literature" },
        //     ],
        //   },
        // ],
      },
      {
        label: "Computer Science",
        href: "/uk/subjects/computer-science",
        // children: [
        //   {
        //     label: "KS2",
        //     href: "/uk/subjects/computer-science/ks2",
        //     children: [
        //       { label: "Year 3", href: "/uk/subjects/computer-science/ks2/year3" },
        //       { label: "Year 4", href: "/uk/subjects/computer-science/ks2/year4" },
        //       { label: "Year 5", href: "/uk/subjects/computer-science/ks2/year5" },
        //       { label: "Year 6", href: "/uk/subjects/computer-science/ks2/year6" },
        //     ],
        //   },
        //   {
        //     label: "KS3",
        //     href: "/uk/subjects/computer-science/ks3",
        //     children: [
        //       { label: "Year 7", href: "/uk/subjects/computer-science/ks3/year7" },
        //       { label: "Year 8", href: "/uk/subjects/computer-science/ks3/year8" },
        //       { label: "Year 9", href: "/uk/subjects/computer-science/ks3/year9" },
        //     ],
        //   },
        //   {
        //     label: "GCSE",
        //     href: "/uk/subjects/computer-science/gcse",
        //     children: [
        //       { label: "Programming", href: "/uk/subjects/computer-science/gcse/programming" },
        //       { label: "Algorithms", href: "/uk/subjects/computer-science/gcse/algorithms" },
        //       { label: "Systems", href: "/uk/subjects/computer-science/gcse/systems" },
        //     ],
        //   },
        //   {
        //     label: "A-Level",
        //     href: "/uk/subjects/computer-science/a-level",
        //     children: [
        //       { label: "Databases", href: "/uk/subjects/computer-science/a-level/databases" },
        //       { label: "OOP", href: "/uk/subjects/computer-science/a-level/oop" },
        //       { label: "Architecture", href: "/uk/subjects/computer-science/a-level/architecture" },
        //     ],
        //   },
        // ],
      },
      { label: "Languages", href: "/uk/subjects/languages" },
      { label: "Primary", href: "/uk/subjects/primary" },
      { label: "Secondary", href: "/uk/subjects/secondary" },
      { label: "Early Learning", href: "/uk/subjects/early-learning" },
      { label: "Revision", href: "/uk/subjects/revision" },
      { label: "Coding for Kids", href: "/uk/subjects/coding-for-kids" },
      { label: "Spoken English", href: "/uk/subjects/spoken-english" },
      { label: "A-Level", href: "/uk/subjects/a-level" },
      { label: "Test Prep", href: "/uk/subjects/test-prep" },
    ],
  },
  {
    label: "Exam Prep",
    href: "/uk/exam-prep",
    children: [
      {
        // label: "GCSE",
        // href: "/uk/exam-prep/gcse",
        children: [
          { label: "GCSE Maths", href: "/uk/exam-prep/gcse/maths" },
          // { label: "GCSE Science", href: "/uk/exam-prep/gcse/science" },
          // { label: "GCSE English", href: "/uk/exam-prep/gcse/english" },
        ],
      },
      {
        // label: "A-Level",
        // href: "/uk/exam-prep/a-level",
        children: [
          { label: "A-Level Maths", href: "/uk/exam-prep/a-level/maths" },
          // { label: "A-Level Physics", href: "/uk/exam-prep/a-level/physics" },
          // { label: "A-Level Chemistry", href: "/uk/exam-prep/a-level/chemistry" },
        ],
      },
      {
        // label: "SATs",
        // href: "/uk/exam-prep/sats",
        children: [{ label: "SAT Maths", href: "/uk/exam-prep/sats/maths" }],
      },
      { label: "Maths", href: "/uk/exam-prep/maths" },
    ],
  },
  {
    label: "Tutors",
    href: "/uk/tutors",
    children: [
      
      { label: "Become a Tutor", href: "/uk/tutors/join" },
       {label:"Male Tutors",href:"/uk/tutors/male-tutors"},
       {label:"Female Tutors",href:"/uk/tutors/female-tutors"},
    ],
  },
  {
    label: "Resources",
    href: "/uk/resources",
    children: [
      { label: "Worksheets", href: "/uk/resources/worksheets" },
      { label: "Past Papers", href: "/uk/resources/past-papers" },
      { label: "Study Guides", href: "/uk/resources/study-guides" },
      {
        label: "Maths",
        href: "/uk/resources/maths",
        children: [
          { label: "Maths Worksheets", href: "/uk/resources/maths/worksheets" },
          { label: "Maths Past Papers", href: "/uk/resources/maths/past-papers" },
          { label: "Maths Study Guides", href: "/uk/resources/maths/study-guides" },
        ],
      },
    ],
  },
  {
    label: "More",
    href: "/uk/more",
    children: [
      { label: "About", href: "/uk/about" },
      { label: "Blog", href: "/uk/blog" },
      { label: "Pricing", href: "/uk/pricing" },
      { label: "Contact", href: "/uk/contact" },
      { label: "Success Stories", href: "/uk/reviews" },
    ],
  },
];

export default function UkDynamicNavbar() {
  const [pathname, setPathname] = useState("/uk");
  const navbarRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openMobileMenus, setOpenMobileMenus] = useState({});
  const hoverTimeoutRef = useRef(null);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hover handlers for desktop
  const handleMouseEnter = useCallback((label) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenDesktopMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDesktopMenu(null);
    }, 150);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setOpenDesktopMenu(null);
        setHoveredItem(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback((href) => {
    setPathname(href);
    setMobileOpen(false);
    setOpenDesktopMenu(null);
    setHoveredItem(null);
    
    if (typeof window !== 'undefined') {
      window.location.href = href;
    }
  }, []);

  const toggleMobileSubmenu = useCallback((key) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleChildHover = useCallback((childHref) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredItem(childHref);
  }, []);

  const handleChildLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 100);
  }, []);

  // Enhanced Desktop Mega Menu Component without scrollbars
  const MegaMenu = ({ items }) => {
    let gridCols = 'grid-cols-1';
    if (items.length === 2) gridCols = 'grid-cols-2';
    else if (items.length === 3) gridCols = 'grid-cols-3';
    else if (items.length === 4) gridCols = 'grid-cols-4';
    else if (items.length >= 5) gridCols = 'grid-cols-5';
    
    return (
      <div className={`grid ${gridCols} gap-2 px-6 overflow-hidden`}>
        {items.map((item) => (
          <div key={item.href} className="space-y-0 min-w-0">
            <button
              onClick={() => handleNavClick(item.href)}
              className={`block font-medium group text-sm w-full text-left transition-all duration-200 ${
                scrolled 
                  ? "text-gray-800 hover:text-teal-600" 
                  : "text-white hover:text-teal-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="relative inline-block py-1">
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-300 rounded-full ${
                    scrolled ? "bg-teal-600" : "bg-teal-300"
                  }`}></span>
                </span>
                <ChevronRight 
                  size={16} 
                  className={`opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200 ${
                    scrolled ? "text-teal-500" : "text-teal-200"
                  }`} 
                />
              </div>
            </button>
            {item.children && (
              <ul className="space-y-3">
                {item.children.map((child) => (
                  <li 
                    key={child.href}
                    onMouseEnter={() => handleChildHover(child.href)}
                    onMouseLeave={handleChildLeave}
                    className="relative"
                  >
                    <button
                      onClick={() => handleNavClick(child.href)}
                      className={`text-base flex items-center justify-between group/item w-full text-left transition-all duration-200 ${
                        scrolled 
                          ? "text-gray-600 hover:text-teal-600" 
                          : "text-teal-100 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="relative py-1">
                          {child.label}
                          <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover/item:w-full transition-all duration-300 rounded-full ${
                            scrolled ? "bg-teal-500" : "bg-teal-200"
                          }`}></span>
                        </span>
                      </div>
                      {child.children && (
                        <ChevronRight
                          size={14}
                          className={`opacity-0 group-hover/item:opacity-100 transform group-hover/item:translate-x-1 transition-all duration-200 ${
                            scrolled ? "text-teal-400" : "text-teal-200"
                          }`}
                        />
                      )}
                    </button>
                    {child.children && hoveredItem === child.href && (
                      <ul 
                        className={`ml-4 mt-3 space-y-2 pl-4 border-l-2 ${
                          scrolled 
                            ? "border-teal-200" 
                            : "border-teal-400/50"
                        }`}
                        onMouseEnter={() => handleChildHover(child.href)}
                        onMouseLeave={handleChildLeave}
                      >
                        {child.children.map((subChild) => (
                          <li key={subChild.href}>
                            <button
                              onClick={() => handleNavClick(subChild.href)}
                              className={`text-sm block group/sub w-full text-left transition-all duration-200 ${
                                scrolled 
                                  ? "text-gray-500 hover:text-teal-600" 
                                  : "text-teal-200 hover:text-white"
                              }`}
                            >
                              <span className="relative py-1">
                                {subChild.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover/sub:w-full transition-all duration-300 rounded-full ${
                                  scrolled ? "bg-teal-400" : "bg-white"
                                }`}></span>
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Enhanced Mobile Menu Component without scrollbars
  const MobileNestedMenu = ({ item, depth = 0 }) => {
    const itemKey = `${depth}-${item.label}`;
    const isOpen = openMobileMenus[itemKey];

    return (
      <div className={depth > 0 ? `ml-4 border-l-2 pl-4 ${
        scrolled ? "border-teal-200" : "border-teal-400/50"
      }` : ""}>
        <div className="flex items-center justify-between py-3">
          <button
            onClick={() => handleNavClick(item.href)}
            className={`flex-1 font-medium transition-all duration-200 text-left group ${
              pathname === item.href 
                ? scrolled ? "text-teal-600 font-bold" : "text-white font-bold"
                : scrolled ? "text-gray-700 hover:text-teal-600" : "text-teal-50 hover:text-white"
            }`}
          >
            <span className="relative inline-block">
              {item.label}
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full ${
                pathname === item.href 
                  ? scrolled ? "bg-teal-600" : "bg-white"
                  : scrolled ? "bg-teal-400" : "bg-teal-200"
              }`}></span>
            </span>
          </button>
          {item.children && (
            <button
              onClick={() => toggleMobileSubmenu(itemKey)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled ? "hover:bg-teal-50" : "hover:bg-teal-500/50"
              }`}
              aria-label={`Toggle ${item.label} submenu`}
            >
              <ChevronDown
                size={18}
                className={`transition-all duration-200 ${
                  scrolled 
                    ? isOpen ? "rotate-180 text-teal-600" : "text-gray-500"
                    : isOpen ? "rotate-180 text-white" : "text-teal-100"
                }`}
              />
            </button>
          )}
        </div>

        {item.children && isOpen && (
          <div className="space-y-1 mt-1 overflow-hidden">
            {item.children.map((child) => (
              <MobileNestedMenu key={child.label} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Fixed Top Bar with Contact Info */}
      <div className={`fixed top-0 left-8 right-8 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("/uk")}
              className="flex items-center flex-shrink-0"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg">
                <img src="/Images/yfc-logo.png" alt="yfcampus" className="w-20 mr-2" />
              </div>
            </button>

            {/* Center Section - Auth Links & Social Icons */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Auth Links - Desktop Only */}
              <div className="hidden lg:flex items-center gap-2">
                <button
                  onClick={() => handleNavClick("/get-register")}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-all duration-200 text-sm font-medium whitespace-nowrap border border-teal-200 hover:border-teal-300"
                  aria-label="Register Now"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register</span>
                </button>

                <a
                  href="https://cp.ilmulquran.com/"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-all duration-200 text-sm font-medium whitespace-nowrap border border-teal-200 hover:border-teal-300"
                  aria-label="Student Login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-50 hover:bg-teal-600 ${social.hoverColor} flex items-center justify-center transition-all duration-200 group hover:scale-110`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Number - Desktop */}
            <a
              href="https://wa.me/447532792318"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-teal-50 transition-all duration-200 flex-shrink-0 border border-teal-200 hover:border-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-4 w-4 text-teal-600" />
              <span className="text-teal-700 font-medium text-sm whitespace-nowrap">+44 753 279 2318</span>
            </a>

            {/* Mobile WhatsApp Icon Only */}
            <a
              href="https://wa.me/447532792318"
              className="md:hidden w-9 h-9 rounded-full bg-teal-50 hover:bg-teal-600 flex items-center justify-center transition-all duration-200 group hover:scale-110 flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Phone className="h-4 w-4 text-teal-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation with Scroll-based Color Change */}
      <nav
        ref={navbarRef}
        className={`mt-2 fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
          scrolled 
            ? "w-full top-0 rounded-none bg-white shadow-lg border-b border-gray-200" 
            : "w-[95%] max-w-7xl top-[76px] rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 shadow-xl"
        }`}
      >
        <div className="px-3 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Mobile Menu Title */}
          <div className={`text-lg font-bold lg:hidden ${
            scrolled ? "text-gray-800" : "text-white"
          }`}>
            Menu
          </div>

          {/* Enhanced Desktop Menu with Scroll-based Styling */}
          <div className="hidden lg:flex items-center gap-1 w-full justify-center flex-wrap">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-2.5 font-semibold rounded-xl transition-all duration-200 relative group text-sm xl:text-base ${
                      pathname.startsWith(item.href)
                        ? scrolled 
                          ? "bg-teal-50 text-teal-700 border border-teal-200" 
                          : "bg-teal-700 text-white shadow-inner"
                        : scrolled 
                          ? "text-gray-700 hover:text-teal-600 hover:bg-teal-50" 
                          : "text-white hover:bg-teal-500/50 hover:shadow-lg"
                    }`}
                  >
                    <span className="relative whitespace-nowrap">
                      {item.label}
                      <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-4/5 transition-all duration-300 rounded-full ${
                        scrolled ? "bg-teal-600" : "bg-teal-200"
                      }`}></span>
                    </span>
                  </button>

                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenDesktopMenu(openDesktopMenu === item.label ? null : item.label)
                      }
                      className={`p-2 ml-1 rounded-lg transition-all duration-200 ${
                        scrolled 
                          ? "hover:bg-teal-50 text-gray-600" 
                          : "hover:bg-teal-500/50 text-teal-100"
                      }`}
                      aria-label={`Toggle ${item.label} menu`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-all duration-200 ${
                          openDesktopMenu === item.label 
                            ? scrolled ? "rotate-180 text-teal-600" : "rotate-180 text-white" 
                            : "group-hover:rotate-180"
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Enhanced Mega Menu Dropdown without scrollbars */}
                {item.children && openDesktopMenu === item.label && (
                  <div 
                    className={`absolute top-full mt-2 shadow-2xl rounded-2xl border-2 z-50 backdrop-blur-sm overflow-hidden ${
                      scrolled 
                        ? "bg-white border-teal-100 shadow-2xl" 
                        : "bg-gradient-to-br from-teal-600 to-teal-700 border-teal-400/30"
                    }`}
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                      minWidth: item.children.length <= 3 ? '320px' : '600px',
                      maxWidth: 'calc(100vw - 2rem)',
                      width: 'auto'
                    }}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MegaMenu items={item.children} />
                    
                     
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-200 hover:scale-110 ${
              scrolled 
                ? "hover:bg-teal-50 text-gray-700" 
                : "hover:bg-teal-500/50 text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu without scrollbars */}
        {mobileOpen && (
          <div className={`lg:hidden border-t px-4 py-4 max-h-[calc(100vh-136px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
            scrolled 
              ? "bg-white border-gray-200" 
              : "bg-gradient-to-b from-teal-600 to-teal-700 border-teal-400/30"
          }`}>
            {/* Enhanced Mobile Auth Links */}
            <div className={`mb-4 pb-4 space-y-2 ${
              scrolled ? "border-b border-gray-200" : "border-b border-teal-400/30"
            }`}>
              <button
                onClick={() => handleNavClick("/get-register")}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 w-full text-left border ${
                  scrolled 
                    ? "text-teal-700 hover:bg-teal-50 border-teal-200 hover:border-teal-300" 
                    : "text-white hover:bg-teal-500/50 border-teal-400/30 hover:border-teal-300/50"
                }`}
              >
                <UserPlus className="w-5 h-5" />
                <span className="text-base font-medium">Register</span>
              </button>

              <a
                href="https://cp.ilmulquran.com/"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 border ${
                  scrolled 
                    ? "text-teal-700 hover:bg-teal-50 border-teal-200 hover:border-teal-300" 
                    : "text-white hover:bg-teal-500/50 border-teal-400/30 hover:border-teal-300/50"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogIn className="w-5 h-5" />
                <span className="text-base font-medium">Login</span>
              </a>
            </div>

            {/* Enhanced Mobile Navigation Items */}
            {navItems.map((item) => (
              <MobileNestedMenu key={item.label} item={item} />
            ))}
          </div>
        )}
      </nav>

      {/* Spacer for content below */}
      <div className="h-[80px]"></div>
    </>
  );
}