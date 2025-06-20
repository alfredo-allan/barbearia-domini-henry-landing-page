"use client";

import Lottie from 'lottie-react';
import { twMerge } from 'tailwind-merge';
import bigodeAnimationData from '../../../public/animations/bigode.json'; // Ajuste o caminho se necessário (usei '@/public' para consistência)
import Image from 'next/image'; // Importar Image para o ícone do WhatsApp

// Importa o CSS Module
import styles from './BarberInfo.module.css';

export default function BarberInfo() {
    const handleContactClick = () => {
        const phoneNumber = "551199410260";
        const message = encodeURIComponent("Olá! Gostaria de fazer um agendamento. Poderíamos conversar?");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className={twMerge(
            styles.barberInfoSection,
            "py-12 px-4 sm:px-8 md:px-16 lg:px-32 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-12"
        )}>
            {/* Seção de Texto */}
            <div className={twMerge(
                styles.textContainer,
                "w-full md:w-1/2 flex flex-col items-start text-left space-y-6"
            )}>
                <h2 className={twMerge(
                    styles.title,
                    "text-4xl sm:text-5xl font-bold text-blue-400" // Corrigi para text-blue-400, estava text-white-400
                )}>
                    Agende Seu Horário Conosco!
                </h2>
                <p className={twMerge(
                    styles.paragraph,
                    "text-lg text-gray-300 leading-relaxed"
                )}>
                    Com nosso aplicativo de agendamentos, você pode marcar seu corte de cabelo ou barba de forma rápida e conveniente, a qualquer hora e em qualquer lugar. Diga adeus às filas e otimize seu tempo!
                </p>
                <p className={twMerge(
                    styles.paragraph,
                    "text-lg text-gray-300 leading-relaxed"
                )}>
                    Nosso app foi desenvolvido para simplificar sua experiência, oferecendo flexibilidade e controle total sobre seus agendamentos.
                </p>

                {/* Link para o Projeto Expo */}
                <a
                    href="https://expo.dev/@seu-usuario/seu-projeto" // <--- SUBSTITUA PELO SEU LINK REAL DO EXPO
                    target="_blank"
                    rel="noopener noreferrer"
                    className={twMerge(
                        styles.expoLink,
                        "text-blue-500 hover:text-blue-400 underline text-lg font-semibold transition-colors duration-300" // Corrigi para text-blue-500, estava text-blue-700
                    )}
                >
                    Baixe o App Android de agendamentos!
                </a>

                {/* Botão Entrar em Contato (WhatsApp) */}
                <button
                    onClick={handleContactClick}
                    className={twMerge(
                        styles.contactButton,
                        "mt-6  hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 flex items-center justify-center space-x-2" // Adicionado flex, items-center, justify-center e space-x-2
                    )}
                >
                    {/* Ícone do WhatsApp */}
                    <Image
                        src="/icons/whatsapp.png" // <--- CAMINHO PARA O SEU ÍCONE DO WHATSAPP (SVG ou PNG)
                        alt="WhatsApp Icon"
                        width={24} // Tamanho do ícone
                        height={24} // Tamanho do ícone
                        className="object-contain"
                    />
                    <span>Fale Conosco</span> {/* Texto simples ao lado do ícone */}
                </button>
            </div>

            {/* Seção da Animação Lottie */}
            <div className={twMerge(
                styles.lottieContainer,
                "w-full md:w-1/2 flex items-center justify-center"
            )}>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                    <Lottie
                        animationData={bigodeAnimationData}
                        loop={true}
                        autoplay={true}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
}