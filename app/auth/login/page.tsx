'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/server/api';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const res = await api.auth.login({ email, password });

            if (res?.token) {
                login(res.token);
                setSuccess('Credências corretas!');
                setTimeout(() => router.push('/video/home'), 1500);
            } else {
                setError(res.message || 'Erro ao fazer login');
            }
        } catch (err: any) {
            setError(err.message || 'Erro inesperado');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Entrar</h1>

                {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
                {success && <p className="mb-4 text-green-500 text-center">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-black"
                            placeholder="email@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-black"
                            placeholder="********"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-500">
                    Não tem conta?{' '}
                    <a href="/auth/register" className="text-indigo-600 hover:underline">
                        cria uma aqui
                    </a>
                </p>
            </div>
        </div>
    );
}
