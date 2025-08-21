import { 
  FaReact, FaNodeJs, FaGitAlt, FaJsSquare, FaPython, FaPhp, FaDocker, FaAws 
} from "react-icons/fa";

import { 
  SiNextdotjs, SiNestjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, 
  SiMysql, SiPostgresql, SiPrisma, SiSharp, SiRedis, SiUbuntu, SiJest, 
  SiVitest, SiApache, SiExpress, SiSonarcloud   
} from "react-icons/si";

type PropsType = {
  language: "pt" | "en"
}
  
export function Skills({ language }: PropsType) {
  return (
    <section id="skills" className="py-20 px-6 max-w-[1400px] mx-auto mt-80">
      {/* My Skills */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        {language === "pt" ? "Minhas Habilidades" : "My Skills"}
      </h2>

      {/* Main Grid with 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* FRONT-END */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-white">{language === "pt" ? "Front-End" : "Front-End"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 text-white">
              <FaReact className="text-5xl" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiNextdotjs className="text-5xl" />
              <span>Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiTailwindcss className="text-5xl text-blue-500" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiHtml5 className="text-5xl text-orange-500" />
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiCss3 className="text-5xl text-blue-600" />
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <FaJsSquare className="text-5xl text-yellow-400" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiTypescript className="text-5xl text-blue-600" />
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        {/* BACK-END */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-white">{language === "pt" ? "Back-End" : "Back-End"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 text-white">
              <FaNodeJs className="text-5xl text-green-600" />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiNestjs className="text-5xl text-red-600" />
              <span>NestJS</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiExpress className="text-5xl text-gray-500" />
              <span>Express</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <FaPhp className="text-5xl text-purple-600" />
              <span>PHP</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiSharp className="text-5xl text-purple-700" />
              <span>C# / .NET</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <FaPython className="text-5xl text-blue-400" />
              <span>Python</span>
            </div>
          </div>
        </div>

        {/* DATABASE */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-white">{language === "pt" ? "Database / ORM" : "Database / ORM"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 text-white">
              <SiPostgresql className="text-5xl text-blue-700" />
              <span>PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiMysql className="text-5xl text-orange-600" />
              <span>MySQL</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiPrisma className="text-5xl text-blue-500" />
              <span>Prisma</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiRedis className="text-5xl text-red-500" />
              <span>Redis</span>
            </div>
          </div>
        </div>

        {/* CLOUD / DEVOPS / TESTS */}
        <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-white">{language === "pt" ? "Cloud / DevOps / Testes" : "Cloud / DevOps / Tests"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2 text-white">
              <FaDocker className="text-5xl text-blue-400" />
              <span>Docker</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <FaAws className="text-5xl text-orange-400" />
              <span>AWS</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiSonarcloud className="text-5xl text-blue-600" />
              <span>Azure</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiUbuntu className="text-5xl text-orange-500" />
              <span>Ubuntu</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiJest className="text-5xl text-red-600" />
              <span>Jest</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiVitest className="text-5xl text-green-600" />
              <span>Vitest</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <FaGitAlt className="text-5xl text-orange-500" />
              <span>Git</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <SiApache className="text-5xl text-gray-600" />
              <span>Apache</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
