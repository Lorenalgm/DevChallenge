import FooterSite from "@/components/FooterSite";
import HeaderSite from "@/components/HeaderSite";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { api } from "@/services/api";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Challenges() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const [challengesList, setChallengesList] = useState([]);
  const [languageFilter, setLanguageFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filteredChallenges = useMemo(() => {
    const activeOnly = challengesList.filter((item) => item.active);

    const languageFiltered =
      languageFilter === ""
        ? activeOnly
        : activeOnly.filter((item) => item.techs.includes(languageFilter));

    const typeFiltered =
      typeFilter === ""
        ? languageFiltered
        : languageFiltered.filter((item) => item.type === typeFilter);

    return typeFiltered;
  }, [challengesList, languageFilter, typeFilter]);

  useEffect(() => {
    async function loadChallenges() {
      const response = await api.get("/challenges");
      setChallengesList(response.data);
      setIsLoading(false);
    }
    loadChallenges();
  }, []);

  useEffect(() => {
    if (location.search.includes("?type=")) {
      const queryTypeParam = location.search.replace("?type=", "");
      console.log("queryTypeParam", queryTypeParam);
      setTypeFilter(queryTypeParam.replace("%20", " "));
    }
  }, [location]);

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
      <div className="container mx-auto p-4 flex flex-col">
        <div className="flex flex-col md:flex-row items-center md:items-end p-4 gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-3xl font-bold">Desafios</p>
            <p className="text-sm">{filteredChallenges.length} desafios</p>
          </div>
          <div className="flex gap-4 md:ml-auto">
            <div className="space-y-2 w-32">
              <Label htmlFor="category">Categorias</Label>
              <Select
                value={typeFilter}
                onValueChange={(value) => setTypeFilter(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={""}>{"Todos"}</SelectItem>
                  <SelectItem value={"Full Stack"}>{"Full Stack"}</SelectItem>
                  <SelectItem value={"Front-end"}>{"Front-end"}</SelectItem>
                  <SelectItem value={"Back-end"}>{"Back-end"}</SelectItem>
                  <SelectItem value={"Mobile"}>{"Mobile"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 w-32">
              <Label htmlFor="languages">Linguagens</Label>
              <Select
                value={languageFilter}
                onValueChange={(value) => setLanguageFilter(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Linguagens" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={""}>{"Todos"}</SelectItem>
                  <SelectItem value={"React JS"}>{"React JS"}</SelectItem>
                  <SelectItem value={"React Native"}>
                    {"React Native"}
                  </SelectItem>
                  <SelectItem value={"HTML"}>{"HTML"}</SelectItem>
                  <SelectItem value={"CSS"}>{"CSS"}</SelectItem>
                  <SelectItem value={"Javascript"}>{"Javascript"}</SelectItem>
                  <SelectItem value={"Escolha Livre"}>
                    {"Escolha Livre"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Separator />
        <main className="flex gap-4 flex-wrap py-4 justify-center">
          {isLoading ? (
            <>
              <div className="hidden md:flex gap-4 flex-wrap py-4 justify-center">
                <div class="flex flex-col bg-zinc-900 shadow-md w-72 rounded-md overflow-hidden relative items-center">
                  <div
                    data-skeleton
                    class="h-52 w-full overflow-hidden relative bg-zinc-700"
                  ></div>

                  <div class="flex flex-col items-center p-4 gap-1 w-full">
                    <div
                      data-skeleton
                      class="flex h-8 mb-8 w-48 overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center p-4 w-full">
                    <div
                      data-skeleton
                      class="mr-2 h-10 w-full rounded-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                </div>
                <div class="flex flex-col bg-zinc-900 shadow-md w-72 rounded-md overflow-hidden relative items-center">
                  <div
                    data-skeleton
                    class="h-52 w-full overflow-hidden relative bg-zinc-700"
                  ></div>

                  <div class="flex flex-col items-center p-4 gap-1 w-full">
                    <div
                      data-skeleton
                      class="flex h-8 mb-8 w-48 overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center p-4 w-full">
                    <div
                      data-skeleton
                      class="mr-2 h-10 w-full rounded-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                </div>
                <div class="flex flex-col bg-zinc-900 shadow-md w-72 rounded-md overflow-hidden relative items-center">
                  <div
                    data-skeleton
                    class="h-52 w-full overflow-hidden relative bg-zinc-700"
                  ></div>

                  <div class="flex flex-col items-center p-4 gap-1 w-full">
                    <div
                      data-skeleton
                      class="flex h-8 mb-8 w-48 overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center p-4 w-full">
                    <div
                      data-skeleton
                      class="mr-2 h-10 w-full rounded-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                </div>
                <div class="flex flex-col bg-zinc-900 shadow-md w-72 rounded-md overflow-hidden relative items-center">
                  <div
                    data-skeleton
                    class="h-52 w-full overflow-hidden relative bg-zinc-700"
                  ></div>

                  <div class="flex flex-col items-center p-4 gap-1 w-full">
                    <div
                      data-skeleton
                      class="flex h-8 mb-8 w-48 overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center p-4 w-full">
                    <div
                      data-skeleton
                      class="mr-2 h-10 w-full rounded-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <div class="flex flex-col bg-zinc-900 shadow-md w-72 rounded-md overflow-hidden relative items-center">
                  <div
                    data-skeleton
                    class="h-52 w-full overflow-hidden relative bg-zinc-700"
                  ></div>

                  <div class="flex flex-col items-center p-4 gap-1 w-full">
                    <div
                      data-skeleton
                      class="flex h-8 mb-8 w-48 overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center p-4 w-full">
                    <div
                      data-skeleton
                      class="mr-2 h-10 w-full rounded-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                </div>
                <div class="flex flex-col bg-zinc-900 shadow-md w-72 rounded-md overflow-hidden relative items-center">
                  <div
                    data-skeleton
                    class="h-52 w-full overflow-hidden relative bg-zinc-700"
                  ></div>

                  <div class="flex flex-col items-center p-4 gap-1 w-full">
                    <div
                      data-skeleton
                      class="flex h-8 mb-8 w-48 overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center p-4 w-full">
                    <div
                      data-skeleton
                      class="mr-2 h-10 w-full rounded-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                </div>
                <div class="flex flex-col bg-zinc-900 shadow-md w-72 rounded-md overflow-hidden relative items-center">
                  <div
                    data-skeleton
                    class="h-52 w-full overflow-hidden relative bg-zinc-700"
                  ></div>

                  <div class="flex flex-col items-center p-4 gap-1 w-full">
                    <div
                      data-skeleton
                      class="flex h-8 mb-8 w-48 overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center p-4 w-full">
                    <div
                      data-skeleton
                      class="mr-2 h-10 w-full rounded-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                </div>
                <div class="flex flex-col bg-zinc-900 shadow-md w-72 rounded-md overflow-hidden relative items-center">
                  <div
                    data-skeleton
                    class="h-52 w-full overflow-hidden relative bg-zinc-700"
                  ></div>

                  <div class="flex flex-col items-center p-4 gap-1 w-full">
                    <div
                      data-skeleton
                      class="flex h-8 mb-8 w-48 overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                    <div
                      data-skeleton
                      class="flex h-4 w-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center p-4 w-full">
                    <div
                      data-skeleton
                      class="mr-2 h-10 w-full rounded-full overflow-hidden relative bg-zinc-700"
                    ></div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {filteredChallenges.length === 0 && challengesList.length > 0 && (
                <div className="flex flex-col gap-4 py-10 items-center">
                  <div className="flex gap-2 items-center justify-center bg-yellow-400 w-20 h-20 rounded-sm">
                    <p className="text-6xl font-bold text-black">D</p>
                  </div>
                  <p className="text-muted-foreground">
                    Sem desafios nessa categoria no momento!
                  </p>
                </div>
              )}

              {filteredChallenges.length === 0 &&
                challengesList.length === 0 && (
                  <div className="flex flex-col gap-4 py-10 items-center">
                    <div className="flex gap-2 items-center justify-center bg-yellow-400 w-20 h-20 rounded-sm">
                      <p className="text-6xl font-bold text-black">D</p>
                    </div>
                    <p className="text-muted-foreground">
                      Sem desafios nessa no momento!
                    </p>
                  </div>
                )}

              {filteredChallenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className="relative flex flex-col w-72 h-96 gap-4 bg-zinc-800 rounded overflow-hidden"
                >
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div
                      title={challenge?.type}
                      className={`px-4 py-0.5 text-sm font-bold ${colorMatch(
                        challenge?.type
                      )} flex items-center justify-center rounded-full cursor-pointer`}
                    >
                      {challenge?.type}
                    </div>
                    <div
                      title={challenge?.level}
                      className={`px-4 py-0.5 text-sm font-bold ${colorMatch(
                        challenge?.level
                      )} flex items-center justify-center rounded-full cursor-pointer`}
                    >
                      {challenge?.level}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 flex flex-col gap-1">
                    {challenge.techs.slice(0, 2).map((item) => (
                      <div
                        key={`${item}-${challenge.id}`}
                        title={item}
                        className="px-4 py-0.5 text-sm font-bold bg-gray-700 flex items-center justify-center rounded-full cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                    {challenge.techs.length > 2 && (
                      <div
                        title={challenge.techs.slice(2).join(", ")}
                        className="px-4 py-0.5 text-sm font-bold bg-gray-700 flex items-center justify-center rounded-full cursor-pointer"
                      >
                        mais {challenge.techs.length - 2}
                      </div>
                    )}
                  </div>
                  <img
                    onClick={() => navigate(`/details/${challenge.id}`)}
                    className="w-full h-44 aspect-video cursor-pointer object-cover"
                    src={challenge.background}
                  />
                  <div className="h-full flex flex-col gap-4 px-4 pb-4 items-center justify-between">
                    <h3
                      className="text-2xl text-white text-center cursor-pointer"
                      onClick={() => navigate(`/details/${challenge.id}`)}
                    >
                      {challenge.name}
                    </h3>

                    <p className="text-sm text-white">
                      {challenge.description.length > 120
                        ? challenge.description.substr(0, 120) + "..."
                        : challenge.description}
                    </p>

                    <Button
                      onClick={() => navigate(`/details/${challenge.id}`)}
                      size="lg"
                      className="w-full bg-purple-800 text-white hover:bg-purple-500 rounded-full"
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </>
          )}
        </main>
      </div>
      <FooterSite />
    </>
  );
}
