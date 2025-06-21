"use client";

import Lottie from 'lottie-react';
import { twMerge } from 'tailwind-merge';
import bigodeAnimationData from '../../../public/animations/bigode.json';
import pirulitoAnimationData from '../../../public/animations/barber-pole.json';
import Image from 'next/image';

// Importa o CSS Module
import styles from './BarberInfo.module.css';

export default function BarberInfo() {
    const handleContactClick = () => {
        const phoneNumber = "5511920531626";
        const message = encodeURIComponent("Olá! Gostaria de fazer um agendamento. Poderíamos conversar?");
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    // Função separada para o Instagram
    const handleInstaClick = () => {
        const instagramUrl = `https://www.instagram.com/domini_henry?igsh=MTNsdWpvcjByMWgzaQ==`;
        window.open(instagramUrl, '_blank');
    };

    return (
        <section className={twMerge(
            styles.barberInfoSection, // Aplicando a classe do módulo
            "py-12 px-4 sm:px-8 md:px-16 lg:px-32 text-white flex flex-col md:flex-row items-center justify-center gap-12"
        )}>
            {/* Seção de Texto */}
            <div className={twMerge(
                styles.textContainer, // Aplicando a classe do módulo
                "w-full md:w-1/2 flex flex-col items-start text-left space-y-6"
            )}>
                <h2 className={twMerge(
                    styles.title, // Aplicando a classe base do módulo para o título
                    styles.gradientTitle, // <--- GARANTINDO QUE A CLASSE DO GRADIENTE SEJA APLICADA AQUI
                    "text-4xl sm:text-5xl font-bold" // Removido 'text-blue-400' para permitir que o gradiente domine
                )}>
                    Agende Seu Horário Conosco!
                </h2>
                <p className={twMerge(
                    styles.paragraph, // Aplicando a classe do módulo
                    "text-lg text-gray-300 leading-relaxed"
                )}>
                    Com nosso aplicativo de agendamentos, você pode marcar seu corte de cabelo ou barba de forma rápida e conveniente, a qualquer hora e em qualquer lugar. Diga adeus às filas e otimize seu tempo!
                </p>
                <p className={twMerge(
                    styles.paragraph, // Aplicando a classe do módulo
                    "text-lg text-gray-300 leading-relaxed"
                )}>
                    Nosso app foi desenvolvido para simplificar sua experiência, oferecendo flexibilidade e controle total sobre seus agendamentos.
                </p>

                {/* Link para o Projeto Expo */}

                <div className="flex items-center gap-4"> {/* Container para o link e o Lottie */}
                    <a
                        // Caminho direto para o APK dentro da pasta 'public'.
                        // O atributo 'download' força o navegador a baixar o arquivo.
                        href="/apk/application-da93d50a-a7a8-448d-8828-b574186e4a48.apk"
                        download // <--- ADICIONADO: Este atributo força o download!
                        // REMOVIDO: target="_blank" e rel="noopener noreferrer" para evitar abrir nova aba
                        className={twMerge(
                            styles.expoLink,
                            // Se você quer que o texto do link também tenha o gradiente:
                            // styles.gradientTitle, 
                            "text-blue-500 hover:text-blue-400 underline text-lg font-semibold transition-colors duration-300"
                        )}
                    >
                        Baixe Nosso App !
                    </a>
                    <div className={styles.pirulito}>
                        <Lottie
                            animationData={pirulitoAnimationData} // <--- SEU ARQUIVO LOTTIE AQUI!
                            loop={true}
                            autoplay={true}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Área dos Ícones de Contato - Design Clean */}
                <div className="flex flex-col items-start mt-6"> {/* Use flex-col para empilhar verticalmente */}
                    <span className={styles.contato}>Entre em Contato</span>
                    <div className="flex items-center gap-4 mt-2"> {/* Um novo div para os ícones, com espaçamento no topo */}
                        {/* Ícone do WhatsApp */}
                        <Image
                            src="/icons/whatsapp.png"
                            alt="WhatsApp Icon"
                            width={35}
                            height={35}
                            className="cursor-pointer hover:scale-110 transition-transform duration-200"
                            onClick={handleContactClick}
                        />

                        {/* Ícone do Instagram */}
                        <Image
                            src="/icons/instagram.png"
                            alt="Instagram Icon"
                            width={35}
                            height={35}
                            className="cursor-pointer hover:scale-110 transition-transform duration-200"
                            onClick={handleInstaClick}
                        />
                    </div>
                </div>
                {/* --- FIM DA SEÇÃO DE CONTATO AJUSTADA --- */}

            </div>


            {/* Seção da Animação Lottie */}
            <div className={twMerge(
                styles.lottieContainer, // Aplicando a classe do módulo
                "w-full md:w-1/2 flex items-center justify-center"
            )}>
                <div className="{relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96}">
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