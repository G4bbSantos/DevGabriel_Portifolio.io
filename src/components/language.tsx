import React from "react";
// Importação dos ícones SVG para as tecnologias
import { GitSvg } from "@/svg/Git_Logo";
import { JSLogo } from "@/svg/jslogo";
import { TailwindSvg } from "@/svg/tailwindcss";
import { TsSvg } from "@/svg/typescript";

// Componente principal "Language", que exibe as habilidades em um layout de grade
export const Language: React.FC = () => {
    return (
        <section
            id="language-section"
            className="pt-12 flex justify-between items-center flex-col px-4 sm:px-5 md:px-8 lg:px-12 min-h-screen"
        >
            {/* Título da seção */}
            <h1 className="mb-8 font-bold text-xl sm:text-2xl xl:text-4xl text-indigo-800">HABILIDADES</h1>

            {/* Layout de grid para as habilidades */}
            <div className="lg:w-full grid grid-cols-1 gap-6 p-4 rounded-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
                {/* Exemplo de card de habilidade */}
                <div className="w-60 h-60 flex bg-yellow-400 justify-between items-center flex-col hover:border border-gray-600 shadow-lg shadow-gray-500">
                    <div className="w-full flex justify-end -mb-10">
                        <div className="w-14 h-10 bg-white rounded-es-lg flex items-center justify-center">
                            <img src="/path/to/mais.svg" alt="" className="w-8" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img
                            src="/path/to/HTML_e_css.png"
                            alt="Logo HTML e CSS"
                            className="w-18 h-16 xl:w-32 xl:h-24"
                        />
                        <div className="font-light mt-2 text-indigo-800">HTML & CSS</div>
                    </div>
                    <div></div> {/* Div vazia preservando a estrutura */}
                </div>

                {/* Repetindo o mesmo padrão de card para outras habilidades */}
                <div className="w-60 h-60 flex bg-yellow-400 justify-between items-center flex-col hover:border border-gray-600 shadow-lg shadow-gray-500">
                    <div className="w-full flex justify-end -mb-10">
                        <div className="w-14 h-10 bg-white rounded-es-lg flex items-center justify-center">
                            <img src="/path/to/mais.svg" alt="" className="w-8" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <JSLogo />
                        <div className="font-light mt-2 text-indigo-800">JavaScript</div>
                    </div>
                    <div></div> {/* Div vazia preservando a estrutura */}
                </div>

                {/* Cards para outras habilidades */}
                <div className="w-60 h-60 flex bg-yellow-400 justify-between items-center flex-col hover:border border-gray-600 shadow-lg shadow-gray-500">
                    <div className="w-full flex justify-end -mb-10">
                        <div className="w-14 h-10 bg-white rounded-es-lg flex items-center justify-center">
                            <img src="/path/to/mais.svg" alt="" className="w-8" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <GitSvg />
                        <div className="font-light mt-2 text-indigo-800">Git</div>
                    </div>
                    <div></div> {/* Div vazia preservando a estrutura */}
                </div>

                {/* Continuar a mesma estrutura para outras habilidades como Tailwind, TypeScript, ReactJS */}
                <div className="w-60 h-60 flex bg-yellow-400 justify-between items-center flex-col hover:border border-gray-600 shadow-lg shadow-gray-500">
                    <div className="w-full flex justify-end -mb-10">
                        <div className="w-14 h-10 bg-white rounded-es-lg flex items-center justify-center">
                            <img src="/path/to/mais.svg" alt="" className="w-8" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <TailwindSvg />
                        <div className="font-light mt-2 text-indigo-800">Tailwind CSS</div>
                    </div>
                    <div></div> {/* Div vazia preservando a estrutura */}
                </div>

                <div className="w-60 h-60 flex bg-yellow-400 justify-between items-center flex-col hover:border border-gray-600 shadow-lg shadow-gray-500">
                    <div className="w-full flex justify-end -mb-10">
                        <div className="w-14 h-10 bg-white rounded-es-lg flex items-center justify-center">
                            <img src="/path/to/mais.svg" alt="" className="w-8" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <TsSvg />
                        <div className="font-light mt-2 text-indigo-800">TypeScript</div>
                    </div>
                    <div></div> {/* Div vazia preservando a estrutura */}
                </div>

                <div className="w-60 h-60 flex bg-yellow-400 justify-between items-center flex-col hover:border border-gray-600 shadow-lg shadow-gray-500">
                    <div className="w-full flex justify-end -mb-10">
                        <div className="w-14 h-10 bg-white rounded-es-lg flex items-center justify-center">
                            <img src="/path/to/mais.svg" alt="" className="w-8" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center">
                        <img
                            src="/path/to/ReactJs.png"
                            alt="Logo ReactJS"
                            className="w-16 h-16 xl:w-24 xl:h-24"
                        />
                        <div className="font-light mt-2 text-indigo-800">ReactJS</div>
                    </div>
                    <div>
                    
                    </div> {/* Div vazia preservando a estrutura */}
                </div>
            </div>
            <div>
                
            </div>
        </section>
    );
};
