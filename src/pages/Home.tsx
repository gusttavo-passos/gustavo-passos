import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa";
import { HiOutlineArrowDown } from "react-icons/hi";
import { scroller } from "react-scroll";

type PropsType = {
  language: "pt" | "en";
};

export function Home({ language }: PropsType) {
  const [showScrollButton, setShowScrollButton] = useState(true);
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollToSkills = () => {
    scroller.scrollTo("skills", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowScrollButton(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={homeRef}
      className="flex flex-col md:flex-row items-center justify-between py-16 px-4 sm:px-8 max-w-[1500px] mx-auto gap-8 md:gap-20 relative w-full overflow-x-hidden"
    >
      {/* Lado esquerdo */}
      <div className="flex-auto text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug">
          {language === "pt" ? "Olá, Me Chamo" : "Hi, My Name is"}{" "}
          <span className="text-blue-600">Gustavo Passos</span>
          <br />
          <span>
            {language === "pt" ? "Desenvolvedor Full Stack," : "Full Stack Developer,"}
          </span>
          <br />
          <span>
            {language === "pt" ? "Especializando-se em Back-End" : "Specializing in Back-End"}
          </span>
        </h2>

        <h3 className="mt-4 sm:mt-6 font-semibold text-xl sm:text-2xl md:text-3xl text-gray-300">
          {language === "pt"
            ? "Criando soluções eficientes e escaláveis para a web"
            : "Creating efficient and scalable web solutions"}
        </h3>

        {/* Botões principais */}
        <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
          <a
            href="/cv.pdf"
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-lg"
          >
            <FaDownload className="text-lg sm:text-xl" />{" "}
            {language === "pt" ? "Baixar CV" : "Download CV"}
          </a>
          <a
            href="https://wa.me/5521967862010"
            target="_blank"
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-lg"
          >
            <FaWhatsapp className="text-lg sm:text-xl" />{" "}
            {language === "pt" ? "Contate-me" : "Contact Me"}
          </a>
        </div>

        {/* Redes sociais */}
        <div className="mt-6 sm:mt-10">
          <span className="block text-gray-400 mb-2 sm:mb-4 text-sm sm:text-lg">
            {language === "pt" ? "Redes Sociais:" : "Social Media:"}
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-5">
            <a
              href="https://github.com/gusttavo-passos"
              target="_blank"
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm sm:text-lg"
            >
              <FaGithub className="text-lg sm:text-xl" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luis-gustavo-santos-passos/"
              target="_blank"
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm sm:text-lg"
            >
              <FaLinkedin className="text-lg sm:text-xl" /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/gusttavo_passos011/"
              target="_blank"
              className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm sm:text-lg"
            >
              <FaInstagram className="text-lg sm:text-xl" /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Lado direito - Foto */}
      <div className="flex-1 flex justify-center mt-6 md:mt-0">
        <div className="w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 flex-shrink-0">
          <img
            src="/me.jpg"
            alt="Luis Gustavo"
            className="w-full h-full object-cover rounded-full border-4 shadow-xl"
          />
        </div>
      </div>

      {/* Botão de rolar para Skills */}
      {showScrollButton && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToSkills}
            className="flex flex-col items-center text-white animate-bounce"
          >
            <HiOutlineArrowDown className="text-4xl sm:text-5xl mb-1 sm:mb-2" />
            <span className="text-xs sm:text-base">
              {language === "pt" ? "Ver Mais +" : "See More +"}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
