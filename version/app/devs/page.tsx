'use client';

import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DevCard } from '@/components/DevCard';
import { LightBulbIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

// Mock data for now since we don't have the API set up
const mockDevs = [
  {
    _id: '1',
    name: 'João Silva',
    position: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format',
    github: 'joao-silva',
    linkedin: 'joao-silva'
  },
  {
    _id: '2',
    name: 'Maria Santos',
    position: 'Backend Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1d6?w=400&h=400&fit=crop&crop=face&auto=format',
    github: 'maria-santos',
    linkedin: 'maria-santos'
  },
  {
    _id: '3',
    name: 'Pedro Oliveira',
    position: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
    github: 'pedro-oliveira',
    linkedin: 'pedro-oliveira'
  }
];

interface Dev {
  _id: string;
  name: string;
  position: string;
  avatar: string;
  github?: string;
  linkedin?: string;
}

export default function Devs() {
  const [devs, setDevs] = useState<Dev[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const loadDevs = async () => {
      // For now, use mock data
      setTimeout(() => {
        setDevs(mockDevs);
        setLoading(false);
      }, 1000);
    };

    loadDevs();
  }, []);

  return (
    <>
      <Header />
      
      <div className="flex flex-col justify-center mx-[6%] flex-1 md:mx-[6%] max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full max-md:mx-0 max-md:mt-[5%]">
        {/* Options Container */}
        <div className="flex flex-row flex-wrap items-center justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lgoesmontes.typeform.com/to/xKHESI"
            className="no-underline"
          >
            <div className="w-[300px] h-[300px] bg-gray-800 mx-5 my-5 rounded-lg cursor-pointer flex flex-col flex-wrap items-center justify-center transition-all duration-250 hover:scale-105 hover:bg-gray-700">
              <LightBulbIcon className="text-yellow-400 w-[60px] h-[60px]" />
              <h2 className="text-white mt-5 text-center">
                Submeter
                <br />
                novo desafio
              </h2>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/yvYXhGj"
            className="no-underline"
          >
            <div className="w-[300px] h-[300px] bg-gray-800 mx-5 my-5 rounded-lg cursor-pointer flex flex-col flex-wrap items-center justify-center transition-all duration-250 hover:scale-105 hover:bg-gray-700">
              <ChatBubbleLeftRightIcon className="text-yellow-400 w-[60px] h-[60px]" />
              <h2 className="text-white mt-5 text-center">
                Participar
                <br />
                da comunidade
              </h2>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Lorenalgm/DevChallenge"
            className="no-underline"
          >
            <div className="w-[300px] h-[300px] bg-gray-800 mx-5 my-5 rounded-lg cursor-pointer flex flex-col flex-wrap items-center justify-center transition-all duration-250 hover:scale-105 hover:bg-gray-700">
              <svg className="text-yellow-400 w-[60px] h-[60px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <h2 className="text-white mt-5 text-center">
                Contribuir
                <br />
                open source
              </h2>
            </div>
          </a>
        </div>

        {/* Devs Container */}
        {!loading && (
          <div className="mt-16 text-white flex flex-col items-center">
            <h1 className="mb-4 text-3xl font-bold">Últimas contribuições</h1>
            <div className="flex flex-row justify-evenly flex-wrap gap-4">
              {devs.map((dev) => (
                <DevCard
                  key={dev._id}
                  name={dev.name}
                  position={dev.position}
                  avatar={dev.avatar}
                  github={dev.github}
                  linkedin={dev.linkedin}
                />
              ))}
            </div>
          </div>
        )}
        
        {loading && (
          <div className="mt-16 text-white flex flex-col items-center">
            <h1 className="mb-4 text-3xl font-bold">Carregando...</h1>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}