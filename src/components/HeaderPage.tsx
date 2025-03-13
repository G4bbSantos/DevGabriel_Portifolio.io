import { useState } from "react";

export const HeaderPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScrollToSection = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // Fecha o menu após clicar em um item
    };

    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-3 md:px-5 md:py-3 z-10 bg-black/20">
            <div className="flex flex-row gap-2">
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-yellow-400">{`</>`}</h1>
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-yellow-400">Dev</h1>
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl text-yellow-400">Gabriel Santos</h1>
            </div>
            
            {/* Ícone do menu para mobile */}
            <div className="md:hidden" onClick={toggleMenu}>
                <svg className="w-10 h-10 fill-yellow-400 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> 
                    <path d="M51 46c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 46 50.399 46 51 46zM51 30c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 30 50.399 30 51 30zM51 14c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 14 50.399 14 51 14z"></path>
                </svg>
            </div>
            
            {/* Menu mobile */}
            <div className={`absolute top-16 right-3 bg-black/80 p-4 rounded-lg flex flex-col gap-3 text-xl text-yellow-400 md:hidden transition-transform ${isMenuOpen ? "block" : "hidden"}`}>
                <ul>
                    <li className="cursor-pointer py-2" onClick={() => handleScrollToSection("#about-section")}>
                        Sobre
                    </li>
                    <li className="cursor-pointer py-2" onClick={() => handleScrollToSection("#language-section")}>
                        Habilidades
                    </li>
                    <li className="cursor-pointer py-2" onClick={() => handleScrollToSection("#projects-section")}>
                        Projetos
                    </li>
                </ul>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex">
                <ul className="flex flex-row gap-3 text-xl">
                    <li className="cursor-pointer px-2 py-0.5 rounded-lg hover:underline underline-offset-8 text-yellow-400" onClick={() => handleScrollToSection("#about-section")}>Sobre</li>
                    <li className="cursor-pointer px-2 py-0.5 rounded-lg hover:underline underline-offset-8 text-yellow-400" onClick={() => handleScrollToSection("#language-section")}>Habilidades</li>
                    <li className="cursor-pointer px-2 py-0.5 rounded-lg hover:underline underline-offset-8 text-yellow-400" onClick={() => handleScrollToSection("#projects-section")}>Projetos</li>
                </ul>
            </div>
        </header>
    );
};
