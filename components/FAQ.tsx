
export default function FAQ() {
  return (
    <section className="bg-white py-16 px-6">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        Perguntas Frequentes
      </h3>
      <div className="max-w-3xl mx-auto space-y-8 text-left">
        <div>
          <h4 className="text-xl font-semibold text-green-700">O que é o token MATA11?</h4>
          <p className="text-gray-700">
            É um token ambiental emitido pela TechFarm, lastreado em hectares de floresta nativa preservada. Ele funciona como uma debênture digital com rentabilidade fixa e participação em créditos de carbono.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-green-700">Qual o valor mínimo para investir?</h4>
          <p className="text-gray-700">
            O investimento mínimo é de R$ 100, equivalente a uma fração de um hectare tokenizado.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-green-700">Quanto rende o token?</h4>
          <p className="text-gray-700">
            O MATA11 garante 3% ao mês de forma fixa e mais 3% adicionais ao final de 2,5 anos, com base na venda dos créditos de carbono.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-green-700">Posso vender meu token?</h4>
          <p className="text-gray-700">
            Sim, os tokens são transferíveis livremente. No entanto, a participação no lucro ambiental de 3% é válida apenas para quem mantiver o token durante 2,5 anos.
          </p>
        </div>
      </div>
    </section>
  );
}
