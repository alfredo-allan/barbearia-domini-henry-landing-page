// app/page.tsx
import SlickCarouselComponent from '@/components/SlickCarouselComponent/SlickCarouselComponent';
import BarberInfo from '@/components/BarberInfo/BarberInfo';

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {/* O padding superior para afastar do Header.
                Ajuste o valor pt-16 (ou qualquer outro pt-X) conforme a altura do seu Header.
                É bom que ele esteja aqui, pois é um conteúdo específico da página.
            */}
            <div className="w-full pt-16">
                <SlickCarouselComponent />
            </div>

            {/* Adicione o componente BarberInfo aqui */}
            <BarberInfo />

            {/* Outros componentes da sua página, se houver */}
        </main>
    );
}