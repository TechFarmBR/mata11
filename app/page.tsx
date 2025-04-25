
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-green-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Invista na Amazônia com Rentabilidade e Impacto Real
      </h1>
      <p className="text-lg max-w-2xl text-center">
        O <strong>token MATA11</strong> representa frações de áreas preservadas no coração do bioma amazônico,
        oferecendo rendimento mensal garantido e participação nos lucros da venda de créditos de carbono certificados.
      </p>
      <a
        href="https://mata11.vercel.app"
        className="mt-8 px-6 py-3 bg-green-700 text-white text-lg font-semibold rounded-xl hover:bg-green-800 transition"
      >
        Acessar Painel do Investidor
      </a>
    </main>
  );
}
