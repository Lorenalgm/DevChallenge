import FooterSite from "@/components/FooterSite";
import HeaderSite from "@/components/HeaderSite";
import { Button } from "@/components/ui/button";
import { api } from "@/services/api";
import { useMemo } from "react";
import { FaCheck, FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";

export function Detail() {
  let { id } = useParams();

  const challenge = useMemo(async () => {
    const response = await api.get(`/challenges/${id}`);

    return response.data ?? null;
  }, [id]);

  const includes = [
    {
      id: 1,
      instruction:
        "Readme com instruções de requisitos e as rotas da aplicação",
    },
    {
      id: 2,
      instruction: "Imagens para adicionar no projeto",
    },
    {
      id: 3,
      instruction: "Modelo como design para utilizar como referência",
    },
    {
      id: 4,
      instruction: "Arquivo contendo o texto que será utilizado",
    },
  ];

  const starts = [
    {
      id: 1,
      steps: "Clone o projeto com o código inicial",
    },
    {
      id: 2,
      steps: "Leia as instruções disponíveis no readme",
    },
    {
      id: 3,
      steps: "Inicie o desenvolvimento!",
    },
    {
      id: 4,
      steps: "Compartilhe seus resultados com a comunidade",
    },
  ];

  const colorMatch = (option: string) => {
    switch (option) {
      case "Iniciante":
        return "bg-green-600";
      case "Intermediário":
        return "bg-orange-600";
      case "Avançado":
        return "bg-red-600";
      case "Mobile":
        return "bg-pink-600";
      case "Front-end":
        return "bg-cyan-600";
      case "Back-end":
        return "bg-purple-600";
      default:
        return "bg-indigo-600";
    }
  };

  return (
    <>
      <HeaderSite />
      <div className="container p-0 md:p-4 flex flex-col items-center">
        <div className="w-full md:w-4/5 flex flex-col-reverse md:flex-row gap-4 items-center md:items-start md:px-4 py-10">
          <div className="flex w-4/5 md:w-1/2 md:flex-1 flex-col gap-4">
            <h2 className="text-4xl text-yellow-400 font-bold">
              {challenge?.name}
            </h2>

            <div className="flex flex-row gap-2 flex-wrap">
              <div
                className={`px-4 py-0.5 text-sm font-bold ${colorMatch(
                  challenge?.type
                )} flex items-center justify-center rounded-full`}
              >
                {challenge?.type}
              </div>
              <div
                className={`px-4 py-0.5 text-sm font-bold ${colorMatch(
                  challenge?.level
                )} flex items-center justify-center rounded-full`}
              >
                {challenge?.level}
              </div>
              {challenge?.techs.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-0.5 text-sm font-bold bg-gray-700 flex items-center justify-center rounded-full"
                >
                  {tech}
                </div>
              ))}
            </div>

            <p className="text-sm text-white">{challenge?.description}</p>

            <Button
              onClick={() => window.open(challenge?.githubRepository, "_blank")}
              size="lg"
              className="w-full bg-purple-800 text-white hover:bg-purple-500 rounded-full"
            >
              Começar
            </Button>
          </div>
          <img className="w-4/5 md:w-1/2 rounded" src={challenge?.background} />
        </div>

        <div className="w-full md:w-4/5 flex flex-col gap-4 px-4 py-10">
          <h3 className="text-2xl text-purple-600 font-bold">
            Sobre o desafio
          </h3>

          <p className="text-sm text-white">Seu desafio é.</p>

          <div className="flex flex-col md:flex-row gap-4 py-8">
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="text-2xl text-purple-600 font-bold">
                O Que está incluso?
              </h4>

              {challenge?.type === "Back-end" ? (
                <span>
                  Readme com instruções de requisitos e as rotas da aplicação
                </span>
              ) : (
                <>
                  {includes.map((include) => (
                    <span key={include.id} className="flex gap-4 items-center">
                      <FaCheck className="w-4 h-4 text-yellow-400" />
                      {include.instruction}
                    </span>
                  ))}
                </>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="text-2xl text-purple-600 font-bold">
                Como Iniciar?
              </h4>
              {starts.map((start) => (
                <p key={start.id}>
                  <span className="text-lg text-yellow-400 font-bold">
                    {start.id} -{" "}
                  </span>
                  {start.steps}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center py-8">
          <div className="flex flex-row p-4 bg-gray-800 rounded w-96 items-center justify-between gap-4">
            <div className="flex flex-row items-center gap-4">
              <a href={`https://github.com/${challenge?.username}`}>
                <img
                  src={`https://github.com/${challenge?.username}.png`}
                  className="w-16 h-16 rounded-full"
                />
              </a>
              <div>
                <a href={`https://github.com/${challenge?.username}`}>
                  <p className="text-md text-white uppercase">
                    {challenge?.username}
                  </p>
                </a>
                <p className="text-sm text-yellow-400">Desenvolvedor</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href={`https://github.com/${challenge?.username}`}>
                <FaGithub className="w-7 h-7 mr-2 text-white hover:text-yellow-400" />
              </a>

              {/* <a href={`https://linkedin.com/in/${challenge?.username}`}>
                <FaLinkedin className="w-7 h-7 mr-2 text-white hover:text-yellow-400" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <FooterSite />
    </>
  );
}
