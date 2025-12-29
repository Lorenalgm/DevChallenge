'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function Header() {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(false);
  }, [pathname]);

  return (
    <header className="flex items-center justify-between px-20 mt-10 font-normal md:px-15 lg:px-20 max-md:flex-col max-md:items-start max-md:justify-center max-md:p-0 max-md:relative">
      <div className="text-3xl font-bold text-white max-md:ml-5">
        <Link href="/" className="text-white no-underline">
          Dev<span className="text-yellow-400">Challenge</span>
        </Link>
      </div>

      <div 
        className="hidden transition-all duration-250 max-md:block max-md:absolute max-md:text-2xl max-md:text-white max-md:top-0 max-md:right-0 max-md:mr-5 max-md:cursor-pointer max-md:z-[9999]"
        onClick={() => setClicked(!clicked)}
      >
        {!clicked ? (
          <Bars3Icon className="w-6 h-6" />
        ) : (
          <XMarkIcon className="w-6 h-6" />
        )}
      </div>

      <nav className={`max-md:bg-blue-600 max-md:flex-col max-md:w-full max-md:absolute max-md:justify-around max-md:h-[300px] max-md:items-center max-md:mt-2 max-md:transition-transform max-md:duration-500 max-md:ease-in-out max-md:z-[1000] ${
        clicked ? 'max-md:translate-y-0' : 'max-md:-translate-y-full'
      }`}>
        <ul className="flex items-center list-none text-xl text-white font-normal space-x-5 max-md:flex-col max-md:space-x-0 max-md:space-y-4">
          <li className="hover:opacity-80">
            <Link 
              href="/" 
              className={`no-underline cursor-pointer ${
                pathname === '/' ? 'text-yellow-400' : 'text-white'
              }`}
            >
              Início
            </Link>
          </li>
          <li className="hover:opacity-80">
            <Link 
              href="/challenges" 
              className={`no-underline cursor-pointer ${
                pathname === '/challenges' ? 'text-yellow-400' : 'text-white'
              }`}
            >
              Desafios
            </Link>
          </li>
          <li className="hover:opacity-80">
            <Link 
              href="/devs" 
              className={`no-underline cursor-pointer ${
                pathname === '/devs' ? 'text-yellow-400' : 'text-white'
              }`}
            >
              Comunidade
            </Link>
          </li>
          <li className="hover:opacity-80">
            <Link 
              href="/login" 
              className={`bg-gray-600 w-24 py-1 px-7 rounded-full text-center no-underline text-white ${
                pathname === '/login' ? 'bg-yellow-400 text-gray-700' : ''
              }`}
            >
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}