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
          {
            label: "KS3",
            href: "/uk/subjects/science/ks3",
            children: [
              { label: "Biology", href: "/uk/subjects/science/biology" },
              { label: "Chemistry", href: "/uk/subjects/science/chemistry" },
              { label: "Physics", href: "/uk/subjects/science/physics" },
            ],
          },
        ],
      },
      {
        label: "English",
        href: "/uk/subjects/english",
      },
      {
        label: "Computer Science",
        href: "/uk/subjects/computer-science",
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
   
    children: [
      {
        label:"GCSE Maths",
        href:"/uk/exam-prep/gcse/maths",
      },
      {
        label:"A-Level Maths",
        href:"/uk/exam-prep/a-level/maths",
      },
      {
        label:"SAT Maths",
        href:"/uk/exam-prep/sats/maths",
      },
      {
        label:"Maths",
        href:"/uk/exam-prep/maths",
      }
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

  // Calculate dropdown position to prevent overflow
  const getDropdownPosition = (label, index, totalItems) => {
    const isFirst = index === 0;
    const isLast = index === totalItems - 1;
    
    if (isFirst) return { left: '0', transform: 'none' };
    if (isLast) return { right: '0', left: 'auto' };
    return { left: '50%', transform: 'translateX(-50%)' };
  };

  // Enhanced Desktop Mega Menu Component
  const MegaMenu = ({ items, parentLabel }) => {
    // Filter items that have either href or children (to handle items without href but with children)
    const itemsWithContent = items.filter(item => 
      (item.href && item.label) || (item.children && item.children.length > 0)
    );
    
    let gridCols = 'grid-cols-5';
    let minWidth = '700px';
    
    if (itemsWithContent.length <= 2) {
      gridCols = 'grid-cols-2';
      minWidth = '340px';
    } else if (itemsWithContent.length === 3) {
      gridCols = 'grid-cols-3';
      minWidth = '480px';
    } else if (itemsWithContent.length === 4) {
      gridCols = 'grid-cols-4';
      minWidth = '600px';
    }
    
    return (
      <div 
        className={`grid ${gridCols} gap-2 p-3`} 
        style={{ minWidth, maxWidth: '85vw' }}
      >
        {itemsWithContent.map((item, idx) => (
          <div key={item.href || `item-${idx}`} className="space-y-1 min-w-0">
            {item.label && (
              <button
                onClick={() => item.href && handleNavClick(item.href)}
                disabled={!item.href}
                className={`block font-medium group text-xs w-full text-left transition-colors duration-150 pb-1 border-b ${
                  !item.href 
                    ? scrolled 
                      ? "text-gray-400 cursor-default border-gray-100" 
                      : "text-teal-300 cursor-default border-teal-400/20"
                    : scrolled 
                      ? "text-gray-800 hover:text-teal-600 border-gray-200 hover:border-teal-400" 
                      : "text-white hover:text-teal-100 border-teal-400/30 hover:border-teal-200"
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="truncate">{item.label}</span>
                  {item.href && (
                    <ChevronRight 
                      size={10} 
                      className={`opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${
                        scrolled ? "text-teal-500" : "text-teal-200"
                      }`} 
                    />
                  )}
                </div>
              </button>
            )}
            {item.children && item.children.length > 0 && (
              <ul className="space-y-0.5">
                {item.children.map((child, childIdx) => (
                  <li 
                    key={child.href || `child-${childIdx}`}
                    onMouseEnter={() => child.href && handleChildHover(child.href)}
                    onMouseLeave={handleChildLeave}
                    className="relative"
                  >
                    {child.label && (
                      <button
                        onClick={() => child.href && handleNavClick(child.href)}
                        disabled={!child.href}
                        className={`text-xs flex items-center justify-between group/item w-full text-left transition-colors duration-150 py-0.5 px-1.5 rounded ${
                          !child.href
                            ? scrolled 
                              ? "text-gray-400 cursor-default" 
                              : "text-teal-300 cursor-default"
                            : scrolled 
                              ? "text-gray-600 hover:text-teal-600 hover:bg-teal-50" 
                              : "text-teal-100 hover:text-white hover:bg-teal-500/30"
                        }`}
                      >
                        <span className="truncate">{child.label}</span>
                        {child.children && child.children.length > 0 && (
                          <ChevronRight
                            size={9}
                            className={`opacity-50 group-hover/item:opacity-100 transition-opacity flex-shrink-0 ${
                              scrolled ? "text-teal-400" : "text-teal-200"
                            }`}
                          />
                        )}
                      </button>
                    )}
                    {child.children && child.children.length > 0 && hoveredItem === child.href && (
                      <ul 
                        className={`ml-1.5 mt-0.5 space-y-0.5 pl-1.5 border-l ${
                          scrolled 
                            ? "border-teal-200" 
                            : "border-teal-400/50"
                        }`}
                        onMouseEnter={() => child.href && handleChildHover(child.href)}
                        onMouseLeave={handleChildLeave}
                      >
                        {child.children.map((subChild, subIdx) => (
                          <li key={subChild.href || `subchild-${subIdx}`}>
                            {subChild.label && (
                              <button
                                onClick={() => subChild.href && handleNavClick(subChild.href)}
                                disabled={!subChild.href}
                                className={`text-xs block w-full text-left transition-colors duration-150 py-0.5 px-1 rounded truncate ${
                                  !subChild.href
                                    ? scrolled 
                                      ? "text-gray-400 cursor-default" 
                                      : "text-teal-300 cursor-default"
                                    : scrolled 
                                      ? "text-gray-500 hover:text-teal-600 hover:bg-teal-50" 
                                      : "text-teal-200 hover:text-white hover:bg-teal-500/20"
                                }`}
                              >
                                {subChild.label}
                              </button>
                            )}
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

  // Mobile Menu Component
  const MobileNestedMenu = ({ item, depth = 0 }) => {
    const itemKey = `${depth}-${item.label}`;
    const isOpen = openMobileMenus[itemKey];

    return (
      <div className={depth > 0 ? `ml-3 border-l pl-3 ${
        scrolled ? "border-teal-200" : "border-teal-400/50"
      }` : ""}>
        <div className="flex items-center justify-between py-2">
          {item.href ? (
            <button
              onClick={() => handleNavClick(item.href)}
              className={`flex-1 text-sm font-medium transition-colors duration-150 text-left ${
                pathname === item.href 
                  ? scrolled ? "text-teal-600 font-semibold" : "text-white font-semibold"
                  : scrolled ? "text-gray-700 hover:text-teal-600" : "text-teal-50 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ) : (
            <span className={`flex-1 text-sm font-medium ${
              scrolled ? "text-gray-500" : "text-teal-200"
            }`}>
              {item.label}
            </span>
          )}
          {item.children && item.children.length > 0 && (
            <button
              onClick={() => toggleMobileSubmenu(itemKey)}
              className={`p-1.5 rounded transition-colors duration-150 ${
                scrolled ? "hover:bg-teal-50" : "hover:bg-teal-500/50"
              }`}
              aria-label={`Toggle ${item.label} submenu`}
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  scrolled 
                    ? isOpen ? "rotate-180 text-teal-600" : "text-gray-500"
                    : isOpen ? "rotate-180 text-white" : "text-teal-100"
                }`}
              />
            </button>
          )}
        </div>

        {item.children && item.children.length > 0 && isOpen && (
          <div className="space-y-0.5 mt-0.5">
            {item.children.map((child, idx) => (
              <MobileNestedMenu key={child.label || `child-${idx}`} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Fixed Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("/uk")}
              className="flex-shrink-0"
            >
              <img src="/Images/yfc-logo.png" alt="yfcampus" className="h-10 w-auto" />
            </button>

            {/* Center Section */}
            <div className="flex items-center gap-2">
              {/* Auth Links - Desktop */}
              <div className="hidden lg:flex items-center gap-1.5">
                <button
                  onClick={() => handleNavClick("/get-register")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors duration-150 whitespace-nowrap border border-teal-200"
                  aria-label="Register Now"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Register</span>
                </button>

                <a
                  href="https://cp.ilmulquran.com/"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-teal-700 hover:bg-teal-50 hover:text-teal-800 transition-colors duration-150 whitespace-nowrap border border-teal-200"
                  aria-label="Student Login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Login</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-1.5">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-7 h-7 rounded-full bg-teal-50 hover:bg-teal-600 ${social.hoverColor} flex items-center justify-center transition-colors duration-150 group`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-3.5 h-3.5 text-teal-600 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact - Desktop */}
            <a
              href="https://wa.me/447532792318"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-teal-50 transition-colors duration-150 flex-shrink-0 border border-teal-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-3.5 w-3.5 text-teal-600" />
              <span className="text-teal-700 font-medium text-xs whitespace-nowrap">+44 753 279 2318</span>
            </a>

            {/* Mobile WhatsApp */}
            <a
              href="https://wa.me/447532792318"
              className="md:hidden w-8 h-8 rounded-full bg-teal-50 hover:bg-teal-600 flex items-center justify-center transition-colors duration-150 group flex-shrink-0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Phone className="h-3.5 w-3.5 text-teal-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        ref={navbarRef}
        className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
          scrolled 
            ? "w-full top-0 rounded-none bg-white shadow-md border-b border-gray-200" 
            : "w-[95%] max-w-7xl top-[60px] rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-2.5 flex justify-between items-center">
          {/* Mobile Title */}
          <div className={`text-sm font-semibold lg:hidden ${
            scrolled ? "text-gray-800" : "text-white"
          }`}>
            Menu
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5 w-full justify-center">
            {navItems.map((item, index) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  {item.href ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap ${
                        pathname.startsWith(item.href)
                          ? scrolled 
                            ? "bg-teal-50 text-teal-700" 
                            : "bg-teal-700 text-white"
                          : scrolled 
                            ? "text-gray-700 hover:text-teal-600 hover:bg-teal-50" 
                            : "text-white hover:bg-teal-500/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap ${
                      scrolled ? "text-gray-500" : "text-teal-200"
                    }`}>
                      {item.label}
                    </span>
                  )}

                  {item.children && item.children.length > 0 && (
                    <button
                      onClick={() =>
                        setOpenDesktopMenu(openDesktopMenu === item.label ? null : item.label)
                      }
                      className={`p-1 ml-0.5 rounded transition-colors duration-150 ${
                        scrolled 
                          ? "hover:bg-teal-50 text-gray-600" 
                          : "hover:bg-teal-500/50 text-teal-100"
                      }`}
                      aria-label={`Toggle ${item.label} menu`}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDesktopMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mega Menu Dropdown */}
                {item.children && item.children.length > 0 && openDesktopMenu === item.label && (
                  <div 
                    className={`absolute top-full mt-1.5 shadow-xl rounded-lg border z-50 ${
                      scrolled 
                        ? "bg-white border-gray-200" 
                        : "bg-gradient-to-br from-teal-600 to-teal-700 border-teal-400/30"
                    }`}
                    style={getDropdownPosition(item.label, index, navItems.length)}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MegaMenu items={item.children} parentLabel={item.label} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-1.5 rounded-lg transition-colors duration-150 ${
              scrolled 
                ? "hover:bg-teal-50 text-gray-700" 
                : "hover:bg-teal-500/50 text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`lg:hidden border-t px-3 py-3 max-h-[calc(100vh-120px)] overflow-y-auto ${
            scrolled 
              ? "bg-white border-gray-200" 
              : "bg-gradient-to-b from-teal-600 to-teal-700 border-teal-400/30"
          }`}>
            {/* Mobile Auth Links */}
            <div className={`mb-3 pb-3 space-y-1.5 ${
              scrolled ? "border-b border-gray-200" : "border-b border-teal-400/30"
            }`}>
              <button
                onClick={() => handleNavClick("/get-register")}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-150 w-full text-left border text-sm ${
                  scrolled 
                    ? "text-teal-700 hover:bg-teal-50 border-teal-200" 
                    : "text-white hover:bg-teal-500/50 border-teal-400/30"
                }`}
              >
                <UserPlus className="w-4 h-4" />
                <span className="font-medium">Register</span>
              </button>

              <a
                href="https://cp.ilmulquran.com/"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-150 border text-sm ${
                  scrolled 
                    ? "text-teal-700 hover:bg-teal-50 border-teal-200" 
                    : "text-white hover:bg-teal-500/50 border-teal-400/30"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogIn className="w-4 h-4" />
                <span className="font-medium">Login</span>
              </a>
            </div>

            {/* Mobile Nav Items */}
            {navItems.map((item) => (
              <MobileNestedMenu key={item.label} item={item} />
            ))}
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-[68px]"></div>
    </>
  );
}