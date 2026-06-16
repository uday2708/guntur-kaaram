import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Intro } from "@/components/Intro";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guntur Kaaram — Telugu Kitchen | Fine Andhra Dining" },
      {
        name: "description",
        content:
          "Guntur Kaaram Telugu Kitchen — an immersive fine-dining journey through the fiery spices and ancestral recipes of Andhra cuisine.",
      },
      { property: "og:title", content: "Guntur Kaaram — Telugu Kitchen" },
      {
        property: "og:description",
        content: "Heat of Guntur. Soul of Andhra. Premium Telugu fine dining.",
      },
      { property: "og:image", content: "/images/food/biryani.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const visited = typeof window !== "undefined" && localStorage.getItem("gk_intro_seen");
    setShowIntro(!visited);
    setReady(true);
  }, []);

  const finish = () => {
    localStorage.setItem("gk_intro_seen", "1");
    setShowIntro(false);
  };

  if (!ready) return <div className="min-h-screen bg-brand-dark" />;

  return (
    <>
      <Hero />
      <AnimatePresence>{showIntro && <Intro onDone={finish} />}</AnimatePresence>
    </>
  );
}
