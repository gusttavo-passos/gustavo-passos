import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { AboutAndProjects } from './pages/AboutAndProjects'
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer'
import { Skills } from './pages/Skills'
import { Education } from './pages/Education'
import { useState } from 'react'

export default function App() {
    const [language, setLanguage] = useState<"pt" | "en">("pt");
    const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");
    
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <main className="flex-grow">
        <Home language={language} />
        <Skills language={language}/>
        <AboutAndProjects language={language}/>
        <Education language={language}/>
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}
