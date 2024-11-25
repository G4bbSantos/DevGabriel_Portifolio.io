export const HeaderPage = () => {
    const handleScrollToSection = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-3 md:px-5 md:py-3 shadow-lg z-10 bg-s-800/20 dark:bg-neutral-800/40">
            <div className="flex flex-row gap-2">
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Dev</h1>
                <h1 className="text-xl font-bold md:text-2xl lg:text-3xl ">Gabriel</h1>
            </div>
            <div className="md:hidden">
                <svg className="w-10 h-10 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> 
                    <path d="M51 46c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 46 50.399 46 51 46zM51 30c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 30 50.399 30 51 30zM51 14c1.104 0 2 .895 2 2 0 1.105-.896 2-2 2-.601 0-37.399 0-38 0-1.104 0-2-.895-2-2 0-1.105.896-2 2-2C13.601 14 50.399 14 51 14z"></path>
                </svg>
            </div>
            <div className="hidden md:flex">
                <ul className="flex flex-row gap-3 text-xl">
                    <li
                        className="cursor-pointer px-2 py-0.5 rounded-lg active:text-slate-600 dark:active:text-slate-300 hover:underline underline-offset-8"
                        onClick={() => handleScrollToSection("#about-section")}
                    >
                        Sobre
                    </li>
                    <li
                        className="cursor-pointer px-2 py-0.5 rounded-lg active:text-slate-600 dark:active:text-slate-300 hover:underline underline-offset-8"
                        onClick={() => handleScrollToSection("#language-section")}
                    >
                        Habilidades
                    </li>
                    <li
                        className="cursor-pointer px-2 py-0.5 rounded-lg active:text-slate-600 dark:active:text-slate-300 hover:underline underline-offset-8"
                        onClick={() => handleScrollToSection("#projects-section")}
                    >
                        Projetos
                    </li>
                </ul>
            </div>
        </header>
    );
};
