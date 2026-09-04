import Image from "next/image";
import { experience } from "@/lib/data";

const companyLogos: Record<string, string> = {
  "ADS Digital Partner": "/images/logo-ads.png",
  "Petrokimia Network Consulting Project": "/images/logo-petrokimia.jpeg",
  "My ITS Learning": "/images/logo-its.png",
  "HMTC ITS": "/images/logo-hmtc.png",
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 bg-white" aria-label="Work experience">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
        <div className="w-16 h-1.5 bg-yellow-400 rounded-full mb-10" />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-[26px] left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200"
            aria-hidden="true"
          />

          <div className="flex md:flex-nowrap gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scroll-smooth">
            {experience.map((item, i) => {
              const logo = companyLogos[item.company];
              return (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-72 md:w-auto md:flex-1 snap-start"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex justify-center mb-4 relative z-10">
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border-4 border-white shadow-md shadow-yellow-200/60" />
                  </div>

                  <div className="h-full flex flex-col bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40 transition-all duration-300 ease-in-out">
                    {/* Company logo */}
                    <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden mb-4 p-1.5">
                      {logo ? (
                        <Image
                          src={logo}
                          alt={`${item.company} logo`}
                          width={72}
                          height={72}
                          className="object-contain w-full h-full"
                        />
                      ) : (
                        <span className="text-gray-400 text-sm font-semibold">
                          {item.company.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-semibold text-amber-600 mb-1 uppercase tracking-wide">
                      {item.period}
                    </p>
                    <h3 className="text-gray-900 font-semibold">{item.role}</h3>
                    <p className="text-gray-500 text-sm mb-2">{item.company}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow indicator between cards (desktop) */}
                  {i < experience.length - 1 && (
                    <div
                      className="hidden md:flex absolute top-2.5 -right-5 z-10 items-center justify-center text-yellow-400"
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
