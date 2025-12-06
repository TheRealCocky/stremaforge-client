"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogIn, LogOut, UserPlus, Home, Video, PlusCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { token, logout } = useAuth();

    console.log("TOKEN DO CONTEXTO =>", token); // 🔥 Debug

    return (
        <nav className="bg-white dark:bg-zinc-900 shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-16 flex justify-between items-center h-16">

                {/* Logo */}
                <Link href="/video/home" className="text-2xl font-bold text-black dark:text-white">
                    StreamForge
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="/video/home" className="text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-1">
                        <Home size={18}/> Home
                    </Link>

                    <Link href="/video/getAll" className="text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-1">
                        <Video size={18}/> Vídeos
                    </Link>

                    {/* Usuário logado */}
                    {token && (
                        <>
                            <Link href="/video/create" className="text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-1">
                                <PlusCircle size={18}/> Criar Vídeo
                            </Link>

                            <button
                                onClick={logout}
                                className="text-red-500 hover:text-red-400 transition flex items-center gap-1"
                            >
                                <LogOut size={18}/> Sair
                            </button>
                        </>
                    )}

                    {/* Usuário deslogado */}
                    {!token && (
                        <>
                            <Link href="/auth/login" className="text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-1">
                                <LogIn size={18}/> Entrar
                            </Link>

                            <Link href="/auth/register" className="text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-1">
                                <UserPlus size={18}/> Criar Conta
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-black dark:text-white focus:outline-none"
                >
                    {isOpen ? <X size={26}/> : <Menu size={26}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-900 px-6 pt-3 pb-4 space-y-3">

                    <Link href="/video/home" className="block text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-2">
                        <Home size={20}/> Home
                    </Link>

                    <Link href="/video/getAll" className="block text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-2">
                        <Video size={20}/> Vídeos
                    </Link>

                    {token && (
                        <>
                            <Link href="/video/create" className="block text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-2">
                                <PlusCircle size={20}/> Criar Vídeo
                            </Link>

                            <button
                                onClick={logout}
                                className="block text-red-500 hover:text-red-400 transition flex items-center gap-2"
                            >
                                <LogOut size={20}/> Sair
                            </button>
                        </>
                    )}

                    {!token && (
                        <>
                            <Link href="/auth/login" className="block text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-2">
                                <LogIn size={20}/> Entrar
                            </Link>

                            <Link href="/auth/register" className="block text-black dark:text-white hover:text-indigo-500 transition flex items-center gap-2">
                                <UserPlus size={20}/> Criar Conta
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}




