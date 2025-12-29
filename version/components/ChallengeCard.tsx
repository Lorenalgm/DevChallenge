import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Challenge {
  _id: string;
  name: string;
  description: string;
  background: string;
  techs: string[];
  type: string;
  level: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
  progress?: number;
  redirect: string;
  buttonText: string;
}

const colorMatch = {
  beginner: 'bg-green-500',
  intermediate: 'bg-orange-500', 
  advanced: 'bg-red-600',
  Mobile: 'bg-blue-500',
  Frontend: 'bg-red-500',
  Backend: 'bg-purple-500',
};

export function ChallengeCard({ challenge, progress, redirect, buttonText }: ChallengeCardProps) {
  const [techs, setTechs] = useState<string[]>([]);

  useEffect(() => {
    let techsArray: string[];
    
    if (Array.isArray(challenge.techs)) {
      techsArray = challenge.techs;
    } else {
      techsArray = challenge.techs
        .toString()
        .split(',')
        .map((element) => element.replace(/^[ ]/, ''));
    }

    // Sort techs by length (longer first)
    techsArray.sort((a, b) => b.length - a.length);

    setTechs(techsArray);
  }, [challenge.techs]);

  return (
    <div className="h-[350px] w-[300px] bg-gray-800 rounded-2xl m-4 flex flex-col items-center relative overflow-hidden">
      <Link href={`/challenges/${challenge._id}/details`} className="no-underline cursor-pointer text-gray-300">
        <div className="overflow-hidden h-[150px] w-[300px] bg-gray-700 relative">
          {/* Tech tags - top right */}
          <div className="absolute right-0 top-4 px-4 h-auto flex flex-col justify-between items-end z-10">
            {techs.map((item) => (
              <p
                className="bg-gray-600 bg-opacity-75 px-4 py-1 mb-1 rounded-full text-center font-bold text-white text-xs"
                key={`${item}-${challenge._id}`}
              >
                {item}
              </p>
            ))}
          </div>
          
          {/* Platform and Level badges - top left */}
          <div className="absolute left-0 top-4 px-4 h-auto flex flex-col justify-between items-start z-10">
            <span className={`${colorMatch[challenge.type as keyof typeof colorMatch] || 'bg-gray-500'} px-4 py-1 text-xs h-6 rounded-full font-bold mb-1 text-white`}>
              {challenge.type}
            </span>
            <span className={`${colorMatch[challenge.level as keyof typeof colorMatch] || 'bg-gray-500'} px-4 py-1 text-xs h-6 rounded-full font-bold mb-1 text-white`}>
              {challenge.level}
            </span>
          </div>
          
          <img 
            src={challenge.background} 
            alt={challenge.name}
            className="transition-transform duration-300 w-full hover:scale-110"
          />
        </div>
        
        {/* Progress bar if provided */}
        {progress && (
          <div className="w-full h-2 bg-gray-600 relative">
            <div 
              className="absolute h-2 bg-green-500 rounded-r" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </Link>
      
      <div className="mt-2 text-gray-300 text-center w-full px-4">
        <Link href={`/challenges/${challenge._id}/details`} className="no-underline text-gray-300">
          <h1 className="text-2xl mt-0 font-medium">{challenge.name}</h1>
        </Link>
        <p className="mt-2 text-sm">{challenge.description}</p>
      </div>
      
      <Link href={redirect} className="no-underline">
        <button className="w-60 h-12 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white font-bold text-lg rounded-full cursor-pointer transition-all duration-250 hover:w-64">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}