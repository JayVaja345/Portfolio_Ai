import { useEffect, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Sparkles,
  Code,
  Zap,
} from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building Intelligent Web Experiences";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(55 65 81 / 0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 animate-float">
          <Code className="w-8 h-8 text-blue-500/30" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float delay-1000">
          <Zap className="w-8 h-8 text-yellow-500/30" />
        </div>
        <div className="absolute top-40 left-40 animate-float delay-2000">
          <Sparkles className="w-8 h-8 text-purple-500/30" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Main Heading with Typing Animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Description with Icons */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed">
            Full Stack Developer specializing in{" "}
            <span className="text-white font-semibold relative inline-block group">
              MERN stack
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </span>{" "}
            and{" "}
            <span className="text-white font-semibold relative inline-block group">
              Python backend
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </span>{" "}
            development. I craft scalable solutions with clean, efficient code.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">1+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">8+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500">5+</div>
              <div className="text-sm text-gray-500">Technologies</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#chat"
            className="group px-8 py-4 border border-gray-600 rounded-lg hover:bg-gray-800/50 transition-all transform hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center justify-center gap-2">
              Chat with AI
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/JayVaja345"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all transform hover:scale-110 group"
          >
            <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/jayvaja"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all transform hover:scale-110 group"
          >
            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a
            href="mailto:vajajay325@gmail.com"
            className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all transform hover:scale-110 group"
          >
            <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors group"
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  );
}
