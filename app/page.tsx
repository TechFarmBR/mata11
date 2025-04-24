import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <CTA />
    </>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-green-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Projeto MATA11</h1>
      <p className="text-lg max-w-xl text-center">
        Esta é a landing page oficial do token MATA11 – uma debênture verde com lastro em floresta amazônica preservada.
      </p>
      <a
        href="https://mata11.vercel.app"
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Acessar Painel do Investidor
      </a>
    </main>
  );
}
