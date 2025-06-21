export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black  text-[var(--color-primary)]  py-4 text-center px-4 sm:px-8 md:px-16 lg:px-32">
            <p className="text-sm sm:text-base md:text-lg">
                © {currentYear} Desenvolvido Por Leap In Technology
            </p>
        </footer>
    );
}
