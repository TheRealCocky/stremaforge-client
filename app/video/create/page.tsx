"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/server/api";

export default function CreatePage() {
    const router = useRouter();
    const { token } = useAuth();

    const [title, setTitle] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (!token) router.push("/auth/login");
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setError("Escolhe um vídeo!");
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const payload = JSON.parse(atob(token!.split(".")[1]));
            const userId = payload.sub;

            const form = new FormData();
            form.append("title", title);
            form.append("userId", userId);
            form.append("file", file);


            await api.videos.upload(form, token!); // 👉 agora usa a tua API centralizada

            setSuccess("Vídeo enviado com sucesso!");
            setTimeout(() => router.push("/video/getAll"), 1500);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full"
            >
                <h1 className="text-2xl font-bold mb-6">Upload de Vídeo</h1>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}

                <label className="block my-2">Título</label>
                <input
                    className="w-full border rounded p-2 dark:text-black"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label className="block my-2">Selecionar vídeo</label>
                <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="w-full border rounded p-2 dark:text-black"
                    placeholder="Insira o seu video aqui"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white mt-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </div>
    );
}


