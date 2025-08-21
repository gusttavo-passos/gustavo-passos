// Footer.tsx
type FooterProps = {
  language: "pt" | "en";
};

export function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-secondary p-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Luis Gustavo Santos Passos.{" "}
      {language === "pt" 
        ? "Todos os direitos reservados." 
        : "All rights reserved."}
    </footer>
  );
}
