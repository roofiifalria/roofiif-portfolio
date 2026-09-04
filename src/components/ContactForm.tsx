import { contact } from "@/lib/data";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50" aria-label="Contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {contact.heading}
        </h2>
        <p className="text-gray-600 mb-2">{contact.subtext}</p>
        <p className="text-gray-500 text-sm mb-10">{contact.responseTime}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
          <a
            href={`mailto:${contact.email}`}
            className="text-amber-600 font-medium hover:underline"
          >
            {contact.email}
          </a>
          <span className="text-gray-500">{contact.phone}</span>
        </div>
      </div>
    </section>
  );
}
