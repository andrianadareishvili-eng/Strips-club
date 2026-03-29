/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  UtensilsCrossed,
  Flame,
  CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";

const COLORS = {
  primary: "#FF6321", // Bold Orange
  secondary: "#1A1A1A", // Deep Black
  accent: "#F5F5F0", // Warm Off-white
};

const MENU_ITEMS = [
  {
    category: "Strips & Wings",
    items: [
      { name: "Spicy Strips (3 pcs)", price: "8.50 GEL", description: "Our signature crispy spicy chicken strips.", image: "https://picsum.photos/seed/chicken-strips/400/300" },
      { name: "Spicy Strips (5 pcs)", price: "12.90 GEL", description: "More of the good stuff. Perfect for a quick lunch.", image: "https://picsum.photos/seed/strips-5/400/300" },
      { name: "Spicy Strips (8 pcs)", price: "18.50 GEL", description: "The family pack. Share the heat.", image: "https://picsum.photos/seed/strips-8/400/300" },
      { name: "Spicy Wings", price: "9.90 GEL", description: "Crispy, juicy wings with a kick.", image: "https://picsum.photos/seed/wings-spicy/400/300" },
      { name: "Hariyali Wings", price: "10.50 GEL", description: "Green herb marinated wings, unique flavor.", image: "https://picsum.photos/seed/wings-green/400/300" },
    ]
  },
  {
    category: "Burgers & Wraps",
    items: [
      { name: "Club Spicy Chicken Burger", price: "11.50 GEL", description: "Crispy chicken, spicy sauce, fresh lettuce.", image: "https://picsum.photos/seed/burger-spicy/400/300" },
      { name: "Club Spicy Chicken Wrap", price: "10.90 GEL", description: "The perfect on-the-go meal.", image: "https://picsum.photos/seed/wrap-spicy/400/300" },
    ]
  },
  {
    category: "Combos",
    items: [
      { name: "Strips Combo", price: "15.90 GEL", description: "3 Strips + Fries + Choice of Sauce.", image: "https://picsum.photos/seed/combo-strips/400/300" },
      { name: "Wings & Fries Combo", price: "14.50 GEL", description: "5 Wings + Fries + Choice of Sauce.", image: "https://picsum.photos/seed/combo-wings/400/300" },
    ]
  }
];

