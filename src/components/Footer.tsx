import { hero } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 px-6 bg-white">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {hero.name}</p>
        <div className="flex gap-5">
          <a
            href={hero.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={hero.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href={hero.socials.email}
            className="font-medium hover:text-blue-600 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
