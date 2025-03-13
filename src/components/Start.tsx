"use client";
import { motion } from "framer-motion";

export const Start = () => {
    return (
        <section id="start-section" className="min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-gradient-to-r from-indigo-800 to-sky-600">
            <div className="relative w-full flex flex-col items-center">
                {/* H2 acima do título animado */}
                <h2 className="text-lg font-medium sm:text-2xl sm:font-semibold mb-4">
                    Olá
                </h2>

                {/* Div que ocupa toda a largura e contém o título animado */}
                <div className="relative w-8/12 min-h-14 overflow-hidden">
                    <motion.h1
                        className="text-2xl font-semibold sm:text-5xl sm:font-extrabold whitespace-nowrap absolute"
                        initial={{ x: "-100%" }} // Agora começa fora da tela à direita
                        animate={{ x: "200%" }} // Move para a esquerda até sumir
                        transition={{
                            repeat: Infinity,
                            duration: 8,
                            ease: "linear"
                        }}
                    >
                        Gabriel Fernando dos Santos
                    </motion.h1>
                </div>

                {/* H2 abaixo do título animado */}
                <h2 className="text-lg font-medium sm:text-2xl sm:font-semibold mt-4">
                    {`<Desenvolvedor Front-end/>`}
                </h2>
            </div>

            {/* Botões */}
            <div className="flex justify-center items-center gap-8 mt-6">
                <a
                    href="https://www.linkedin.com/in/gabriel-fernado-santos-805678351/"
                    className="bg-white relative cursor-pointer text-lg font-medium px-6 py-2 rounded-lg border border-black overflow-hidden text-blue-500 transition-colors duration-300  before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-indigo-800 before:z-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 hover:text-white"
                >
                    <span className="relative z-10">Linkedin</span>
                </a>

                <a
                    href="https://github.com/G4bbSantos"
                    className="bg-white relative cursor-pointer text-lg font-medium px-6 py-2 rounded-lg border border-black overflow-hidden text-blue-500 transition-colors duration-300 before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:bg-indigo-800 before:z-0 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 hover:text-white"
                >
                    <span className="relative z-10">Github</span>
                </a>

            </div>
        </section>
    );
};