const REVIEWS = [
  { name: "Luka M.", rating: 5, comment: "Best strips in Tbilisi! Always fresh and super crispy.", date: "2 days ago" },
  { name: "Sophie G.", rating: 4, comment: "Great food, the spicy wrap is my favorite. Delivery was a bit slow but worth it.", date: "1 week ago" },
  { name: "Giorgi T.", rating: 5, comment: "Generous portions and friendly staff. Highly recommend the Hariyali wings.", date: "3 weeks ago" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#FF6321] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-[#FF6321] p-1.5 rounded-lg">
              <Flame className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">Strips Club</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-widest">
            {["menu", "about", "reviews", "contact"].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)}
                className="hover:text-[#FF6321] transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full hover:bg-[#FF6321] transition-all flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-2xl font-bold uppercase tracking-widest"
        >
          {["menu", "about", "reviews", "contact"].map((item) => (
            <button key={item} onClick={() => scrollToSection(item)}>{item}</button>
          ))}
          <button className="bg-[#FF6321] text-white px-10 py-4 rounded-full">Order Now</button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/crispy-chicken/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#FF6321] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Flame className="w-4 h-4" />
              Tbilisi's #1 Fried Chicken
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase italic mb-6">
              Best Fried <br />
              <span className="text-[#FF6321]">Chicken</span> <br />
              & Wraps
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg">
              Delicious crispy strips, wings, burgers & combos made fresh every single day. Taste the crunch that Tbilisi loves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF6321] text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3">
                Order Now <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              >
                View Menu
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Badge */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 hidden lg:flex w-32 h-32 bg-white rounded-full items-center justify-center p-4 shadow-2xl border-4 border-[#FF6321]"
        >
          <div className="text-center font-black text-[#1A1A1A] text-xs leading-tight uppercase">
            Open 24/7 <br /> Fresh Daily <br /> Tbilisi
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/crispy-chicken-strips/800/1000" 
                alt="Signature Crispy Chicken Strips" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FF6321] p-8 rounded-3xl text-white shadow-xl hidden sm:block">
                <div className="text-4xl font-black italic">3.8★</div>
                <div className="text-xs uppercase font-bold tracking-widest opacity-80">Google Rating</div>
              </div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-xs font-black text-[#FF6321] uppercase tracking-[0.3em] mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-black italic uppercase leading-tight mb-8">
              Mouth-watering <br /> Crispy Perfection
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Strips Club, we serve mouth-watering crispy chicken strips, flavorful wings, juicy burgers, and hearty combo meals — perfect for lunch, dinner, or late-night cravings. Locals and visitors alike love our bold flavors and generous portions.
            </p>
            <div className="space-y-4">
              {[
                "Fresh daily ingredients sourced locally",
                "Quick takeaway & delivery across Tbilisi",
                "Friendly local spot on Shalva Nutsubidze St",
                "Open 24/7 for your cravings"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FF6321] w-6 h-6" />
                  <span className="font-bold text-gray-800">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-xs font-black text-[#FF6321] uppercase tracking-[0.3em] mb-4">Our Menu</h2>
          <h3 className="text-4xl md:text-6xl font-black italic uppercase">Bestsellers & Combos</h3>
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {MENU_ITEMS.map((category, idx) => (
            <div key={idx}>
              <h4 className="text-2xl font-black italic uppercase mb-10 border-l-4 border-[#FF6321] pl-4">
                {category.category}
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-xl font-bold">{item.name}</h5>
                        <span className="text-[#FF6321] font-black">{item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-6">{item.description}</p>
                      <button className="w-full py-3 rounded-xl border border-[#FF6321] text-[#FF6321] font-bold hover:bg-[#FF6321] hover:text-white transition-all">
                        Add to Order
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-xs font-black text-[#FF6321] uppercase tracking-[0.3em] mb-4">Social Proof</h2>
              <h3 className="text-4xl md:text-5xl font-black italic uppercase">What People Are Saying</h3>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-black">3.8</div>
              <div>
                <div className="flex text-[#FF6321]">
                  {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  <Star className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase">22+ Google Reviews</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="flex text-[#FF6321] mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.comment}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">{review.name}</span>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-[#1A1A1A] font-black uppercase tracking-widest hover:text-[#FF6321] transition-colors">
              Leave a Review <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-black text-[#FF6321] uppercase tracking-[0.3em] mb-4">Find Us</h2>
            <h3 className="text-4xl md:text-5xl font-black italic uppercase mb-10">Visit Strips Club</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-[#F5F5F0] p-4 rounded-2xl">
                  <MapPin className="text-[#FF6321] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest mb-1">Address</h4>
                  <p className="text-gray-600">31 Shalva Nutsubidze St, Tbilisi 0177, Georgia</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#F5F5F0] p-4 rounded-2xl">
                  <Phone className="text-[#FF6321] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest mb-1">Phone</h4>
                  <p className="text-gray-600">+995 501 002006</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-[#F5F5F0] p-4 rounded-2xl">
                  <Clock className="text-[#FF6321] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest mb-1">Hours</h4>
                  <p className="text-gray-600 font-bold">Open 24/7 — Always Ready</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="flex-1 bg-[#1A1A1A] text-white py-4 rounded-2xl font-bold hover:bg-[#FF6321] transition-all flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Order Online
              </button>
              <button className="flex-1 border-2 border-[#1A1A1A] py-4 rounded-2xl font-bold hover:bg-[#1A1A1A] hover:text-white transition-all">
                Call to Order
              </button>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.123456789!2d44.735!3d41.725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQzJzMwLjAiTiA0NMKwNDQnMDYuMCJF!5e0!3m2!1sen!2sge!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#FF6321] py-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase leading-tight text-center md:text-left">
            Try Our Signature Combos <br />
            <span className="text-[#1A1A1A]">Perfect for Sharing!</span>
          </h3>
          <button className="bg-white text-[#FF6321] px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
            Order Now
          </button>
        </div>
        
        {/* Decorative Text Background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-white/10 text-[200px] font-black italic uppercase whitespace-nowrap pointer-events-none select-none">
          STRIPS STRIPS STRIPS STRIPS
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#FF6321] p-1.5 rounded-lg">
                <Flame className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic">Strips Club</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              The ultimate destination for fried chicken lovers in Tbilisi. Fresh ingredients, bold spices, and the perfect crunch every time.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6321] transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6321] transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6321] transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6 text-[#FF6321]">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-bold uppercase text-xs tracking-widest">
              <li><button onClick={() => scrollToSection("menu")} className="hover:text-white transition-colors">Menu</button></li>
              <li><button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("reviews")} className="hover:text-white transition-colors">Reviews</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6 text-[#FF6321]">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +995 501 002006</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 31 Shalva Nutsubidze St</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Open 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
          <p>© 2026 Strips Club Tbilisi. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
