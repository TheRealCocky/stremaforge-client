"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/server/api";
import Link from "next/link";
import { PlusCircle, VideoOff } from "lucide-react";
import { useRouter } from "next/navigation";

interface Video {
    id: string;
    title: string;
    url: string;
    userId: string;
}

export default function GetAllVideosPage() {
    const { token } = useAuth();
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const router = useRouter(); // agora funciona com next/navigation

    useEffect(() => {
        async function fetchVideos() {
            if (!token) {
                router.push("/auth/login");
                return;
            }

            try {
                const res = await api.videos.getAll(token);
                setVideos(res || []);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Erro ao buscar vídeos");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchVideos();
    }, [token, router]);

    return (
        <main className="pt-20 min-h-screen bg-gray-100 dark:bg-black px-4 sm:px-10 lg:px-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold text-black dark:text-white">
                    Meus Vídeos
                </h1>

                <Link
                    href="/video/create"
                    className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition shadow-md text-sm sm:text-base"
                >
                    <PlusCircle size={20} />
                    Adicionar Vídeo
                </Link>
            </div>

            {/* Loading */}
            {loading && (
                <p className="text-gray-700 dark:text-zinc-200">
                    Carregando vídeos...
                </p>
            )}

            {/* Error */}
            {error && (
                <p className="text-red-500">{error}</p>
            )}

            {/* Nenhum vídeo encontrado */}
            {!loading && videos.length === 0 && !error && (
                <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600 dark:text-gray-300">
                    <VideoOff size={50} className="mb-4 opacity-70" />
                    <p className="text-xl font-semibold">Nenhum vídeo encontrado</p>
                    <p className="text-sm opacity-80 mt-1">
                        Adicione um vídeo clicando no botão acima.
                    </p>
                </div>
            )}

            {/* Grid de vídeos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow hover:shadow-xl transition flex flex-col"
                    >
                        <h2 className="text-xl font-semibold mb-2 text-black dark:text-white break-words">
                            {video.title}
                        </h2>

                        {/* Preview do vídeo */}
                        <video
                            src={video.url}
                            controls
                            className="w-full rounded-lg mb-3 max-h-52 object-cover"
                        />

                        <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 dark:text-indigo-400 hover:underline break-all text-sm mt-auto"
                        >
                            Abrir vídeo
                        </a>

                        <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                            ID do usuário: {video.userId}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}






