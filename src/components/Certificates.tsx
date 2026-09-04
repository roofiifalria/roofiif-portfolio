"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected, close]);

  return (
    <section id="certificates" className="py-24 px-6 bg-gray-50" aria-label="Certificates">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Certificates</h2>
        <div className="w-16 h-1.5 bg-yellow-400 rounded-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {certificates.map((cert, i) => (
            <button
              key={cert.image}
              type="button"
              onClick={() => setSelected(i)}
              aria-label={`Open certificate ${i + 1}`}
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-200/30 transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-gray-50 p-3">
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-100 bg-white">
                  <Image
                    src={cert.image}
                    alt={`Certificate ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate ${selected + 1}`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-[90vw] max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={certificates[selected].image}
              alt={`Certificate ${selected + 1}`}
              width={1200}
              height={900}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
