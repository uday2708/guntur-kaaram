import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Star } from "lucide-react";

const DISHES = [
  { name: "Guntur Chicken", desc: "Fiery red chili curry, our signature heat", price: "₹420", img: "/images/food/guntur-chicken.jpg" },
  { name: "Hyderabadi Biryani", desc: "Fragrant basmati, slow-dum cooked with saffron", price: "₹480", img: "/images/food/biryani.jpg" },
  { name: "Andhra Meals", desc: "Banana leaf thali with traditional curries", price: "₹350", img: "/images/food/andhra-meals.jpg" },
  { name: "Gongura Mutton", desc: "Tangy sorrel leaves with tender lamb", price: "₹520", img: "/images/food/gongura-mutton.jpg" },
  { name: "Prawn Fry", desc: "Coastal Andhra crisp prawns, curry leaves", price: "₹460", img: "/images/food/prawn-fry.jpg" },
  { name: "Paneer Andhra Style", desc: "Velvet paneer in fiery red gravy", price: "₹320", img: "/images/food/paneer-andhra.jpg" },
];

const GALLERY = [
  { src: "/images/interior/dining.jpg", alt: "Dining hall with chandeliers", span: "row-span-2" },
  { src: "/images/interior/booth.jpg", alt: "Private booth seating", span: "" },
  { src: "/images/interior/decor.jpg", alt: "Carved wooden décor", span: "row-span-2" },
  { src: "/images/interior/family.jpg", alt: "Family-style dining", span: "" },
  { src: "/images/interior/lighting.jpg", alt: "Brass pendant lighting", span: "" },
  { src: "/images/interior/hero.jpg", alt: "Restaurant ambience", span: "col-span-2" },
];

const FEATURES = [
  { icon: "✦", title: "Authentic Telugu Recipes", desc: "Heirloom recipes from Andhra & Telangana" },
  { icon: "✦", title: "Fresh Ingredients", desc: "Locally sourced spices & produce daily" },
  { icon: "✦", title: "Family Friendly", desc: "Warm, welcoming dining for all" },
  { icon: "✦", title: "Hygienic Kitchen", desc: "FSSAI certified, spotless standards" },
  { icon: "✦", title: "Fast Service", desc: "Trained staff, attentive timing" },
  { icon: "✦", title: "Premium Ambience", desc: "Cinematic luxury dining atmosphere" },
];

const TESTIMONIALS = [
  { stars: 5, quote: "Best Telugu food in town. The flavors are truly authentic.", author: "Ramya K." },
  { stars: 5, quote: "Beautiful ambience and excellent service.", author: "Arjun S." },
  { stars: 5, quote: "Perfect place for family dinners and celebrations.", author: "Priya & Family" },
];

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return scrolled;
}

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionHeading({ overline, title }: { overline: string; title: string }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="mb-12 text-center"
    >
      <span className="inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-brand-gold">
        {overline}
      </span>
      <h2 className="mt-4 font-display text-4xl md:text-5xl">
        <span className="bg-gradient-to-b from-brand-cream via-brand-gold to-brand-primary bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
    </motion.div>
  );
}

