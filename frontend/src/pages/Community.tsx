import FooterSite from "@/components/FooterSite";
import HeaderSite from "@/components/HeaderSite";
import { FaCodeBranch } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { GoLightBulb } from "react-icons/go";

export function Community() {
  return (
    <>
      <HeaderSite />
      <div className="container p-4 flex flex-col">
        <div className="w-full py-24 items-center justify-center flex flex-row flex-wrap gap-4">
          <a
            href="https://lgoesmontes.typeform.com/to/xKHESI"
            target="_blank"
            rel="nofollow noreferer noopener"
            className="cursor-pointer w-64 p-16 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-center"
          >
            <GoLightBulb className="w-12 h-12 text-yellow-400" />
            <p className="text-center font-bold">Enviar novo desafio</p>
          </a>
          <a
            href="https://discord.gg/yvYXhGj"
            target="_blank"
            rel="nofollow noreferer noopener"
            className="cursor-pointer w-64 p-16 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-center"
          >
            <FiMessageCircle className="w-12 h-12 text-yellow-400" />
            <p className="text-center font-bold">Participar da comunidade</p>
          </a>
          <a
            href="https://github.com/Lorenalgm/DevChallenge"
            target="_blank"
            rel="nofollow noreferer noopener"
            className="cursor-pointer w-64 p-16 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-center"
          >
            <FaCodeBranch className="w-12 h-12 text-yellow-400" />
            <p className="text-center font-bold">Contribuir open source</p>
          </a>
        </div>
      </div>
      <FooterSite />
    </>
  );
}
