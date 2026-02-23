import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChatWidget from "../components/ChatWidget";
import Projects from "../components/Projects";

export default function Home() {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // If it's #chat or #projects, scroll to that section smoothly
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // No hash, ensure we're at the top
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <ChatWidget />
    </>
  );
}
