'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DevCard } from '@/components/DevCard';
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from '@heroicons/react/24/outline';

interface Challenge {
  _id: string;
  name: string;
  description: string;
  background: string;
  techs: string[];
  type: string;
  level: string;
  brief?: string;
  github_url?: string;
  images?: string[];
  dev_id?: {
    _id: string;
    name: string;
    position?: string;
    avatar?: string;
    github?: string;
    linkedin?: string;
  };
}

const colorMatch = {
  beginner: 'bg-green-500',
  intermediate: 'bg-orange-500', 
  advanced: 'bg-red-600',
  iniciante: 'bg-green-500',
  intermediário: 'bg-orange-500',
  avançado: 'bg-red-600',
  Mobile: 'bg-blue-500',
  Frontend: 'bg-red-500',
  Backend: 'bg-purple-500',
};

const includes = [
  {
    id: 1,
    instruction: 'Readme com instruções de requisitos e as rotas da aplicação',
  },
  {
    id: 2,
    instruction: 'Imagens para adicionar no projeto',
  },
  {
    id: 3,
    instruction: 'Modelo como design para utilizar como referência',
  },
  {
    id: 4,
    instruction: 'Arquivo contendo o texto que será utilizado',
  },
];

const starts = [
  {
    id: 1,
    steps: 'Clone o projeto com o código inicial',
  },
  {
    id: 2,
    steps: 'Leia as instruções disponíveis no readme',
  },
  {
    id: 3,
    steps: 'Inicie o desenvolvimento!',
  },
  {
    id: 4,
    steps: 'Compartilhe seus resultados com a comunidade',
  },
];

export default function ChallengeDetails() {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    async function loadChallenge() {
      try {
        const response = await fetch(`/api/challenges/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch challenge');
        }
        const data = await response.json();
        setChallenge(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading challenge:', error);
        setLoading(false);
      }
    }

    loadChallenge();
  }, [id]);

  const nextImage = () => {
    if (challenge?.images && challenge.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === challenge.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (challenge?.images && challenge.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? challenge.images!.length - 1 : prev - 1
      );
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white text-xl">Carregando desafio...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (!challenge) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white text-xl">Desafio não encontrado</div>
        </div>
        <Footer />
      </>
    );
  }

  const techs = Array.isArray(challenge.techs) 
    ? challenge.techs 
    : challenge.techs.toString().split(',').map(t => t.trim());

  return (
    <>
      <Header />
      
      <div className="bg-gray-900 min-h-screen text-white">
        {/* Banner Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Challenge Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">{challenge.name}</h1>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`${colorMatch[challenge.level as keyof typeof colorMatch] || 'bg-gray-500'} px-4 py-2 text-sm rounded-full font-bold`}>
                  {challenge.level}
                </span>
                <span className={`${colorMatch[challenge.type as keyof typeof colorMatch] || 'bg-gray-500'} px-4 py-2 text-sm rounded-full font-bold`}>
                  {challenge.type}
                </span>
                {techs.map((tech, idx) => (
                  <span key={idx} className="bg-gray-600 px-4 py-2 text-sm rounded-full font-bold">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-gray-300 text-lg leading-relaxed">
                {challenge.description}
              </div>

              {challenge.github_url && (
                <a
                  href={challenge.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-250"
                >
                  Iniciar desafio
                </a>
              )}
            </div>

            {/* Right Column - Image Gallery */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              {challenge.images && challenge.images.length > 0 ? (
                <div className="relative">
                  <img
                    src={challenge.images[currentImageIndex]}
                    alt={`${challenge.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  
                  {challenge.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                      >
                        <ChevronLeftIcon className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                      >
                        <ChevronRightIcon className="w-6 h-6" />
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {challenge.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              idx === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">Nenhuma imagem disponível</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Challenge */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Sobre o desafio</h2>
                <p className="text-gray-300 text-lg">
                  {challenge.brief ? `Seu desafio é ${challenge.brief}.` : challenge.description}
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">O que está incluso?</h3>
                <div className="space-y-3">
                  {challenge.type === 'Backend' ? (
                    <div className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">
                        Readme com instruções de requisitos e as rotas da aplicação
                      </span>
                    </div>
                  ) : (
                    includes.map((include) => (
                      <div key={include.id} className="flex items-center space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{include.instruction}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* How to Start */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Como iniciar?</h3>
                <div className="space-y-3">
                  {starts.map((start) => (
                    <div key={start.id} className="flex items-start space-x-3">
                      <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {start.id}
                      </span>
                      <span className="text-gray-300">{start.steps}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Developer Card */}
            <div className="lg:col-span-1">
              {challenge.dev_id && (
                <DevCard
                  name={challenge.dev_id.name}
                  position={challenge.dev_id.position}
                  avatar={challenge.dev_id.avatar}
                  github={challenge.dev_id.github}
                  linkedin={challenge.dev_id.linkedin}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}