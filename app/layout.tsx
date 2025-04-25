
export const metadata = {
  title: "MATA11 - TechFarm",
  description: "Token Verde com lastro ambiental e rentabilidade garantida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 font-sans">
        <header className="bg-green-700 text-white py-4 px-6 shadow">
          <h1 className="text-2xl font-bold">Projeto MATA11</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-100 text-sm text-center py-4 mt-10 border-t">
          &copy; {new Date().getFullYear()} TechFarm - Soluções Tecnológicas para o Agronegócio
        </footer>
      </body>
    </html>
  );
}
