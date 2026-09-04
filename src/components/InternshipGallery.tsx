import Image from "next/image";
import { internshipGallery } from "@/lib/data";

export default function InternshipGallery() {
  return (
    <section className="py-24 px-6 bg-white" aria-label="Internship gallery">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Professional Experience in Action
        </h2>
        <p className="text-gray-600 mb-10">
          Highlights from my internships and field research.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipGallery.map((item, i) => (
            <figure
              key={i}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_-10px_rgba(251,191,36,0.2)] hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/40 transition-all duration-300 ease-in-out"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4 text-sm text-gray-600">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
