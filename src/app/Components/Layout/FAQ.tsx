"use client"
import { FaChevronRight } from "react-icons/fa";;

type FAQ = {
  title: string;
  description: string;
};

export default function FAQ() {
  const faqs: FAQ[] = [
    {
      title: "the quick fox jumps over the lazy dog",
      description:
        "Met minim Mollie non desert Alamo est sit aliqua dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "the quick fox jumps over the lazy dog",
      description:
        "Met minim Mollie non desert Alamo est sit aliqua dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "the quick fox jumps over the lazy dog",
      description:
        "Met minim Mollie non desert Alamo est sit aliqua dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "the quick fox jumps over the lazy dog",
      description:
        "Met minim Mollie non desert Alamo est sit aliqua dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "the quick fox jumps over the lazy dog",
      description:
        "Met minim Mollie non desert Alamo est sit aliqua dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "the quick fox jumps over the lazy dog",
      description:
        "Met minim Mollie non desert Alamo est sit aliqua dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold mb-2">Pricing FAQs</h1>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
      </header>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <FaChevronRight className="text-blue-600 mt-1" size={30}/>
              <div>
                <h3 className="text-lg font-bold mb-2">{faq.title}</h3>
                <p className="text-gray-600">{faq.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 py-8">
        <p className="text-gray-700 font-semibold text-2xl">
          Haven&apos;t got your answer?
          Contact our support

        </p>
      </footer>
    </div>
  );
}
