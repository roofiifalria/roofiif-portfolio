"use client";

import { useState, useEffect, useCallback } from "react";
import type { MouseEvent, KeyboardEvent } from "react";
import Image from "next/image";
import { hero } from "@/lib/data";

const profileImages = [
  "/images/profile-1.jpg",
  "/images/profile-2.jpeg",
  "/images/profile-3.jpeg",
  "/images/profile-4.png",
];

function useTypingEffect(words: string[], typingSpeed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex(charIndex + 1);
          }
        } else {
          setDisplay(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setCharIndex(0);
            setWordIndex((wordIndex + 1) % words.length);
          } else {
            setCharIndex(charIndex - 1);
          }
        }
      },
      deleting ? typingSpeed / 2 : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, typingSpeed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypingEffect(hero.roles);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const nextImageIndex = (currentImageIndex + 1) % profileImages.length;

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleImageClick = useCallback(() => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
      setIsFlipping(false);
    }, 350);
  }, [isFlipping]);

  const handleImageKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleImageClick();
      }
    },
    [handleImageClick]
  );

  return (
    <section
      className="relative overflow-x-hidden w-full bg-white"
      aria-label="Introduction"
      onMouseMove={handleMouseMove}
    >
      {/* Fluid decorative background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(251,191,36,0.15)_1px,transparent_1px)] bg-[length:40px_40px]" />

        {/* Animated gradient blobs */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-200/40 rounded-full blur-3xl animate-float [animation-delay:0s] will-change-transform" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-amber-200/30 rounded-full blur-3xl animate-float [animation-delay:4s] will-change-transform" />
        <div className="hidden sm:block absolute top-1/2 right-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-float [animation-delay:8s] will-change-transform" />

        {/* Mouse-follow gradient orb */}
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-yellow-200/30 to-amber-200/30 blur-2xl opacity-30 transition-all duration-700 ease-out will-change-transform"
          style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%, -50%)" }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-[20%] w-4 h-4 rounded-md bg-yellow-300/30 rotate-12 animate-drift-1 will-change-transform" />
        <div className="absolute top-2/3 left-[35%] w-6 h-6 rounded-full bg-amber-400/25 animate-drift-2 will-change-transform" />
        <div className="absolute bottom-1/4 right-[30%] w-5 h-5 border-2 border-orange-300/30 rotate-45 animate-drift-3 will-change-transform" />
        <div className="absolute top-1/3 right-[15%] w-8 h-8 rounded-full bg-yellow-400/20 animate-pulse will-change-transform" />
        <div className="hidden sm:block absolute bottom-1/3 left-[10%] w-12 h-12 rounded-2xl bg-amber-300/20 animate-drift-1 [animation-delay:2s] will-change-transform" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-screen py-20 lg:py-0">
          {/* Text content */}
          <div className="w-full lg:w-[55%]">
            <p className="text-lg md:text-xl font-bold text-gray-500 mb-2">Hi, I am</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {hero.name}
            </h1>

            <div className="h-8 text-base md:text-lg lg:text-2xl font-bold text-yellow-600 mt-4 mb-8">
              {typed}
              <span className="animate-blink ml-0.5 text-yellow-500">|</span>
            </div>

            <p className="max-w-xl text-gray-600 leading-relaxed">
              {hero.intro}
            </p>

            <div className="mt-8 flex flex-col w-full sm:w-auto sm:flex-row gap-4">
              <a
                href={hero.cta.projects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-md shadow-yellow-200/60 hover:bg-yellow-300 hover:scale-[1.02] transition-all"
              >
                View Projects
              </a>
              <a
                href={hero.cta.resume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-2xl hover:border-yellow-300 hover:bg-yellow-50 hover:scale-[1.02] transition-all"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={hero.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-500 hover:bg-yellow-100 hover:text-yellow-600 hover:scale-[1.05] transition-all"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={hero.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-500 hover:bg-yellow-100 hover:text-yellow-600 hover:scale-[1.05] transition-all"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href={hero.socials.email}
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-500 hover:bg-yellow-100 hover:text-yellow-600 hover:scale-[1.05] transition-all"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>

            {/* Geometric accents */}
            <div className="hidden sm:flex gap-3 mt-8" aria-hidden="true">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-lg" />
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-lg opacity-70" />
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-lg opacity-40" />
            </div>
          </div>

          {/* Profile photo */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
              {/* Rotated background shape (static, does not animate on click) */}
              <div
                className="absolute -inset-4 bg-yellow-200 rounded-3xl rotate-6 scale-95 lg:absolute lg:-inset-8 lg:bg-yellow-300 lg:rounded-[2.5rem] lg:rotate-12 lg:scale-100 transition-all duration-500 will-change-transform"
                aria-hidden="true"
              />

              {/* Floating 3D photo stack */}
              <div className="relative z-10 animate-float-photo will-change-transform">
                <div
                  className="relative aspect-[4/5] w-full cursor-pointer group [perspective:1000px] [transform-style:preserve-3d] transition-transform duration-300 hover:scale-[1.02]"
                  onClick={handleImageClick}
                  onKeyDown={handleImageKeyDown}
                  role="button"
                  tabIndex={0}
                  aria-label="Click to change photo"
                >
                  {/* Background layer: next photo in the stack */}
                  <div
                    className={`absolute inset-0 [backface-visibility:hidden] will-change-transform ${
                      isFlipping
                        ? "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [transform:translateY(0px)_translateX(0px)_rotate(0deg)_scale(1)_rotateY(0deg)_translateZ(0px)]"
                        : "transition-none [transform:translateY(-12px)_translateX(12px)_rotate(3deg)_scale(0.9)_rotateY(0deg)_translateZ(-50px)] sm:[transform:translateY(-24px)_translateX(24px)_rotate(6deg)_scale(0.9)_rotateY(0deg)_translateZ(-50px)]"
                    }`}
                  >
                    <Image
                      src={profileImages[nextImageIndex]}
                      alt=""
                      fill
                      aria-hidden="true"
                      sizes="(max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                      className="object-cover rounded-3xl border-4 border-yellow-200 shadow-lg"
                    />
                  </div>

                  {/* Foreground layer: current photo */}
                  <div
                    className={`absolute inset-0 [backface-visibility:hidden] will-change-transform ${
                      isFlipping
                        ? "transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] [transform:rotateY(180deg)_translateZ(-50px)] opacity-70"
                        : "transition-none [transform:rotateY(0deg)_translateZ(0px)] opacity-100"
                    }`}
                  >
                    <Image
                      src={profileImages[currentImageIndex]}
                      alt={`Photo of ${hero.name} (${currentImageIndex + 1} of ${profileImages.length})`}
                      fill
                      priority
                      sizes="(max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                      className="object-cover rounded-3xl border-4 border-yellow-400 ring-4 ring-white shadow-xl transition-shadow duration-300 group-hover:shadow-2xl"
                    />
                  </div>

                  {/* Camera hint icon (stays on top, never flips) */}
                  <div
                    className="absolute bottom-3 right-3 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md animate-pulse pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.174C3.05 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.8-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.174 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.822 1.316z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                  </div>

                  {/* Tooltip (desktop hover) */}
                  <div
                    className="hidden md:block absolute -top-9 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    aria-hidden="true"
                  >
                    Click to change photo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
