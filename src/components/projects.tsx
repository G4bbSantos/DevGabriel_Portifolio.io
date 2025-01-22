import { useState } from "react";

// Definindo a interface para os props de ProjectCard
interface ProjectCardProps {
    imageSrc?: string; // URL da imagem como string
    altText: string;  // Texto alternativo para a imagem
    name: string;     // Nome do projeto
    language: string; // Linguagem usada no projeto
    description: string; // Descrição do projeto
    onHover: (description: string) => void; // Função para lidar com o hover
    linkRep: string;
    linkPage: string
}

// Componente reutilizável para cartões de projeto
const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc = "/path/to/.png", 
    altText, name, language, description, onHover, linkRep, linkPage }) => {
    return (
        <div 
            className="flex flex-col items-center gap-2 p-2 bg-zinc-400 dark:bg-zinc-800 cursor-pointer hover:shadow-2xl hover:bg-neutral-400 dark:hover:bg-neutral-800 rounded-lg"
            onMouseEnter={() => onHover(description)}
            onMouseLeave={() => onHover("")} // Limpa a descrição ao sair do hover
        >
            <img src={imageSrc} alt={altText} className="w-56 h-64 rounded-md object-cover"/>
            <div className="text-center">
                <h2 className="font-medium">{name}</h2>
                <h4 className="text-sm font-light">{language}</h4>
                <div className="text-center flex gap-2 mt-3 mb-1">
                    <a href={`${linkRep}`} className="cursor-pointer hover:bg-zinc-900 font-medium px-3 text-lg py-1 bg-zinc-600 rounded-lg text-slate-300">Repositório</a>
                    <a href={`${linkPage}`} className="cursor-pointer hover:bg-zinc-900 text-lg font-medium px-3 py-1 bg-zinc-600 rounded-lg text-slate-300">Link da Página</a>
                </div>
            </div>
        </div>
    )
}

export const Projects = () => {
    const [hoveredDescription, setHoveredDescription] = useState("");

    const handleHover = (description: string) => {
        setHoveredDescription(description);
    };

    return (
        <section id="projects-section" className="min-h-screen pt-12 flex justify-center items-center flex-col px-4 sm:px-5 md:px-8 lg:px-12 bg-neutral-300 dark:bg-neutral-800">
            <h1 className="mb-6 font-bold text-xl sm:text-2xl xl:text-4xl">PROJETOS</h1>

            <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 rounded-xl border border-zinc-900 shadow-xl">
                <ProjectCard 
                    altText="Imagem do projeto em andamento 1" 
                    name="Tabela Fipe" 
                    language="ReactJs com Next"
                    description="O projeto foi feito usando uma api de tabela fipe. No projeto, vc pode escolher o tipo de veiculo,
                     marca, modelo e ano e ver sobre o veiculo que deseja de forma simples e facil"
                    onHover={handleHover}
                    linkRep="https://github.com/G4bbSantos/TabelaFipe_Project.io"
                    linkPage="https://tabela-fipe-project-two.vercel.app/"
                    imageSrc="/path/to/TabelaFipe1.png"
                />
                <ProjectCard 
                    altText="Imagem do projeto em andamento 2" 
                    name="Em andamento" 
                    language="Indefinido" 
                    description="O projeto está sendo feito no momento"
                    onHover={handleHover}
                    linkRep=""
                    linkPage=""
                />
                <ProjectCard 
                    altText="Imagem do projeto em andamento 3" 
                    name="Em andamento" 
                    language="Indefinido"
                    description="O projeto está sendo feito no momento"
                    onHover={handleHover}
                    linkRep=""
                    linkPage=""
                />
                <ProjectCard 
                    altText="Imagem do projeto em andamento 3" 
                    name="Em andamento" 
                    language="Indefinido"
                    description="O projeto está sendo feito no momento"
                    onHover={handleHover}
                    linkRep=""
                    linkPage=""
                />
                <ProjectCard 
                    altText="Imagem do projeto em andamento 3" 
                    name="Em andamento" 
                    language="Indefinido"
                    description="O projeto está sendo feito no momento"
                    onHover={handleHover}
                    linkRep=""
                    linkPage=""
                />
                {/* Adicione mais ProjectCard conforme necessário */}
            </div>

            <div className="w-full flex items-center justify-center flex-col p-4 gap-3 mx-3 mt-4 rounded-xl border border-zinc-900 shadow-xl">
                <h2 className="text-center text-lg">{hoveredDescription || "Projetos que eu já desenvolvi"}</h2>
            </div>
        </section>
    )
}