import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Loading() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Carregando desafio...</div>
      </div>
      <Footer />
    </>
  );
}