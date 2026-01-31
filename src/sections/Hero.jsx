import { useEffect, useRef, useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFileDownload,
  FaCheckCircle,
} from "react-icons/fa";
import { gsap } from "gsap";
import { SITE_DATA } from "../configs/data/site";

const Hero = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        duration: 1.2,
        x: -50,
        opacity: 0,
        ease: "power3.out",
      });
      gsap.from(".animate-text", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // Typing Effect Logic
  useEffect(() => {
    const current = SITE_DATA.heroPhrases[phraseIndex];
    const timer = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        );

        if (!isDeleting && text === current) {
          setTimeout(() => setIsDeleting(true), 2500);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % SITE_DATA.heroPhrases.length);
        }
      },
      isDeleting ? 30 : 60
    );
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center  bg-[#f8fafc] dark:bg-[#0f172a] py-20 px-6"
    >
      {/* Subtle Background Accent */}
      {/* Subtitle Background Accent - Optimized for Max Right Positioning */}
      <div
        className="
  absolute top-0 right-0
  -translate-y-1/4
  w-[600px] h-[600px]
  bg-emerald-100/40 dark:bg-emerald-900/20
  rounded-full blur-[120px]
  pointer-events-none
"
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left: Image with Professional Border */}
          <div ref={imgRef} className="relative group">
            <div className="absolute -inset-4 border border-emerald-200 dark:border-emerald-800 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <img
              src={SITE_DATA.avatar}
              alt={SITE_DATA.name}
              className="relative w-72 h-[400px] object-cover rounded-[2rem] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border-l-4 border-emerald-500">
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                Status
              </p>
              <p className="text-emerald-600 dark:text-emerald-400 font-bold">
                B2 Zertifiziert
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="flex-1 text-center lg:text-left">
            <div className="animate-text flex items-center justify-center lg:justify-start gap-2 mb-4 text-emerald-600 dark:text-emerald-400 font-medium tracking-wide">
              <span className="w-8 h-[2px] bg-emerald-500"></span>
              {SITE_DATA.location}
            </div>

            <h1 className="animate-text text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {SITE_DATA.name}
            </h1>

            <h2 className="animate-text text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-6 font-light">
              {SITE_DATA.title}
            </h2>

            {/* Dynamic Slogan Area */}
            <div className="animate-text h-16 mb-8 flex items-center justify-center lg:justify-start">
              <p className="text-xl text-emerald-600/80 dark:text-emerald-400/80 font-serif italic border-l-2 border-emerald-500 pl-4">
                {text}
                <span className="inline-block w-1 h-6 bg-emerald-500 ml-1 animate-pulse"></span>
              </p>
            </div>

            {/* Credential Pills */}
            <div className="animate-text flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              {SITE_DATA.credentials.map((cred, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-300 shadow-sm"
                >
                  <FaCheckCircle className="text-emerald-500" /> {cred}
                </span>
              ))}
            </div>

            {/* Professional Actions */}
            <div className="animate-text flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href={SITE_DATA.cvUrl}
                className="group flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-full transition-all duration-300 shadow-lg shadow-emerald-900/20"
              >
                <FaFileDownload className="group-hover:bounce" />
                <span className="font-semibold">Lebenslauf PDF</span>
              </a>

              <div className="flex items-center gap-4 px-6">
                <a
                  href={`mailto:${SITE_DATA.social.email}`}
                  className="p-3 text-slate-500 hover:text-emerald-600 transition-colors"
                >
                  <FaEnvelope size={24} />
                </a>
                <a
                  href={SITE_DATA.social.linkedin}
                  className="p-3 text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={SITE_DATA.social.whatsapp}
                  className="p-3 text-slate-500 hover:text-green-500 transition-colors"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
