import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black font-sans">
            {/* Hero Section */}
            <header className="flex flex-col items-center justify-center text-center py-20 px-6 sm:px-16 bg-white dark:bg-zinc-900">

                <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 max-w-3xl">
                    StreamSentra – O futuro do streaming de vídeos
                </h1>
                <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl">
                    Crie, gerencie e compartilhe vídeos de forma simples e eficiente.
                    StreamSentra combina autenticação segura, upload de vídeos rápido e processamento inteligente para transformar a sua experiência digital.
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
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Crie Sua Conta com Facilidade</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Comece em poucos segundos: basta criar sua conta e você já pode usar a plataforma sem complicações.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Envie Seus Vídeos</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Faça upload de vídeos direto do seu dispositivo e deixe o resto com a nossa plataforma.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Assista e Gerencie</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Veja seus vídeos quando quiser, organize como preferir e acompanhe tudo em um só lugar.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Tudo Salvo com Segurança</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Seus vídeos ficam guardados com segurança na nuvem, sem risco de perder seus arquivos.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Interface Fácil de Usar</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            A plataforma foi criada para ser simples e rápida, funcionando bem no computador e no celular.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Compartilhe Conteúdo</h3>
                        <p className="text-zinc-700 dark:text-zinc-300">
                            Compartilhe seus vídeos com amigos, seguidores ou clientes de forma prática.
                        </p>
                    </div>

                </div>
            </section>

            {/* Call to Action Footer */}
            <footer className="py-12 px-6 sm:px-16 bg-white dark:bg-zinc-900 text-center">
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Pronto para começar? Crie sua conta e explore tudo que o StreamSentra oferece.
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