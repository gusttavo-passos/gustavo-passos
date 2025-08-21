import { FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";

type PropsType = {
  language: "pt" | "en";
};

export function Education({ language }: PropsType) {
  return (
    <section id="education" className="py-24 px-6 max-w-[1400px] mx-auto mt-32">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        {language === "pt" ? "Educação & Certificações" : "Education & Certifications"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Educação / Education */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[24rem] flex flex-col">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <FaGraduationCap className="text-blue-500 text-2xl md:text-3xl" /> 
            {language === "pt" ? "Educação" : "Education"}
          </h3>
          <ul className="text-gray-300 space-y-6 text-lg md:text-xl">
            <li className="flex items-center gap-4">
              <span className="text-blue-500 text-2xl md:text-3xl">•</span>
              <span className="flex flex-col">
                <span>
                  {language === "pt" 
                    ? "Bacharel em Engenharia de Software - " 
                    : "Bachelor in Software Engineering - "}
                  <span className="text-blue-500 font-semibold">Anhanguera</span>
                </span>
                <span className="mt-1 flex items-center gap-2 text-gray-400 text-sm md:text-base">
                  <FaRegCalendarAlt /> 2024-2027
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* Certificações / Certifications */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[24rem] flex flex-col">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
            <FaGraduationCap className="text-blue-500 text-2xl md:text-3xl" /> 
            {language === "pt" ? "Certificações" : "Certifications"}
          </h3>
          <ul className="text-gray-300 space-y-6 text-lg md:text-xl">
            <li className="flex items-center gap-4">
              <span className="text-blue-500 text-2xl md:text-3xl">•</span>
              <span>{language === "pt" ? ".NET, ASPT.NET - DIO" : ".NET, ASPT.NET - DIO"}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-blue-500 text-2xl md:text-3xl">•</span>
              <span>{language === "pt" ? "Versionamento de Código com GIT e GitHub - DIO" : "Code Versioning with GIT and GitHub - DIO"}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-blue-500 text-2xl md:text-3xl">•</span>
              <span>{language === "pt" ? "Docker Essentials - Coursera" : "Docker Essentials - Coursera"}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-blue-500 text-2xl md:text-3xl">•</span>
              <span>{language === "pt" ? "AWS Certified Developer - Amazon" : "AWS Certified Developer - Amazon"}</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
