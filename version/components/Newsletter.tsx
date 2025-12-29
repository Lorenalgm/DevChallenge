'use client';

import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export function Newsletter() {
  const [email, setEmail] = useState('');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    
    // For now, just show an alert since we don't have the API set up yet
    if (email) {
      alert('Obrigado! Em breve implementaremos a funcionalidade de newsletter.');
      setEmail('');
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-16 bg-gray-50">
      <div className="flex justify-center items-center">
        <EnvelopeIcon className="w-64 h-64 text-purple-600" />
      </div>
      <div className="flex flex-col max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Seja notificado sobre novos desafios!
        </h2>
        <p className="text-gray-600 mb-6">
          Inscreva-se para ser o primeiro a saber sobre novos desafios :)
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 flex-1"
          />
          <button 
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 font-semibold"
          >
            Inscrever
          </button>
        </form>
      </div>
    </div>
  );
}