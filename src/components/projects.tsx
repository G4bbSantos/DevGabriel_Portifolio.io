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
            className="w-64 h-72 flex bg-yellow-400 justify-between items-center flex-col hover:border border-gray-600 shadow-lg shadow-gray-500"
            onMouseEnter={() => onHover(description)}
            onMouseLeave={() => onHover("")} // Limpa a descrição ao sair do hover
        >
            <div className="w-full flex justify-end -mb-10">
                <div className="w-24 h-10 bg-white rounded-es-lg flex items-center justify-around">
                    <a href={linkRep} target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/github.svg" alt="GitHub" className="w-8 cursor-pointer"/>
                    </a>
                    <a href={linkPage} target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/seta-para-cima-direita-do-quadrado.svg" alt="Link" className="w-8 cursor-pointer"/>
                    </a>
                </div>
            </div>
            <div className="text-center text-indigo-800">
                <div className="w-full mb-5">
                    <img src={imageSrc} alt={altText} className="w-52 h-40 rounded-md object-cover"/>
                </div>
                <h2 className="font-medium">{name}</h2>
                <h4 className="text-sm font-light">{language}</h4>
                <div className="text-center flex gap-2 mt-3 mb-1">
                    {/* Additional content can go here */}
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
        <section id="projects-section" className="min-h-screen pt-12 flex justify-between items-center flex-col px-4 sm:px-5 md:px-8 lg:px-12">
            <h1 className="mb-6 font-bold text-xl sm:text-2xl xl:text-4xl text-indigo-800">PROJETOS</h1>

            <div className="lg:w-full">
                <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 p-4 rounded-xl">
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
                        altText="Imagem do projeto em andamento 4" 
                        name="Em andamento" 
                        language="Indefinido"
                        description="O projeto está sendo feito no momento"
                        onHover={handleHover}
                        linkRep=""
                        linkPage=""
                    />
                    <ProjectCard 
                        altText="Imagem do projeto em andamento 5" 
                        name="Em andamento" 
                        language="Indefinido"
                        description="O projeto está sendo feito no momento"
                        onHover={handleHover}
                        linkRep=""
                        linkPage=""
                    />
                    <ProjectCard 
                        altText="Imagem do projeto em andamento 6" 
                        name="Em andamento" 
                        language="Indefinido"
                        description="O projeto está sendo feito no momento"
                        onHover={handleHover}
                        linkRep=""
                        linkPage=""
                    />
                    {/* Adicione mais ProjectCard conforme necessário */}
                </div>

                <div className="w-full hidden bg-indigo-800 sm:flex items-center justify-center flex-col p-4 gap-3 mx-3 mt-4 rounded-xl shadow-xl">
                    <h2 className="text-center text-lg">{hoveredDescription || "Projetos que eu já desenvolvi"}</h2>
                </div>                
            </div>
            <div>

            </div>
        </section>
    )
}