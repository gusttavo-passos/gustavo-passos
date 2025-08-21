import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PropsType = {
  language: "pt" | "en";
};

// Dados dos projetos
const projects = [
  {
    name: "CapyCom Links",
    description: {
      pt: "Encurtador de links com front-end e back-end, utilizando Supabase como banco de dados. A API foi desenvolvida com NestJS e Zod para validação de dados, e o front-end foi criado com Vite e CSS3, seguindo os princípios do SOLID em todas as camadas.",
      en: "URL shortener with front-end and back-end using Supabase as database. The API was developed with NestJS and Zod for data validation, and the front-end was created with Vite and CSS3, following SOLID principles in all layers."
    },
    techs: ["React", "NestJS", "Zod", "PostgreSQL", "CSS3", "Prisma"],
    liveUrl: "https://capycomlinks.vercel.app/",
    codeUrl: "https://github.com/gusttavo-passos/EncurtadorDeLiksSite"
  },
  {
    name: "CollabFlow",
    description: {
      pt: "Sistema de gerenciamento do fluxo de atividades de colaboradores em uma loja, permitindo controle de faltas, tráfego e caixas, com dashboard inteligente para melhor organização.",
      en: "Management system for tracking employees' activity flow in a store, allowing control of absences, traffic, and cash, with an intelligent dashboard for better organization."
    },
    techs: ["Next.js", "Express", "Prisma", "PostgreSQL", "JWT"],
    liveUrl: "https://colab-flow.vercel.app/",
    codeUrl: "https://github.com/gusttavo-passos"
  },
  {
    name: "PicPay Simplificado API",
    description: {
      pt: "API em .NET para estudo de desenvolvimento de APIs REST, simulando transações financeiras. O projeto está em desenvolvimento e terá autenticação JWT, testes e deploy na web.",
      en: ".NET API for learning REST API development, simulating financial transactions. The project is under development and will include JWT authentication, tests, and web deployment."
    },
    techs: ["C#", ".NET", "Entity Framework", "SQLite", "Swagger"],
    liveUrl: "https://github.com/gusttavo-passos/PicPaySimplificado",
    codeUrl: "https://github.com/gusttavo-passos/PicPaySimplificado"
  },
  {
    name: "Capycom Company Site",
    description: {
      pt: "Projeto de site desenvolvido em squad, ainda não publicado, mas serve como prática para front-end com React, Vite, CSS3 e TypeScript.",
      en: "Company website project developed in a squad, not yet published. It serves as practice for front-end with React, Vite, CSS3, and TypeScript."
    },
    techs: ["React", "Vite", "CSS3", "TypeScript"],
    liveUrl: "https://capycom.vercel.app/",
    codeUrl: "https://github.com/gusttavo-passos"
  }
];

export function AboutAndProjects({ language }: PropsType) {
  const [current, setCurrent] = useState(0);

  const prevProject = () => setCurrent(prev => prev === 0 ? projects.length - 1 : prev - 1);
  const nextProject = () => setCurrent(prev => prev === projects.length - 1 ? 0 : prev + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev === projects.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about-projects" className="py-20 px-6 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12">
      {/* Sobre Mim */}
      <div className="flex-1 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {language === "pt" ? "Sobre Mim" : "About Me"}
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg">
        {language === "pt"
  ? "Sou um desenvolvedor Full Stack com foco em back-end, estudando programação e em busca da minha primeira oportunidade profissional. Já possuo experiência prática e estou sempre aprendendo novas tecnologias para crescer e entregar soluções de qualidade."
  : "I am a Full Stack Developer focused on back-end, currently studying programming and seeking my first professional opportunity. I already have practical experience and am constantly learning new technologies to grow and deliver high-quality solutions."}

        </p>
      </div>

      {/* Carrossel Animado */}
      <div className="flex-1 relative max-w-md overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col justify-between min-h-[36rem]"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                <p className="text-gray-300 mt-2">{project.description[language]}</p>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <a 
                    href={project.liveUrl} target="_blank" 
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition-colors"
                  >
                    <FaExternalLinkAlt /> {language === "pt" ? "Ver Mais" : "See More"}
                  </a>
                  <a 
                    href={project.codeUrl} target="_blank" 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub /> {language === "pt" ? "Ver Código" : "See Code"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de Navegação */}
        <button 
          onClick={prevProject} 
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button 
          onClick={nextProject} 
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}