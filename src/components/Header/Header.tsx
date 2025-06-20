"use client";

import Image from "next/image";
import styles from "./Header.module.css"; // Importa o CSS Module

export default function Header() {
    return (
        // O container <header> será o nosso flex container principal
        <header className={styles.header}>
            {/* O "header-spacer" pode ser ajustado ou removido se não for mais necessário para espaçamento */}
            {/* Se você tem um fundo fixo e ele precisa ir até o topo, um spacer pode ser útil.
                Caso contrário, o padding no header resolve.
            */}
            <div className={styles["header-spacer"]} />

            {/* Container do ícone - agora com a classe para posicionamento à esquerda */}
            {/* Adicionamos styles.logo-container para estilos específicos do logo */}
            <div className={styles['logo-container']}>
                <Image
                    src="/icons/LogoLandingPage.png"
                    alt="Logo"
                    width={150} // Reduzi o tamanho inicial para ser mais típico de um ícone de header
                    height={100} // Ajuste conforme o tamanho real do seu ícone no header
                    className="object-contain object-center"
                />
            </div>

            {/* Se você tiver outros elementos no header (ex: botões, nav), eles viriam aqui.
                Como não foram fornecidos, o header ficará apenas com o logo à esquerda.
            */}
        </header>
    );
}