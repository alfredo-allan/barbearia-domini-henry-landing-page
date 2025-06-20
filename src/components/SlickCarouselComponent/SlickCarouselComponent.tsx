"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { twMerge } from 'tailwind-merge';

import styles from './SlickCarouselComponent.module.css';

interface CarouselImage {
    src: string;
    alt: string;
    id: number;
}

const IMAGES: CarouselImage[] = [
    { id: 1, src: "/images/ambiente.jpeg", alt: "Ambiente moderno da barbearia" },
    { id: 2, src: "/images/foto1.jpeg", alt: "Degradê Moderno e Disfarçado" },
    { id: 3, src: "/images/foto2.jpeg", alt: "Degradê" },
    { id: 4, src: "/images/foto3.jpeg", alt: "Corte infantil" },
    { id: 5, src: "/images/foto4.jpeg", alt: "Cabelo com Topete e Volume" },
    { id: 6, src: "/images/foto5.jpeg", alt: "Máscara facial" },
];

export default function SlickCarouselComponent() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: '30px', // Ajuste este valor conforme o "peek" desejado
        cssEase: "linear",
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlideIndex(newIndex),

        appendDots: (dots: React.ReactNode) => (
            <div className="absolute bottom-4 left-0 right-0">
                <ul className="flex justify-center space-x-2"> {dots} </ul>
            </div>
        ),
        customPaging: (i: number) => (
            <button
                className={twMerge(
                    "w-3 h-3 rounded-full border border-gray-400 transition-all duration-300",
                    i === currentSlideIndex ? "bg-blue-600 border-blue-600 scale-125" : "bg-transparent hover:bg-gray-700"
                )}
                aria-label={`Ir para slide ${i + 1}`}
            ></button>
        ),
    };

    return (

        <section className={styles.section}>

            {/* Container do Slider. Mantive as classes que garantem o comportamento correto. */}
            <div className="w-full relative overflow-hidden rounded-lg shadow-xl">
                <Slider ref={sliderRef} {...settings} className={twMerge("w-full", styles['carousel-container'])}>
                    {IMAGES.map((image) => (
                        <div key={image.id} className="px-2">
                            <div className="relative w-full overflow-hidden rounded-lg">
                                {/* O container da imagem. 'aspect-[4/3]' para a proporção. */}
                                <div className="relative w-full aspect-[2/3]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 768px) 90vw, 50vw"
                                        className="object-cover object-center rounded-lg"
                                        priority={image.id === IMAGES[0].id}
                                    />
                                    {/* Overlay de texto na imagem */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 text-white text-sm font-semibold flex items-end rounded-b-lg">
                                        <p>{image.alt}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}