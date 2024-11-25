import React, { useState } from "react";
import { GitSvg } from "@/svg/Git_Logo";
import { JSLogo } from "@/svg/jslogo";
import { TailwindSvg } from "@/svg/tailwindcss";
import { TsSvg } from "@/svg/typescript";

const Modal = ({ isOpen, onClose, language }) => {
    if (!isOpen) return null;

    const details = {
        "HTML & CSS": {
            description: "Desenvolvimento de layouts responsivos, uso de semântica HTML e estilos avançados com CSS.",
            certificate: "/path/to/certificado_HtmlECss.jpg",
        },
        JavaScript: {
            description: "Desenvolvimento de aplicações dinâmicas, manipulação de DOM e uso de ES6+.",
            certificate: "/path/to/certificado_javascript.jpg",
        },
        Git: {
            description: "Controle de versão, criação de branches e colaboração em equipes.",
            certificate: "/path/to/certificado_git.jpg",
        },
        "Tailwind CSS": {
            description: "Criação de interfaces modernas utilizando classes utilitárias.",
            certificate: "/path/to/certificado_tailwind.jpg",
        },
        TypeScript: {
            description: "Desenvolvimento com tipagem estática, interfaces e sistemas robustos.",
            certificate: "/path/to/certificado_typescript.jpg",
        },
        ReactJS: {
            description: "Criação de SPAs, gerenciamento de estado e componentização.",
            certificate: "/path/to/certificado_reactjs.jpg",
        },
    };

    const { description, certificate } = details[language];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-zinc-300 dark:bg-zinc-700 p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4 text-center">{language}</h2>
                <p className="text-sm mb-4">{description}</p>
                <img
                    src={certificate}
                    alt={`Sem certificado de curso para ${language}`}
                    className="w-full h-auto rounded-md mb-4"
                />
                <button
                    onClick={onClose}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export const Language = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const handleOpenModal = (language) => {
        setSelectedLanguage(language);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedLanguage("");
    };

    return (
        <section
            id="language-section"
            className="pt-12 flex justify-center items-center flex-col px-4 sm:px-5 md:px-8 lg:px-12 min-h-screen bg-neutral-300 dark:bg-neutral-800"
        >
            <h1 className="mb-8 font-bold text-xl sm:text-2xl xl:text-4xl">HABILIDADES</h1>

            <div className="w-full grid grid-cols-2 gap-6 p-4 rounded-xl border border-zinc-900 shadow-xl sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                <div
                    className="flex items-center flex-col cursor-pointer hover:shadow-lg hover:underline"
                    onClick={() => handleOpenModal("HTML & CSS")}
                >
                    <img
                        src="/path/to/HTML_e_css.png"
                        alt="Logo HTML e CSS"
                        className="w-18 h-16 xl:w-32 xl:h-24"
                    />
                    <div className="font-light mt-2">HTML & CSS</div>
                </div>
                <div
                    className="flex items-center flex-col cursor-pointer hover:shadow-lg hover:underline"
                    onClick={() => handleOpenModal("JavaScript")}
                >
                    <JSLogo />
                    <div className="font-light mt-2">JavaScript</div>
                </div>
                <div
                    className="flex items-center flex-col cursor-pointer hover:shadow-lg hover:underline"
                    onClick={() => handleOpenModal("Git")}
                >
                    <GitSvg />
                    <div className="font-light mt-2">Git</div>
                </div>
                <div
                    className="flex items-center flex-col cursor-pointer hover:shadow-lg hover:underline"
                    onClick={() => handleOpenModal("Tailwind CSS")}
                >
                    <TailwindSvg />
                    <div className="font-light mt-2">Tailwind CSS</div>
                </div>
                <div
                    className="flex items-center flex-col cursor-pointer hover:shadow-lg hover:underline"
                    onClick={() => handleOpenModal("TypeScript")}
                >
                    <TsSvg />
                    <div className="font-light mt-2">TypeScript</div>
                </div>
                <div
                    className="flex items-center flex-col cursor-pointer hover:shadow-lg hover:underline"
                    onClick={() => handleOpenModal("ReactJS")}
                >
                    <img
                        src="/path/to/ReactJs.png"
                        alt="Logo ReactJS"
                        className="w-16 h-16 xl:w-24 xl:h-24"
                    />
                    <div className="font-light mt-2">ReactJS</div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                language={selectedLanguage}
            />
        </section>
    );
};
