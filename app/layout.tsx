import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'MATA11 - TechFarm',
  description: 'Token ambiental com lastro em floresta amazônica preservada',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}