export function Hero() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-cream">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-brand-dark/80 backdrop-blur-xl border-b border-brand-gold/15 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:px-10">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <img src="/logo.png" alt="Guntur Kaaram" className="h-11 w-11 shrink-0 object-contain drop-shadow-[0_0_15px_rgba(244,197,66,0.5)]" />
            <div className="min-w-0 font-display leading-tight tracking-[0.18em]">
              <div className="truncate bg-gradient-to-b from-brand-cream to-brand-gold bg-clip-text text-sm text-transparent md:text-base">
                GUNTUR KAARAM
              </div>
              <div className="text-[9px] text-brand-cream/60 md:text-[10px]">TELUGU KITCHEN</div>
            </div>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-xs uppercase tracking-[0.25em] text-brand-cream/75 transition hover:text-brand-gold">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-brand-primary px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90">
              Book Table
            </a>
          </div>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-gold/30 text-brand-gold lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-brand-gold/15 bg-brand-dark/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm uppercase tracking-[0.2em] text-brand-cream/80 transition hover:bg-brand-gold/10 hover:text-brand-gold"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src="/images/interior/hero.jpg"
          alt="Restaurant interior"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/60 to-brand-dark" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(244,197,66,0.15), transparent 60%)" }} />

        {/* Floating spice particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: 3 + (i % 4),
              height: 3 + (i % 4),
              background: "radial-gradient(circle, #F4C542, transparent)",
              boxShadow: "0 0 10px #F4C542",
            }}
            animate={{ y: [-10, -80], opacity: [0, 0.8, 0] }}
            transition={{ duration: 6 + (i % 5), delay: (i % 6) * 0.5, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-[11px] uppercase tracking-[0.4em] text-brand-gold"
          >
            Fine Telugu Dining · Est. 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl md:text-7xl"
          >
            <span className="bg-gradient-to-b from-brand-cream via-brand-gold to-brand-primary bg-clip-text text-transparent">
              Authentic Telugu Flavors,
            </span>
            <br />
            <span className="text-brand-cream/95">Served With Tradition</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base text-brand-cream/75 md:text-lg"
          >
            Experience the rich taste of Andhra and Telangana cuisine in a warm and elegant atmosphere.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a href="#menu" className="rounded-full bg-brand-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-cream shadow-xl shadow-brand-primary/40 transition hover:scale-105">
              View Menu
            </a>
            <a href="#contact" className="rounded-full border border-brand-gold/50 bg-brand-dark/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold backdrop-blur transition hover:bg-brand-gold/10">
              Reserve Table
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-brand-cream/50"
        >
          Scroll
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl border border-brand-gold/30" />
            <img
              src="/images/interior/decor.jpg"
              alt="Carved Telugu décor inside the restaurant"
              loading="lazy"
              className="relative z-10 h-[480px] w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 z-20 hidden rounded-2xl border border-brand-gold/40 bg-brand-surface/90 p-5 backdrop-blur md:block">
              <div className="font-display text-3xl text-brand-gold">15+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-brand-cream/70">Years of Heritage</div>
            </div>
          </motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <span className="inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-brand-gold">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              <span className="bg-gradient-to-b from-brand-cream to-brand-gold bg-clip-text text-transparent">
                The Soul of Andhra,
              </span>
              <br />
              On Every Plate
            </h2>
            <p className="mt-6 text-brand-cream/75">
              At Guntur Kaaram Telugu Kitchen, every dish is prepared with authentic ingredients,
              traditional recipes, and a passion for Telugu cuisine. From spicy Andhra specialties
              to family-style meals, we bring the taste of home to every table.
            </p>
            <p className="mt-4 text-brand-cream/65">
              Our chefs hail from the heart of Guntur, carrying forward generations of culinary wisdom —
              hand-pounded spices, slow-cooked gravies, and the unmistakable kick of the Guntur chili.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "50+", l: "Signature Dishes" },
                { n: "10K+", l: "Happy Guests" },
                { n: "4.9", l: "Avg. Rating" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-brand-gold/20 bg-brand-surface/50 p-4 text-center backdrop-blur">
                  <div className="font-display text-2xl text-brand-gold">{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-brand-cream/60">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative bg-brand-surface/40 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading overline="Featured Dishes" title="Our Signature Plates" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DISHES.map((d, i) => (
              <motion.article
                key={d.name}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-surface/70 backdrop-blur"
                style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/30 to-transparent" />
                  <div className="absolute top-3 right-3 rounded-full border border-brand-gold/40 bg-brand-dark/70 px-3 py-1 text-xs font-semibold text-brand-gold backdrop-blur">
                    {d.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-brand-cream">{d.name}</h3>
                  <p className="mt-2 text-sm text-brand-cream/65">{d.desc}</p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-brand-gold/40 via-brand-gold/10 to-transparent" />
                  <button className="mt-4 text-[11px] uppercase tracking-[0.25em] text-brand-gold transition hover:text-brand-primary">
                    Add to Order →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading overline="Ambience" title="A Glimpse Inside" />
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALLERY.map((g, i) => (
              <motion.div
                key={g.src}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl border border-brand-gold/20 ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-brand-cream opacity-0 transition group-hover:opacity-100">
                  {g.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative bg-brand-surface/40 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading overline="Why Choose Us" title="The Guntur Kaaram Promise" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-dark/60 p-7 backdrop-blur transition hover:border-brand-gold/60"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ background: "radial-gradient(circle at top, rgba(244,197,66,0.15), transparent 70%)" }} />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-xl text-brand-gold">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 font-display text-lg text-brand-cream">{f.title}</h3>
                  <p className="mt-2 text-sm text-brand-cream/65">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading overline="Guests Say" title="Stories From Our Tables" />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-brand-gold/20 bg-brand-surface/70 p-7 backdrop-blur"
              >
                <div className="flex gap-1 text-brand-gold">
                  {Array.from({ length: t.stars }).map((_, k) => (
                    <Star key={k} size={16} fill="#F4C542" stroke="#F4C542" />
                  ))}
                </div>
                <p className="mt-4 font-display text-lg leading-relaxed text-brand-cream/90">
                  "{t.quote}"
                </p>
                <div className="mt-6 text-xs uppercase tracking-[0.25em] text-brand-gold">— {t.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-brand-surface/40 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading overline="Visit Us" title="Reservations & Contact" />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              {[
                { Icon: MapPin, label: "Address", value: "Guntur Kaaram Telugu Kitchen, MG Road, Hyderabad" },
                { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { Icon: Mail, label: "Email", value: "info@gunturkaaram.com" },
                { Icon: Clock, label: "Opening Hours", value: "11:00 AM – 11:00 PM · Open Daily" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-brand-gold/20 bg-brand-dark/50 p-5 backdrop-blur">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">{label}</div>
                    <div className="mt-1 text-brand-cream/90">{value}</div>
                  </div>
                </div>
              ))}
              <a href="#" className="inline-block rounded-full bg-brand-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-brand-cream shadow-xl shadow-brand-primary/40 transition hover:scale-105">
                Reserve a Table
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-brand-gold/20">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1!2d78.4867!3d17.385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
                className="h-full min-h-[400px] w-full grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-brand-gold/15 bg-brand-dark px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Guntur Kaaram" className="h-12 w-12 object-contain" />
              <div className="font-display tracking-[0.18em]">
                <div className="bg-gradient-to-b from-brand-cream to-brand-gold bg-clip-text text-transparent">
                  GUNTUR KAARAM
                </div>
                <div className="text-[10px] text-brand-cream/60">TELUGU KITCHEN</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-brand-cream/65">
              A premium Telugu fine-dining experience celebrating the spice, soul, and heritage of Andhra cuisine.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-brand-gold/30 text-brand-gold transition hover:bg-brand-gold/10">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-brand-cream/70">
              {NAV.map((n) => (
                <li key={n.label}><a href={n.href} className="hover:text-brand-gold">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-brand-cream/70">
              <li>MG Road, Hyderabad</li>
              <li>+91 98765 43210</li>
              <li>info@gunturkaaram.com</li>
              <li>11:00 AM – 11:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-brand-gold/10 pt-6 text-center text-xs text-brand-cream/50">
          © 2026 Guntur Kaaram Telugu Kitchen. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
