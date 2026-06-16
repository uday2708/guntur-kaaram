import { motion } from "framer-motion";

const FOODS = [
  { name: "Hyderabadi Biryani", tag: "Signature", img: "/images/food/biryani.jpg" },
  { name: "Guntur Chicken", tag: "Chef's Pick", img: "/images/food/guntur-chicken.jpg" },
  { name: "Andhra Meals", tag: "Heritage", img: "/images/food/andhra-meals.jpg" },
  { name: "Gongura Mutton", tag: "Signature", img: "/images/food/gongura-mutton.jpg" },
  { name: "Prawn Fry", tag: "Coastal", img: "/images/food/prawn-fry.jpg" },
  { name: "Paneer Andhra Style", tag: "Vegetarian", img: "/images/food/paneer-andhra.jpg" },
];

export function Hero() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-cream">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-30 flex items-center justify-between border-b border-brand-gold/15 bg-brand-dark/70 px-6 py-3 backdrop-blur-xl md:px-12"
      >
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Guntur Kaaram" className="h-10 w-10 object-contain" />
          <div className="font-display text-sm leading-tight tracking-[0.2em] md:text-base">
            <div className="bg-gradient-to-b from-brand-cream to-brand-gold bg-clip-text text-transparent">
              GUNTUR KAARAM
            </div>
            <div className="text-[10px] text-brand-cream/60">TELUGU KITCHEN</div>
          </div>
        </div>
        <div className="hidden gap-8 text-xs uppercase tracking-widest text-brand-cream/70 md:flex">
          <a href="#menu" className="hover:text-brand-gold">Menu</a>
          <a href="#story" className="hover:text-brand-gold">Our Story</a>
          <a href="#reserve" className="hover:text-brand-gold">Reservations</a>
        </div>
        <button className="rounded-full bg-brand-primary px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-cream shadow-lg shadow-brand-primary/30 transition hover:bg-brand-primary/90">
          Book Table
        </button>
      </motion.nav>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative overflow-hidden px-6 py-20 md:px-12 md:py-32"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(244,197,66,0.18), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(217,75,43,0.18), transparent 55%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-brand-gold"
            >
              Fine Telugu Dining
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl"
            >
              <span className="bg-gradient-to-b from-brand-cream via-brand-gold to-brand-primary bg-clip-text text-transparent">
                Heat of Guntur.
              </span>
              <br />
              <span className="text-brand-cream/90">Soul of Andhra.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 max-w-md text-base text-brand-cream/70"
            >
              An immersive culinary journey through the fiery spices, ancestral
              recipes, and warm hospitality of Telugu heritage.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className="rounded-full bg-brand-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-brand-cream shadow-xl shadow-brand-primary/40 transition hover:scale-105">
                Reserve a Table
              </button>
              <button className="rounded-full border border-brand-gold/50 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-brand-gold transition hover:bg-brand-gold/10">
                View Menu
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-3 gap-3"
          >
            {FOODS.map((f, i) => (
              <motion.div
                key={f.name}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`relative overflow-hidden rounded-2xl border border-brand-gold/20 ${
                  i === 0 ? "col-span-2 row-span-2 h-72" : "h-36"
                }`}
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
              >
                <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[9px] uppercase tracking-widest text-brand-gold">{f.tag}</span>
                  <p className="font-display text-sm leading-tight text-brand-cream">{f.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
