import FooterSite from "@/components/FooterSite";
import HeaderSite from "@/components/HeaderSite";
import NewsLetter from "@/components/NewsLetter";
import { Button } from "@/components/ui/button";
import { BsStack } from "react-icons/bs";
import { IoCodeSlash, IoSearch, IoShareSocialOutline } from "react-icons/io5";
import { SlScreenDesktop, SlScreenSmartphone } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderSite />
      <div className="container p-4 flex flex-col items-center ">
        <div className="w-full py-28 items-center justify-center flex flex-col gap-4">
          <h2 className="text-2xl md:text-5xl text-center font-bold typewriter">
            Melhore suas habilidades
          </h2>
          <p className="text-lg text-center text-yellow-400 font-bold">
            Com desafios de front-end, back-end e mobile
          </p>
          <Button
            onClick={() => navigate("/challenges")}
            size="lg"
            className="bg-purple-800 text-white hover:bg-purple-500 rounded-full"
          >
            Bora Codar?!
          </Button>
        </div>
        <div className="w-full py-24 items-center justify-center flex flex-row flex-wrap gap-4">
          <Link
            to="/challenges?type=Front-end"
            className="cursor-pointer w-64 p-16 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-center"
          >
            <SlScreenDesktop className="w-12 h-12 text-yellow-400" />
            <p className="font-bold">Front-end</p>
          </Link>
          <Link
            to="/challenges?type=Back-end"
            className="cursor-pointer w-64 p-16 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-center"
          >
            <IoCodeSlash className="w-12 h-12 text-yellow-400" />
            <p className="font-bold">Back-end</p>
          </Link>
          <Link
            to="/challenges?type=Mobile"
            className="cursor-pointer w-64 p-16 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-center"
          >
            <SlScreenSmartphone className="w-12 h-12 text-yellow-400" />
            <p className="font-bold">Mobile</p>
          </Link>
          <Link
            to="/challenges?type=Full Stack"
            className="cursor-pointer w-64 p-16 bg-zinc-900 hover:bg-zinc-700 rounded flex flex-col gap-2 items-center justify-center"
          >
            <BsStack className="w-12 h-12 text-yellow-400" />
            <p className="font-bold">Full Stack</p>
          </Link>
        </div>
        <div className="w-full py-18 items-center justify-center flex flex-row flex-wrap gap-4">
          <div className="w-64 p-16 flex flex-col gap-2 items-center justify-center">
            <IoSearch className="w-12 h-12 text-white" />
            <p className="font-bold text-yellow-400">Escolha</p>
          </div>
          <div className="w-64 p-16 flex flex-col gap-2 items-center justify-center">
            <IoCodeSlash className="w-12 h-12 text-white" />
            <p className="font-bold text-yellow-400">Desenvolva</p>
          </div>
          <div className="w-64 p-16 flex flex-col gap-2 items-center justify-center">
            <IoShareSocialOutline className="w-12 h-12 text-white" />
            <p className="font-bold text-yellow-400">Compartilhe</p>
          </div>
        </div>
        <NewsLetter />
      </div>
      <FooterSite />
    </>
  );
}
