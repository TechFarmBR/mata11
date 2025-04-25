'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Painel() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-gray-900">
      <button
        onClick={toggleLang}
        className="absolute top-4 right-4 px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
      >
        {lang === 'pt' ? '🇬🇧 EN' : '🇧🇷 PT'}
      </button>

      {lang === 'pt' ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Painel do Investidor</h1>
          <p className="text-center max-w-xl text-lg">
            Acompanhe o desempenho dos seus tokens MATA11, visualize documentos oficiais e fique por dentro das atualizações do projeto.
          </p>
          <ul className="mt-6 list-disc list-inside text-left max-w-xl text-sm">
            <li><strong>Rentabilidade:</strong> 3% a.m. + 3% sobre lucros ambientais (condicionado)</li>
            <li><strong>Período de elegibilidade:</strong> 2,5 anos com os tokens em carteira</li>
            <li><strong>Acesso ao Term Sheet, Whitepaper e Relatórios</strong></li>
          </ul>
          <div className="mt-8 space-y-3 text-center">
            <a href="/docs_MATA11_TERMSHEET_vFINAL.pdf" className="block text-green-600 underline hover:text-green-800" target="_blank">📄 Baixar Term Sheet</a>
            <a href="/docs_MATA11_WHITEPAPER_EXPANDIDO.pdf" className="block text-green-600 underline hover:text-green-800" target="_blank">📘 Baixar Whitepaper</a>
            <a href="/docs_MATA11_SECURITY_TOKEN_REPORT.pdf" className="block text-green-600 underline hover:text-green-800" target="_blank">🔐 Baixar Relatório Simulado</a>
            <a href="/docs_MATA11_FORMULARIO_CAPTACAO.pdf" className="block text-green-600 underline hover:text-green-800" target="_blank">📝 Formulário de Captação</a>
          </div>
          <Link href="/" className="mt-6 text-green-600 underline hover:text-green-800 block">
            Voltar para a página inicial
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Investor Dashboard</h1>
          <p className="text-center max-w-xl text-lg">
            Track your MATA11 token performance, access key documents, and stay up to date with project developments.
          </p>
          <ul className="mt-6 list-disc list-inside text-left max-w-xl text-sm">
            <li><strong>Returns:</strong> 3% monthly + 3% profit sharing (conditions apply)</li>
            <li><strong>Eligibility period:</strong> 2.5 years with tokens held in wallet</li>
            <li><strong>Access to Term Sheet, Whitepaper, and Reports</strong></li>
          </ul>
          <div className="mt-8 space-y-3 text-center">
            <a href="/docs_MATA11_TERMSHEET_vFINAL.pdf" className="block text-green-600 underline hover:text-green-800" target="_blank">📄 Download Term Sheet</a>
            <a href="/docs_MATA11_WHITEPAPER_EXPANDIDO.pdf" className="block text-green-600 underline hover:text-green-800" target="_blank">📘 Download Whitepaper</a>
            <a href="/docs_MATA11_SECURITY_TOKEN_REPORT.pdf" className="block text-green-600 underline hover:text-green-800" target="_blank">🔐 Download Simulated Report</a>
            <a href="/docs_MATA11_FORMULARIO_CAPTACAO.pdf" className="block text-green-600 underline hover:text-green-800" target="_blank">📝 Investor Form</a>
          </div>
          <Link href="/" className="mt-6 text-green-600 underline hover:text-green-800 block">
            Back to homepage
          </Link>
        </>
      )}
    </main>
  );
}

