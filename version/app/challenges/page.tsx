'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChallengeCard } from '@/components/ChallengeCard';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Challenge {
  _id: string;
  name: string;
  description: string;
  background: string;
  techs: string[];
  type: string;
  level: string;
}

const languages = [
  { id: 1, name: 'React Native' },
  { id: 2, name: 'Free Choice' },
  { id: 3, name: 'Javascript' },
  { id: 4, name: 'HTML' },
  { id: 5, name: 'CSS' },
];

const types = [
  { id: 1, name: 'Frontend' },
  { id: 2, name: 'Backend' },
  { id: 3, name: 'Mobile' },
];


export default function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [languageFilter, setLanguageFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  
  const searchParams = useSearchParams();
  const router = useRouter();

  function capitalize(s: string) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  useEffect(() => {
    // Get type from URL search params
    const typeFromUrl = searchParams.get('type');
    if (typeFromUrl) {
      setTypeFilter(capitalize(typeFromUrl));
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    async function loadChallenges() {
      try {
        const response = await fetch('/api/challenges');
        if (!response.ok) {
          throw new Error('Failed to fetch challenges');
        }
        const data = await response.json();
        
        setChallenges(data);
        setFilteredChallenges(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading challenges:', error);
        setLoading(false);
      }
    }

    loadChallenges();
  }, [searchParams]);

  useEffect(() => {
    let filtered = challenges;
    
    if (typeFilter) {
      filtered = filtered.filter(
        (challenge) =>
          challenge.type.toLowerCase() === typeFilter.toLowerCase()
      );
    }
    
    if (languageFilter) {
      filtered = filtered.filter((challenge) => {
        const techs = Array.isArray(challenge.techs) 
          ? challenge.techs 
          : challenge.techs.toString().split(',').map(t => t.trim());
        
        const hasSelectedTech =
          techs.includes(languageFilter) ||
          techs.includes('Free Choice');

        return hasSelectedTech;
      });
    }
    
    setFilteredChallenges(filtered);
  }, [typeFilter, languageFilter, challenges]);

  const LoadingSkeleton = () => (
    <div className="mt-12 flex flex-wrap max-w-screen justify-center items-center">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="h-[350px] w-[300px] bg-gray-800 rounded-2xl m-4 animate-pulse">
          <div className="h-[150px] w-full bg-gray-700 rounded-t-2xl"></div>
          <div className="p-4 space-y-3">
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          </div>
          <div className="px-4 pb-4">
            <div className="h-12 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Header />
      
      <div className="flex justify-between items-center border-b border-gray-600 mt-15 px-20 text-lg pb-4 max-md:px-5">
        <h1 className="text-white text-4xl max-md:text-3xl">Desafios</h1>
        
        <div className="text-white flex space-x-4">
          <div className="ml-4">
            <label htmlFor="categoria" className="block text-sm font-bold pl-1">Categoria</label>
            <div className="relative pr-5 h-9 overflow-hidden bg-gray-900 rounded">
              <select
                name="categoria"
                className="w-full pr-5 bg-transparent p-1 text-base leading-4 border-0 rounded-0 h-9 appearance-none text-white cursor-pointer"
                onChange={(e) => setTypeFilter(e.target.value)}
                value={typeFilter}
              >
                <option value="">All</option>
                {types.map((type) => (
                  <option key={type.id} value={type.name} className="bg-gray-900">
                    {type.name}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-1 top-2 w-5 h-5 text-white pointer-events-none" />
            </div>
          </div>
          
          <div className="ml-4">
            <label htmlFor="linguagem" className="block text-sm font-bold pl-1">Linguagem</label>
            <div className="relative pr-5 h-9 overflow-hidden bg-gray-900 rounded">
              <select
                name="linguagem"
                className="w-full pr-5 bg-transparent p-1 text-base leading-4 border-0 rounded-0 h-9 appearance-none text-white cursor-pointer"
                onChange={(e) => setLanguageFilter(e.target.value)}
                value={languageFilter}
              >
                <option value="">All</option>
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.name} className="bg-gray-900">
                    {lang.name}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-1 top-2 w-5 h-5 text-white pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {loading && <LoadingSkeleton />}
      
      {!loading && (
        <section className="mt-12 flex flex-wrap max-w-screen items-center justify-center">
          {filteredChallenges.map((challenge) => (
            <ChallengeCard
              challenge={challenge}
              buttonText="ver detalhes"
              redirect={`/challenges/${challenge._id}/details`}
              key={challenge._id}
            />
          ))}
          
          {filteredChallenges.length === 0 && (
            <div className="text-white text-center mt-12 text-xl">
              Nenhum desafio encontrado com os filtros aplicados.
            </div>
          )}
        </section>
      )}

      <Footer />
    </>
  );
}