'use client';

import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-green-50 text-gray-900">
      <button
        onClick={toggleLang}
        className="absolute top-4 right-4 px-3 py-1 text-sm bg-gray-300 rounded hover:bg-gray-400"
      >
        {lang === 'pt' ? '🇬🇧 EN' : '🇧🇷 PT'}
      </button>

      {lang === 'pt' ? (
        <>
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Projeto MATA11</h1>
          <p className="text-lg max-w-xl text-center">
            Esta é a landing page oficial do token MATA11 – uma debênture verde com lastro em floresta amazônica preservada.
          </p>
          <a
            href="/painel"
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Acessar Painel do Investidor
          </a>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4">Welcome to the MATA11 Project</h1>
          <p className="text-lg max-w-xl text-center">
            This is the official landing page of MATA11 – a green debenture token backed by preserved Amazon rainforest.
          </p>
          <a
            href="/painel"
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Access Investor Dashboard
          </a>
        </>
      )}
    </main>
  );
}
