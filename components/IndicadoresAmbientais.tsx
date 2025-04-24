
export default function IndicadoresAmbientais() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
        Indicadores Ambientais e Econômicos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h4 className="text-4xl font-bold text-green-700">1.539,85 ha</h4>
          <p className="text-gray-600 mt-2">Área total preservada tokenizada</p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h4 className="text-4xl font-bold text-green-700">13.705.917 tCO₂e</h4>
          <p className="text-gray-600 mt-2">Créditos estimados até 2050 (VCS 2587)</p>
        </div>
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h4 className="text-4xl font-bold text-green-700">+3% a.m.</h4>
          <p className="text-gray-600 mt-2">Rentabilidade fixa do token MATA11</p>
        </div>
      </div>
    </section>
  );
}
