import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const FOODS = [
  { name: "Hyderabadi Biryani", desc: "Fragrant basmati, slow-dum cooked", tag: "Signature", img: "/images/food/biryani.jpg" },
  { name: "Guntur Chicken", desc: "Fiery red chili masterpiece", tag: "Chef's Pick", img: "/images/food/guntur-chicken.jpg" },
  { name: "Andhra Meals", desc: "Traditional banana leaf thali", tag: "Heritage", img: "/images/food/andhra-meals.jpg" },
  { name: "Gongura Mutton", desc: "Tangy sorrel with tender lamb", tag: "Signature", img: "/images/food/gongura-mutton.jpg" },
  { name: "Prawn Fry", desc: "Coastal Andhra crisp & spice", tag: "Coastal", img: "/images/food/prawn-fry.jpg" },
  { name: "Paneer Andhra Style", desc: "Velvet paneer in fiery gravy", tag: "Vegetarian", img: "/images/food/paneer-andhra.jpg" },
];

const TITLE_LINE_1 = "GUNTUR KAARAM";
const TITLE_LINE_2 = "TELUGU KITCHEN";

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 3,
        duration: 6 + Math.random() * 6,
      })),
    [],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, #F4C542 0%, rgba(217,75,43,0.4) 60%, transparent 100%)",
            boxShadow: "0 0 12px #F4C542",
          }}
          animate={{ y: [-20, -120], opacity: [0, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"logo" | "food" | "brand" | "transition">("logo");
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("food"), 1400);
    const t2 = setTimeout(() => setPhase("brand"), 3400);
    const t3 = setTimeout(() => setPhase("transition"), 5400);
    const t4 = setTimeout(() => onDone(), 6400);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  const skip = () => onDone();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #1A1A1A 0%, #0F0F0F 60%, #000 100%)",
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Particles />

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(244,197,66,0.35) 0%, rgba(217,75,43,0.15) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: phase === "transition" ? 1.6 : phase === "brand" ? 1.2 : 1,
          opacity: phase === "transition" ? 0.9 : 0.7,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Food cards orbiting */}
      <AnimatePresence>
        {(phase === "food" || phase === "brand" || phase === "transition") && (
          <div className="pointer-events-auto absolute inset-0 hidden md:block">
            {FOODS.map((food, i) => {
              const angle = (i / FOODS.length) * Math.PI * 2 - Math.PI / 2;
              const baseRadius = phase === "transition" ? 520 : 320;
              const radius = hovered === i ? baseRadius + 40 : baseRadius;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isHovered = hovered === i;
              const isDim = hovered !== null && hovered !== i;
              return (
                <motion.div
                  key={food.name}
                  className="absolute left-1/2 top-1/2"
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: isDim ? 0.4 : 1,
                    scale: isHovered ? 1.15 : isDim ? 0.85 : 1,
                    x: x - (isHovered ? 130 : 90),
                    y: y - (isHovered ? 90 : 60),
                  }}
                  transition={{
                    delay: phase === "food" ? 0.15 * i : 0,
                    type: "spring",
                    stiffness: 80,
                    damping: 16,
                  }}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-2xl border border-brand-gold/30 backdrop-blur-md"
                    style={{
                      width: isHovered ? 260 : 180,
                      height: isHovered ? 180 : 120,
                      background: "rgba(26,26,26,0.55)",
                      boxShadow:
                        "0 10px 40px rgba(0,0,0,0.6), 0 0 30px rgba(244,197,66,0.15)",
                    }}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={food.img}
                      alt={food.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 flex flex-col justify-end p-3 text-brand-cream"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <span className="mb-1 inline-block w-fit rounded-full border border-brand-gold/50 bg-brand-gold/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-brand-gold">
                            {food.tag}
                          </span>
                          <h3 className="font-display text-base leading-tight">
                            {food.name}
                          </h3>
                          <p className="text-[11px] text-brand-cream/70">
                            {food.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Mobile stacked food preview */}
      {(phase === "food" || phase === "brand") && (
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 md:hidden">
          {FOODS.slice(0, 6).map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="h-12 w-12 overflow-hidden rounded-lg border border-brand-gold/30"
              style={{ boxShadow: "0 0 15px rgba(244,197,66,0.2)" }}
            >
              <img src={food.img} alt={food.name} className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Logo + Brand */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src="/logo.png"
          alt="Guntur Kaaram Telugu Kitchen"
          className="h-44 w-44 object-contain drop-shadow-[0_0_40px_rgba(244,197,66,0.6)] md:h-56 md:w-56"
          initial={{ scale: 0, rotate: -20, opacity: 0 }}
          animate={{
            scale: phase === "transition" ? 1.15 : 1,
            rotate: 0,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 90, damping: 14, duration: 1.2 }}
        />

        <AnimatePresence>
          {(phase === "brand" || phase === "transition") && (
            <motion.div
              className="mt-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {[TITLE_LINE_1, TITLE_LINE_2].map((line, li) => (
                <div key={line} className="flex">
                  {line.split("").map((ch, i) => (
                    <motion.span
                      key={`${li}-${i}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * i + li * 0.3, duration: 0.4 }}
                      className="font-display text-2xl md:text-4xl font-bold tracking-[0.2em]"
                      style={{
                        background:
                          "linear-gradient(180deg, #FFF5D6 0%, #F4C542 50%, #D94B2B 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {ch === " " ? "\u00A0" : ch}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={skip}
        className="absolute bottom-6 right-6 z-20 rounded-full border border-brand-gold/40 bg-black/40 px-4 py-2 text-xs uppercase tracking-widest text-brand-cream/80 backdrop-blur transition hover:border-brand-gold hover:text-brand-gold"
      >
        Skip Intro
      </button>
    </motion.div>
  );
}
