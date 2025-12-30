import React from 'react';
import Link from 'next/link';

export function Banner() {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center mt-40 mb-40 max-md:mt-[14%] max-md:mb-[14%] max-md:mx-[3%]">
      <h1 className="text-white text-6xl overflow-hidden border-r-4 border-purple-600 tracking-wider animate-typing max-md:text-3xl inline-block whitespace-nowrap">
        Melhore suas habilidades
      </h1>
      <h2 className="text-yellow-400 text-xl mt-2 mb-5 max-md:text-base">
        Com desafios de front-end, back-end e mobile
      </h2>
      <Link href="/challenges">
        <button className="text-white bg-purple-600 w-64 font-bold text-xl rounded-full cursor-pointer transition-all duration-300 hover:bg-purple-800 px-6 py-4">
          Bora codar!
        </button>
      </Link>
    </div>
  );
}