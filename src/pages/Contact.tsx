// Contact.tsx
import { FaEnvelope, FaRegCopy } from "react-icons/fa";
import { useState } from "react";

type ContactProps = {
  language: "pt" | "en";
};

export function Contact({ language }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const email = "spluisgustavo9@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Mensagem some após 2s
  };

  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        {language === "pt" ? "Contato" : "Contact"}
      </h2>

      <div className="flex flex-col items-center gap-4 p-8 rounded-3xl shadow-xl max-w-md mx-auto">
        <div className="flex items-center gap-3 text-white text-lg md:text-xl">
          <FaEnvelope className="text-blue-500 text-2xl" />
          <a
            href={`mailto:${email}`}
            className="hover:underline"
          >
            {email}
          </a>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-colors"
        >
          <FaRegCopy />
          {copied
            ? language === "pt" 
              ? "Copiado!" 
              : "Copied!"
            : language === "pt" 
              ? "Copiar e-mail" 
              : "Copy e-mail"}
        </button>
      </div>
    </section>
  );
}
