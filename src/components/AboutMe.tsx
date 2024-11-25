export const AboutMe = () => {
    return (
        <section id="about-section" className="pt-12 flex justify-center items-center flex-col px-4 min-h-screen bg-neutral-300 dark:bg-neutral-800">
            <h1 className="mb-8 font-bold text-xl sm:text-2xl xl:text-4xl">SOBRE MIM</h1>

            <div className="w-full max-w-5xl p-6 rounded-xl border border-zinc-900 shadow-xl flex flex-col items-center sm:flex-row sm:justify-around gap-4">
                <div className="text-center">
                    <h1 className="font-bold text-lg sm:text-xl xl:text-3xl">Gabriel Fernando dos Santos</h1>
                    <h2 className="text-md sm:text-lg xl:text-2xl font-medium mt-2">Desenvolvedor front-end</h2>
                    <p className="mt-4 text-sm sm:text-base xl:text-xl max-w-prose">
                        Sou um estudante de desenvolvimento de front-end, desde pequeno, sempre fui apaixonado por tecnologia. 
                        Essa paixão me levou a mergulhar no universo da TI, onde decidi aprender programação. Hoje, 
                        estou em constante evolução, aprimorando minhas habilidades nas linguagens que já conheço e explorando 
                        novas para expandir meu conhecimento.
                    </p>
                    <p className="mt-4 text-sm sm:text-base xl:text-lg max-w-prose">
                        
                    </p>
                </div>
            </div>
        </section>
    )
}