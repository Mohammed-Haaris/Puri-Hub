import React, { useState, useEffect, useRef } from 'react';
import {
  Bike,
  ShoppingBag,
  MapPin,
  ChevronDown,
  Phone,
  Search,
  X,
  UtensilsCrossed,
  Flame,
  Award,
  Users,
  ShieldCheck,
  PartyPopper,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  onOrderClick?: () => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onOrderClick, cartCount = 2 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('Home');

  const moreDropdownRef = useRef<HTMLDivElement>(null);
  const menuDropdownRef = useRef<HTMLDivElement>(null);

  // Smooth scroll detection for header transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setIsMoreDropdownOpen(false);
      }
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target as Node)) {
        setIsMenuDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll navigation handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, tabName: string) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
    setIsMenuDropdownOpen(false);
    setIsMoreDropdownOpen(false);

    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      if (!targetId || targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const menuCategories = [
    {
      name: 'Puri Specials',
      badge: 'Bestseller',
      desc: 'Pani Puri, Dahi Puri, Sev Puri & Sukha Puri',
      items: ['Signature 8-Puri Platter', 'Flavored Teekha Pani Trio', 'Classic Royal Dahi Batata Puri', 'Mumbai Chowpatty Sev Puri']
    },
    {
      name: 'Chaat Corner',
      badge: 'Popular',
      desc: 'Authentic tangy street chaats & papdi blends',
      items: ['Samosa Chaat Supreme', 'Delhi Papdi Chaat', 'Kolkatta Jhal Muri', 'Crispy Corn & Bhel Mix']
    },
    {
      name: 'Hot Crispy Bites',
      badge: 'Crispy',
      desc: 'Freshly fried snacks & buttery street pavs',
      items: ['Mumbai Vada Pav (Spicy Ghati)', 'Kutchi Dabeli Slider', 'Aloo Tikki Burger Pav', 'Punjabi Paneer Samosa']
    },
    {
      name: 'Party Poppin’ Bundles',
      badge: 'Combos',
      desc: 'Family packs & DIY Puri party boxes for 4-10 pax',
      items: ['Puri-Hub 50-Puri DIY Kit', 'Chaat Fiesta Platter for 4', 'Street Carnival Feast', 'Snack & Chai Box']
    },
    {
      name: 'Chai & Beverages',
      badge: 'Hot & Cold',
      desc: 'Kulhad masala chai & refreshing Indian coolers',
      items: ['Kadak Cutting Masala Chai', 'Alphonso Mango Lassi', 'Kala Khatta Sparkling Soda', 'Masala Shikanji Cooler']
    }
  ];

  return (
    <>
      {/* Main Sticky Header with smooth transitions */}
      <header
        className={`fixed top-0 left-0 w-full z-40 border-none outline-none transition-[background-color,padding,box-shadow] duration-300 ease-in-out ${
          isScrolled
            ? 'bg-[#FF7D00] shadow-[0_4px_20px_rgba(255,125,0,0.25)] py-1.5'
            : 'bg-white py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
        }`}
        style={{ borderBottom: 'none', outline: 'none' }}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="h-[52px] sm:h-[60px] lg:h-[68px] flex items-center justify-between relative">
            
            {/* Mobile Hamburger Button (Popeyes 3-line style) */}
            <div className="flex items-center lg:hidden z-10">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-1.5 rounded-lg transition-colors focus:outline-none ${
                  isScrolled ? 'text-white hover:text-zinc-200' : 'text-zinc-800 hover:text-[#f25600]'
                }`}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 transition-transform duration-200 rotate-90 ${isScrolled ? 'text-white' : 'text-[#f25600]'}`} />
                ) : (
                  <div className="w-5 h-4 sm:w-6 sm:h-5 flex flex-col justify-between">
                    <span className={`w-full h-[2.5px] rounded-full transition-all ${isScrolled ? 'bg-white' : 'bg-[#1f1f1f]'}`}></span>
                    <span className={`w-3/4 h-[2.5px] rounded-full transition-all ${isScrolled ? 'bg-white/80' : 'bg-[#f25600]'}`}></span>
                    <span className={`w-full h-[2.5px] rounded-full transition-all ${isScrolled ? 'bg-white' : 'bg-[#1f1f1f]'}`}></span>
                  </div>
                )}
              </button>
            </div>

            {/* Desktop Left Navigation (Popeyes: global-nav-L) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <a
                href="#offers"
                onClick={(e) => handleNavClick(e, '#offers', 'Offers')}
                className={`relative px-2.5 py-1.5 text-sm xl:text-[15px] font-bold tracking-tight rounded-lg transition-colors duration-200 flex items-center gap-1.5 ${
                  isScrolled
                    ? activeTab === 'Offers'
                      ? 'text-white bg-white/20'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    : activeTab === 'Offers'
                    ? 'text-[#f25600] bg-orange-50/60'
                    : 'text-[#1f1f1f] hover:text-[#f25600] hover:bg-zinc-50'
                }`}
              >
                <Flame className={`w-4 h-4 ${isScrolled ? 'text-white' : 'text-[#f25600]'}`} />
                <span>Offers</span>
                <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded uppercase ${
                  isScrolled ? 'bg-white text-[#FF7D00]' : 'bg-[#f25600]/10 text-[#f25600]'
                }`}>
                  Hot
                </span>
              </a>

              {/* Menu with Mega Dropdown */}
              <div
                className="relative"
                ref={menuDropdownRef}
                onMouseEnter={() => setIsMenuDropdownOpen(true)}
                onMouseLeave={() => setIsMenuDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
                  className={`px-2.5 py-1.5 text-sm xl:text-[15px] font-bold tracking-tight rounded-lg transition-colors duration-200 flex items-center gap-1 ${
                    isScrolled
                      ? activeTab === 'Menu' || isMenuDropdownOpen
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      : activeTab === 'Menu' || isMenuDropdownOpen
                      ? 'text-[#f25600] bg-orange-50/60'
                      : 'text-[#1f1f1f] hover:text-[#f25600] hover:bg-zinc-50'
                  }`}
                >
                  <span>Menu</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isMenuDropdownOpen ? 'rotate-180' : ''
                    } ${isScrolled ? 'text-white' : 'text-zinc-600'}`}
                  />
                </button>

                {/* Dropdown Menu (Popup) */}
                {isMenuDropdownOpen && (
                  <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-orange-100/60 p-5 mt-1 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="col-span-2 pb-2 border-b border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <UtensilsCrossed className="w-4 h-4 text-[#f25600]" />
                        <span className="text-xs font-black uppercase tracking-wider text-zinc-500">
                          Explore Indian Street Specials
                        </span>
                      </div>
                      <a
                        href="#offers"
                        onClick={(e) => handleNavClick(e, '#offers', 'Menu')}
                        className="text-xs font-bold text-[#f25600] hover:text-[#d94900] flex items-center gap-1 group"
                      >
                        View Full Menu
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>

                    {menuCategories.map((cat, idx) => (
                      <div
                        key={idx}
                        onClick={(e) => handleNavClick(e as any, '#offers', 'Menu')}
                        className="p-3 rounded-xl hover:bg-[#fff9f2] transition-colors cursor-pointer group border border-transparent hover:border-orange-100"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-extrabold text-[#1f1f1f] group-hover:text-[#f25600] transition-colors">
                            {cat.name}
                          </h4>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-orange-100 text-[#f25600]">
                            {cat.badge}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 line-clamp-1 mb-2">{cat.desc}</p>
                        <ul className="text-[11px] text-zinc-600 space-y-0.5">
                          {cat.items.slice(0, 2).map((item, i) => (
                            <li key={i} className="flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-[#f25600]"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#locations"
                onClick={(e) => handleNavClick(e, '#locations', 'Locations')}
                className={`px-2.5 py-1.5 text-sm xl:text-[15px] font-bold tracking-tight rounded-lg transition-colors duration-200 flex items-center gap-1 ${
                  isScrolled
                    ? activeTab === 'Locations'
                      ? 'text-white bg-white/20'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    : activeTab === 'Locations'
                    ? 'text-[#f25600] bg-orange-50/60'
                    : 'text-[#1f1f1f] hover:text-[#f25600] hover:bg-zinc-50'
                }`}
              >
                Locations
              </a>

              <a
                href="#catering"
                onClick={(e) => handleNavClick(e, '#catering', 'Catering')}
                className={`hidden xl:flex px-2.5 py-1.5 text-sm xl:text-[15px] font-bold tracking-tight rounded-lg transition-colors duration-200 items-center gap-1 ${
                  isScrolled
                    ? activeTab === 'Catering'
                      ? 'text-white bg-white/20'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    : activeTab === 'Catering'
                    ? 'text-[#f25600] bg-orange-50/60'
                    : 'text-[#1f1f1f] hover:text-[#f25600] hover:bg-zinc-50'
                }`}
              >
                Catering
              </a>

              <a
                href="#careers"
                onClick={(e) => handleNavClick(e, '#careers', 'Careers')}
                className={`hidden 2xl:flex px-2.5 py-1.5 text-sm xl:text-[15px] font-bold tracking-tight rounded-lg transition-colors duration-200 items-center gap-1 ${
                  isScrolled
                    ? activeTab === 'Careers'
                      ? 'text-white bg-white/20'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    : activeTab === 'Careers'
                    ? 'text-[#f25600] bg-orange-50/60'
                    : 'text-[#1f1f1f] hover:text-[#f25600] hover:bg-zinc-50'
                }`}
              >
                Careers
              </a>

              {/* More Dropdown (Exact Popeyes Singapore Style) */}
              <div
                className="relative"
                ref={moreDropdownRef}
                onMouseEnter={() => setIsMoreDropdownOpen(true)}
                onMouseLeave={() => setIsMoreDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className={`px-2.5 py-1.5 text-sm xl:text-[15px] font-bold tracking-tight rounded-lg transition-colors duration-200 flex items-center gap-1 ${
                    isScrolled
                      ? isMoreDropdownOpen
                        ? 'text-white bg-white/20'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      : isMoreDropdownOpen
                      ? 'text-[#f25600] bg-orange-50/60'
                      : 'text-[#1f1f1f] hover:text-[#f25600] hover:bg-zinc-50'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isMoreDropdownOpen ? 'rotate-180' : ''
                    } ${isScrolled ? 'text-white' : 'text-zinc-600'}`}
                  />
                </button>

                {isMoreDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.1)] border border-zinc-100 py-3 px-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <ul className="space-y-1 text-sm font-semibold text-zinc-700">
                      <li>
                        <a
                          href="#quality"
                          onClick={(e) => handleNavClick(e, '#quality', 'Quality')}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#f25600] transition"
                        >
                          <ShieldCheck className="w-4 h-4 text-[#f25600]" />
                          <span>Quality & Hygiene Standards</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#ourstory"
                          onClick={(e) => handleNavClick(e, '#ourstory', 'Our Story')}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#f25600] transition"
                        >
                          <Award className="w-4 h-4 text-[#f25600]" />
                          <span>Our Story</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#franchise"
                          onClick={(e) => handleNavClick(e, '#franchise', 'Franchise')}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#f25600] transition"
                        >
                          <Users className="w-4 h-4 text-[#f25600]" />
                          <span>Franchise & Company</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#locations"
                          onClick={(e) => handleNavClick(e, '#locations', 'Contact')}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#f25600] transition"
                        >
                          <Phone className="w-4 h-4 text-[#f25600]" />
                          <span>Contact Us</span>
                        </a>
                      </li>
                      <li className="pt-2 mt-1 border-t border-zinc-100">
                        <a
                          href="#terms"
                          onClick={(e) => handleNavClick(e, '#terms', 'Terms')}
                          className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-500 hover:text-[#f25600] transition"
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a
                          href="#privacy"
                          onClick={(e) => handleNavClick(e, '#privacy', 'Privacy')}
                          className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-500 hover:text-[#f25600] transition"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </nav>

            {/* Brand Logo - Centered in Desktop & Mobile, fully responsive without wrapping */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-300 pointer-events-auto">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home', 'Home')}
                className="flex items-center focus:outline-none"
              >
                {/* Clean Logo Pill with dynamic color shift on scroll */}
                <div
                  className={`flex items-center justify-center rounded-xl sm:rounded-2xl px-2.5 py-1 sm:px-4 sm:py-1.5 border-none shadow-sm transition-[background-color,color] duration-300 whitespace-nowrap select-none ${
                    isScrolled
                      ? 'bg-white/15 border border-white/20 backdrop-blur-sm text-[#faf9f5] shadow-sm'
                      : 'bg-[#FF7D00] text-[#faf9f5] shadow-md shadow-orange-500/20'
                  }`}
                >
                  <span className="font-black text-sm sm:text-lg lg:text-2xl tracking-tight leading-none text-[#faf9f5] whitespace-nowrap">
                    PURI<span className="text-[#faf9f5]">-HUB</span>
                  </span>
                </div>
              </a>
            </div>

            {/* Right Navigation: Compact on mobile, expanded on desktop */}
            <div className="flex items-center space-x-1 sm:space-x-3 z-10">
              {/* Quick Search Button (hidden on small mobile to give center logo maximum breathing space) */}
              <button
                className={`hidden sm:flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-white hover:bg-white/20'
                    : 'text-zinc-700 hover:text-[#f25600] hover:bg-orange-50'
                }`}
                title="Search Snacks"
                aria-label="Search Snacks"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Quick Cart Bag */}
              <button
                className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-white hover:bg-white/20'
                    : 'text-zinc-700 hover:text-[#f25600] hover:bg-orange-50'
                }`}
                title="Shopping Bag"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-0.5 -right-0.5 sm:top-1 sm:right-1 text-[9px] sm:text-[10px] font-black w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center border ${
                      isScrolled
                        ? 'bg-white text-[#FF7D00] border-[#FF7D00]'
                        : 'bg-[#f25600] text-white border-white animate-pulse'
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Popup Menu (Popeyes Singapore: .popup-menu) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[52px] sm:top-[60px] bg-white z-50 overflow-y-auto border-t border-zinc-100 flex flex-col justify-between pb-12 shadow-2xl">
            <div className="px-6 py-6 space-y-6 max-w-lg mx-auto w-full">
              
              {/* Top CTA Row in Mobile Menu (Delivery Pill + Home) */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOrderClick?.();
                  }}
                  className="flex items-center justify-center gap-2 bg-[#f25600] text-white py-3 px-4 rounded-2xl font-extrabold text-sm shadow-md shadow-orange-500/20 active:scale-98 transition"
                >
                  <Bike className="w-4 h-4" />
                  <span>Puri Delivery</span>
                </button>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home', 'Home')}
                  className="flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 py-3 px-4 rounded-2xl font-extrabold text-sm hover:bg-zinc-200 transition"
                >
                  <span>Home</span>
                </a>
              </div>

              {/* Primary Mobile Menu Links */}
              <div className="space-y-1 pt-2">
                <p className="text-[11px] font-black uppercase tracking-wider text-zinc-400 px-3 pb-1">
                  Menu & Outlets
                </p>
                <a
                  href="#offers"
                  onClick={(e) => handleNavClick(e, '#offers', 'Offers')}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 text-zinc-900 hover:text-[#f25600] font-black text-lg transition"
                >
                  <span className="flex items-center gap-2.5">
                    <Flame className="w-5 h-5 text-[#f25600]" />
                    Offers & Specials
                  </span>
                  <span className="bg-[#f25600] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                    50% Off
                  </span>
                </a>

                <a
                  href="#offers"
                  onClick={(e) => handleNavClick(e, '#offers', 'Menu')}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 text-zinc-900 hover:text-[#f25600] font-black text-lg transition"
                >
                  <span className="flex items-center gap-2.5">
                    <UtensilsCrossed className="w-5 h-5 text-[#f25600]" />
                    Snacks Menu
                  </span>
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                </a>

                {/* Sub-menu accordion chips */}
                <div className="pl-6 grid grid-cols-2 gap-2 pb-2">
                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers', 'Menu')}
                    className="bg-[#fff6ee] text-[#f25600] text-xs font-bold px-3 py-2 rounded-lg text-center"
                  >
                    Crispy Pani Puris
                  </a>
                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers', 'Menu')}
                    className="bg-[#fff6ee] text-[#f25600] text-xs font-bold px-3 py-2 rounded-lg text-center"
                  >
                    Dahi & Sev Puri
                  </a>
                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers', 'Menu')}
                    className="bg-[#fff6ee] text-[#f25600] text-xs font-bold px-3 py-2 rounded-lg text-center"
                  >
                    Vada Pav & Chaats
                  </a>
                  <a
                    href="#offers"
                    onClick={(e) => handleNavClick(e, '#offers', 'Menu')}
                    className="bg-[#fff6ee] text-[#f25600] text-xs font-bold px-3 py-2 rounded-lg text-center"
                  >
                    Party DIY Packs
                  </a>
                </div>

                <a
                  href="#locations"
                  onClick={(e) => handleNavClick(e, '#locations', 'Locations')}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 text-zinc-900 hover:text-[#f25600] font-black text-lg transition"
                >
                  <span className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-[#f25600]" />
                    Outlets & Kiosks
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">12 Locations</span>
                </a>

                <a
                  href="#catering"
                  onClick={(e) => handleNavClick(e, '#catering', 'Catering')}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 text-zinc-900 hover:text-[#f25600] font-black text-lg transition"
                >
                  <span className="flex items-center gap-2.5">
                    <PartyPopper className="w-5 h-5 text-[#f25600]" />
                    Events & Catering
                  </span>
                  <span className="text-xs font-bold text-emerald-600">Live Counters</span>
                </a>

               
              </div>

              {/* Secondary Company Links (Popeyes Style footer list inside popup) */}
              <div className="pt-4 border-t border-zinc-100 space-y-2">
                <p className="text-[11px] font-black uppercase tracking-wider text-zinc-400 px-3">
                  Company & Safety
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-zinc-700">
                  <a
                    href="#quality"
                    onClick={(e) => handleNavClick(e, '#quality', 'Quality')}
                    className="p-2.5 rounded-lg hover:bg-zinc-100 hover:text-[#f25600] transition flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#f25600]" />
                    Quality Promise
                  </a>
                  <a
                    href="#ourstory"
                    onClick={(e) => handleNavClick(e, '#ourstory', 'Our Story')}
                    className="p-2.5 rounded-lg hover:bg-zinc-100 hover:text-[#f25600] transition flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-[#f25600]" />
                    Our Story
                  </a>
                  <a
                    href="#locations"
                    onClick={(e) => handleNavClick(e, '#locations', 'Contact')}
                    className="p-2.5 rounded-lg hover:bg-zinc-100 hover:text-[#f25600] transition flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#f25600]" />
                    Contact Us
                  </a>
                  <a
                    href="#franchise"
                    onClick={(e) => handleNavClick(e, '#franchise', 'Franchise')}
                    className="p-2.5 rounded-lg hover:bg-zinc-100 hover:text-[#f25600] transition flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-[#f25600]" />
                    Franchise Info
                  </a>
                </div>
              </div>

              {/* Mobile Hotline & Support Card */}
              <div className="bg-[#fff9f2] border border-orange-200/60 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Customer Support Hotline</p>
                  <p className="text-base font-extrabold text-[#1f1f1f]">1800-PURI-HUB (7874-482)</p>
                </div>
                <a
                  href="tel:18007874482"
                  className="w-10 h-10 rounded-full bg-[#f25600] text-white flex items-center justify-center shadow-md shadow-orange-500/30"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        )}
    </>
  );
};

export default Header;
