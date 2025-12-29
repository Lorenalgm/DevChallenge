import React from 'react';
import { MagnifyingGlassIcon, CodeBracketIcon, ShareIcon } from '@heroicons/react/24/outline';

export function Steps() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-8 py-16">
      <div className="flex flex-col items-center text-center text-white">
        <MagnifyingGlassIcon className="w-16 h-16 text-yellow-400 mb-4" />
        <h2 className="text-2xl font-semibold">Escolha</h2>
      </div>
      <div className="flex flex-col items-center text-center text-white">
        <CodeBracketIcon className="w-16 h-16 text-yellow-400 mb-4" />
        <h2 className="text-2xl font-semibold">Desenvolva</h2>
      </div>
      <div className="flex flex-col items-center text-center text-white">
        <ShareIcon className="w-16 h-16 text-yellow-400 mb-4" />
        <h2 className="text-2xl font-semibold">Compartilhe</h2>
      </div>
    </div>
  );
}