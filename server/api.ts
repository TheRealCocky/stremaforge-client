const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
    method?: HttpMethod;
    body?: any;
    headers?: Record<string, string>;
}

async function fetcher(endpoint: string, options: FetchOptions = {}) {
    const { method = 'GET', body, headers = {} } = options;

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || `Erro na requisição ${endpoint}`);
    }

    return res.json();
}

export const api = {
    auth: {
        login: (data: { email: string; password: string }) =>
            fetcher('/auth/login', { method: 'POST', body: data }),
        register: (data: { name: string; email: string; password: string }) =>
            fetcher('/auth/register', { method: 'POST', body: data }),
    },

    users: {
        getAll: () => fetcher('/users'),
        getById: (id: string) => fetcher(`/users/${id}`),
        create: (data: { name: string; email: string; password: string }) =>
            fetcher('/users', { method: 'POST', body: data }),
    },

    videos: {
        getAll: async (token: string) => {
            const res = await fetch(`${BASE_URL}/videos/my`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                const error = await res.json().catch(() => ({}));
                throw new Error(error.message || "Erro ao buscar vídeos");
            }

            return res.json();
        },

        // Upload REAL (form-data, sem JSON)
        upload: async (data: FormData, token: string) => {
            const res = await fetch(`${BASE_URL}/videos/upload`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    // Importante: NÃO DEFINIR "Content-Type"
                },
                body: data,
            });

            if (!res.ok) {
                const error = await res.json().catch(() => ({}));
                throw new Error(error.message || "Erro ao fazer upload de vídeo");
            }

            return res.json();
        },

        // Manter o create antigo para URLs (se precisares)
        create: (data: { title: string; url: string; userId: string }) =>
            fetcher('/videos', { method: 'POST', body: data }),
    },

};

