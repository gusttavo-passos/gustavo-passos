import { FaHome, FaProjectDiagram, FaEnvelope, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

type PropsType = {
  toggleLanguage: () => void;
  language: "pt" | "en";
};

export function Navbar({ toggleLanguage, language }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-950 border-b-2 border-white transition-colors">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 w-full">
        {/* Nome colado à esquerda */}
        <h1 className="text-2xl font-bold text-white">{`Luis Gustavo`}</h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          <li>
            <a href="#home" className="flex items-center gap-1 hover:text-accent transition-colors">
              <FaHome /> {language === "pt" ? "Home" : "Home"}
            </a>
          </li>
          <li>
            <a href="#about-projects" className="flex items-center gap-1 hover:text-accent transition-colors">
              <FaProjectDiagram /> {language === "pt" ? "Projetos" : "Projects"}
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center gap-1 hover:text-accent transition-colors">
              <FaEnvelope /> {language === "pt" ? "Contato" : "Contact"}
            </a>
          </li>
        </ul>

        {/* Botões desktop colados à direita */}
        <div className="hidden md:flex gap-4 items-center">
          <a
            href="/cv.pdf"
            download
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
          >
            <FaDownload className="inline mr-2" />
            {language === "pt" ? "Baixar CV" : "Download CV"}
          </a>

          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition-colors"
          >
            {language.toUpperCase()}
          </button>
        </div>

        {/* Botão mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl relative z-50"
          aria-label="Menu"
        >
          <span className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90" : ""}`}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
      </div>

      {/* Menu mobile com animação suave */}
      <div
        className={`md:hidden bg-neutral-950 overflow-hidden transition-max-h duration-300 ease-in-out ${
          isOpen ? "max-h-96 p-4 flex flex-col gap-4" : "max-h-0 p-0"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 text-white hover:text-accent transition-colors" onClick={toggleMenu}>
          <FaHome /> {language === "pt" ? "Home" : "Home"}
        </a>
        <a href="#about-projects" className="flex items-center gap-2 text-white hover:text-accent transition-colors" onClick={toggleMenu}>
          <FaProjectDiagram /> {language === "pt" ? "Projetos" : "Projects"}
        </a>
        <a href="#contact" className="flex items-center gap-2 text-white hover:text-accent transition-colors" onClick={toggleMenu}>
          <FaEnvelope /> {language === "pt" ? "Contato" : "Contact"}
        </a>
        <a
          href="/cv.pdf"
          className="flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
        >
          <FaDownload /> {language === "pt" ? "Baixar CV" : "Download CV"}
        </a>
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition-colors"
        >
          {language.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}
