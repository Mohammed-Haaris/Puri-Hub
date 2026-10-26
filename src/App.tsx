import { useState } from 'react';
import Header from './components/Header';
import {
  Bike,
  Sparkles,
  Flame,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  ShoppingBag,
  X
} from 'lucide-react';

export function App() {
  const [cartCount, setCartCount] = useState(2);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const offers = [
    {
      id: 1,
      title: 'Puri-Hub Ultimate 24-Puri Feast',
      price: '$16.90',
      originalPrice: '$24.00',
      tag: '50% 2nd Set',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
      desc: '24 Crispy hand-fried puris, 3 spiced panis (Khatta-Meetha, Teekha Mint, Garlic Hing), potato-chickpea masala & sev.'
    },
    {
      id: 2,
      title: 'Royal Dahi Batata Puri Box',
      price: '$8.50',
      originalPrice: '$11.00',
      tag: 'Chef Special',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
      desc: 'Crispy puris stuffed with spiced potatoes, topped with thick chilled sweet yoghurt, tamarind glaze and crunchy sev.'
    },
    {
      id: 3,
      title: 'Mumbai Vada Pav & Chai Combo',
      price: '$7.20',
      originalPrice: '$9.50',
      tag: 'Snack Deal',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80',
      desc: '2 Golden spiced potato fritters in soft buttery pav with dry garlic chutney + 1 hot Kulhad Masala Chai.'
    }
  ];

  const categories = ['All', 'Puri Specials', 'Street Chaats', 'Hot Pavs & Bites', 'Party Packs', 'Chai & Coolers'];

  return (
    <div className="min-h-screen bg-[#faf9f5] flex flex-col font-sans">
      {/* The Popeyes Singapore Style Header */}
      <Header
        cartCount={cartCount}
        onOrderClick={() => setIsOrderModalOpen(true)}
      />

      {/* Main Page Content - Hero & Showcase with seamless smooth scroll anchors */}
      <main className="flex-1 pt-[52px] sm:pt-[60px] lg:pt-[68px]">
        
        {/* Hero Section (Popeyes Style Warm Fast-Casual Banner) */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#fff6ed] to-[#faf9f5] border-b border-orange-100/60 py-8 sm:py-12 md:py-16">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-[#f25600]/10 border border-[#f25600]/20 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f25600]" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#f25600]">
                    Singapore’s Most Loved Pani Puri Destination
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1f1f1f] tracking-tight leading-[1.12]">
                  CRUNCH INTO THE <br />
                  <span className="text-[#f25600] underline decoration-[#ff7d00] decoration-wavy decoration-from-font">
                    SPICIEST & TANGIEST
                  </span>{' '}
                  INDIAN STREET BITES!
                </h1>

                <p className="text-sm sm:text-lg text-zinc-600 max-w-xl font-medium leading-relaxed">
                  Crafted with 100% RO mineral water, freshly fried crunchy puris, and authentic spices flown directly from India. Experience real street food with world-class hygiene.
                </p>

                {/* Primary CTAs matching Popeyes Singapore design */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="flex items-center justify-center gap-2.5 bg-[#f25600] hover:bg-[#ab4600] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-black text-sm sm:text-base shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Bike className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Order Puri-Hub Delivery</span>
                  </button>

                  <a
                    href="#offers"
                    className="flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 border-2 border-zinc-200 text-zinc-800 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-extrabold text-sm sm:text-base transition-colors"
                  >
                    <span>Explore Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Quality USPs */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-orange-200/50 max-w-lg">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0" />
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-700 leading-tight">100% Mineral Water</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0 fill-amber-500" />
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-700 leading-tight">4.9★ Rated (15k+)</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#f25600] shrink-0" />
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-700 leading-tight">30-Min Delivery</span>
                  </div>
                </div>
              </div>

              {/* Hero Image Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/15 border-4 border-white bg-orange-100 relative group">
                    <img
                      src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
                      alt="Signature Puri-Hub Pani Puri Platter"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-orange-100 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                      <span className="text-xs font-extrabold text-[#1f1f1f]">Crispy Fresh Daily</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-[#f25600] text-white px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
                      <span className="text-xs font-black uppercase">From</span>
                      <span className="text-lg font-black">$5.90</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Offers Section (Like Popeyes "Our Offers" #myoffers) */}
        <section id="offers" className="py-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[#f25600] font-black uppercase text-xs tracking-widest">Limited Time Deals</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1f1f1f] tracking-tight">
                Our Signature Offers
              </h2>
            </div>
            
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#1f1f1f] text-white shadow-sm'
                      : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#f25600] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                    {offer.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-black text-[#1f1f1f] group-hover:text-[#f25600] transition-colors">
                        {offer.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {offer.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-[#f25600]">{offer.price}</span>
                      <span className="text-xs text-zinc-400 line-through ml-2 font-bold">{offer.originalPrice}</span>
                    </div>

                    <button
                      onClick={() => setCartCount(c => c + 1)}
                      className="flex items-center gap-1.5 bg-orange-50 hover:bg-[#f25600] text-[#f25600] hover:text-white px-4 py-2.5 rounded-full text-xs font-extrabold transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Quick Stores Banner */}
        <section id="locations" className="bg-[#1f1f1f] text-white py-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#f25600] font-black text-xs uppercase tracking-widest">
                Across Singapore
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Find Your Nearest Puri-Hub Outlet
              </h3>
              <p className="text-zinc-400 text-sm max-w-lg">
                12 fast-casual outlets & live street carts located at Orchard, Bugis, Tampines, Jurong Point & Little India.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#locations"
                className="bg-[#f25600] hover:bg-[#ab4600] text-white font-extrabold text-sm px-6 py-3 rounded-full transition flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>View All Outlets</span>
              </a>
            </div>
          </div>
        </section>

        {/* Events & Catering Section */}
        <section id="catering" className="py-14 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-100">
          <div className="bg-gradient-to-r from-orange-500 to-[#FF7D00] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-orange-500/20">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Live Chaat Counters
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Events, Weddings & Corporate Catering
              </h2>
              <p className="text-orange-100 text-sm leading-relaxed">
                Bring Singapore’s favorite live Pani Puri bar to your special occasion! Custom setups with interactive teekha & meetha dispensers, uniformed chefs, and certified hygienic service.
              </p>
            </div>
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="bg-white text-[#f25600] hover:bg-orange-50 font-black px-8 py-4 rounded-full text-sm shadow-lg transition whitespace-nowrap active:scale-95"
            >
              Book Live Counter
            </button>
          </div>
        </section>

        {/* Careers & Quality Promise */}
        <section id="careers" className="py-12 bg-white border-t border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="quality" className="bg-[#fff9f2] rounded-3xl p-8 border border-orange-100 space-y-3">
              <span className="text-[#f25600] font-black text-xs uppercase tracking-wider">Zero Compromise</span>
              <h3 className="text-2xl font-black text-zinc-900">Our 100% Mineral Water Quality Promise</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                We believe street snacks should be worry-free. Every drop of pani is made exclusively with certified RO Mineral Water and farm-fresh mint, coriander, and organic spices.
              </p>
            </div>

            <div id="ourstory" className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200/80 space-y-3">
              <span className="text-zinc-500 font-black text-xs uppercase tracking-wider">Join Our Crew</span>
              <h3 className="text-2xl font-black text-zinc-900">Careers & Franchise Opportunities</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                Passionate about real Indian street food? We are expanding rapidly across Singapore and Southeast Asia. Join our kitchen team or become a franchise partner.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Quick Footer for Authenticity */}
      <footer className="bg-white border-t border-zinc-200 py-8 text-center text-xs text-zinc-500">
        <p className="font-semibold text-zinc-700 mb-1">
          Puri-Hub Singapore • Crafted with Popeyes fast-casual design aesthetics for Indian Street Food
        </p>
        <p>© 2026 Puri-Hub SG Pte Ltd. All Rights Reserved.</p>
      </footer>

      {/* Order Delivery / Pickup Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-orange-100">
            <button
              onClick={() => setIsOrderModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-800 rounded-full hover:bg-zinc-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#f25600] text-white flex items-center justify-center">
                <Bike className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#1f1f1f]">Puri-Hub Online Order</h3>
                <p className="text-xs text-zinc-500">Direct delivery or self-collection</p>
              </div>
            </div>

            <div className="bg-[#fff9f2] border border-orange-200/60 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-2 text-[#f25600] font-bold text-xs mb-1">
                <Sparkles className="w-4 h-4" />
                Express Delivery Guarantee
              </div>
              <p className="text-xs text-zinc-600">
                Piping hot puris packed in anti-soggy airtight canisters to guarantee 100% crispiness on arrival.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-zinc-700 block mb-1">Enter Singapore Postal Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. 238839"
                    className="flex-1 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:border-[#f25600]"
                  />
                  <button className="bg-zinc-900 text-white px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-zinc-800 transition">
                    Check
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  alert('Routing to Puri-Hub Oddle / Direct Ordering Portal...');
                  setIsOrderModalOpen(false);
                }}
                className="w-full bg-[#f25600] hover:bg-[#ab4600] text-white py-3.5 rounded-2xl font-black text-sm shadow-md shadow-orange-500/25 transition mt-2"
              >
                Proceed to Order ($16.90 Min)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
