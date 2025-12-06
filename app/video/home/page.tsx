import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black font-sans">
            {/* Hero Section */}
            <header className="flex flex-col items-center justify-center text-center py-20 px-6 sm:px-16 bg-white dark:bg-zinc-900">

                <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 max-w-3xl">
                    StreamForge – O futuro do streaming de vídeos
                </h1>
                <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl">
                    Crie, gerencie e compartilhe vídeos de forma simples e eficiente.
                    StreamForge combina autenticação segura, upload de vídeos rápido e processamento inteligente para transformar a sua experiência digital.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                        href="/auth/register"
                        className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition w-full sm:w-auto text-center"
                    >
                        Começar Agora
                    </a>
                    <a
                        href="#learn-more"
                        className="px-6 py-3 rounded-full border border-zinc-700 dark:border-zinc-300 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition w-full sm:w-auto text-center"
                    >
                        Saiba Mais
                    </a>
                </div>
            </header>

            {/* Features Section */}
            <section id="learn-more" className="py-20 px-6 sm:px-16 bg-zinc-100 dark:bg-zinc-900">
                <h2 className="text-3xl font-semibold text-center text-black dark:text-white mb-12">
                    Funcionalidades
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Autenticação Segura</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Registre-se e faça login com segurança usando autenticação moderna e tokens JWT.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Upload e Criação de Vídeos</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Faça upload de vídeos e processe conteúdo de maneira rápida e confiável.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Visualização e Gestão</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Navegue pelos vídeos, organize conteúdos e compartilhe com facilidade.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Cloud Integration</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Integração com serviços de nuvem como Cloudinary para armazenar e servir vídeos com performance.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">API Simples</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Conecte-se facilmente com o backend via endpoints REST para autenticação, vídeos e usuários.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Design Responsivo</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            A interface se adapta a qualquer dispositivo, garantindo ótima experiência mobile e desktop.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer */}
            <footer className="py-12 px-6 sm:px-16 bg-white dark:bg-zinc-900 text-center">
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Pronto para começar? Crie sua conta e explore tudo que o StreamForge oferece.
                </p>
                <a
                    href="/auth/register"
                    className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                    Criar Conta
                </a>
            </footer>
        </div>
    );
}