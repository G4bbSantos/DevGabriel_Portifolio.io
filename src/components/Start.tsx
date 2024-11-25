import React from "react";

export const Start = () => {
    return (
        <section
            id="start-section"
            className="min-h-screen flex flex-col justify-center items-center pt-20 bg-neutral-300 dark:bg-neutral-800"
        >
            <div className="text-center">
                <h1 className="text-2xl font-semibold sm:text-5xl sm:font-extrabold typing-effect">
                    Olá, sou Gabriel Fernando
                </h1>
                <h2 className="text-xl font-medium sm:text-3xl sm:font-semibold">
                    Desenvolvedor front-end
                </h2>
            </div>
            <div className="flex justify-center items-center gap-4 mt-3">
                <a
                    href="https://www.linkedin.com/in/gabriel-fernando-dos-santos-b1aab32b5/"
                    className="cursor-pointer hover:bg-zinc-900 text-lg font-medium px-5 py-1 bg-zinc-600 rounded-lg text-slate-300"
                >
                    Linkedin
                </a>
                <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqrgFPQQsnsvqwPxGzMbBmKDWnpJFpPKnWJNMnLFjTcxSQzvGrRPlRdqwjRQlPqHvqbB"
                    className="cursor-pointer hover:bg-zinc-900 text-lg font-medium px-5 py-1 bg-zinc-600 rounded-lg text-slate-300"
                >
                    Email
                </a>
                <a
                    href="https://github.com/G4bbSantos"
                    className="cursor-pointer hover:bg-zinc-900 text-lg font-medium px-5 py-1 bg-zinc-600 rounded-lg text-slate-300"
                >
                    Github
                </a>
            </div>
        </section>
    );
};
