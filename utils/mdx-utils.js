import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return [data]
}

export const getPostBySlug = async (id) => {
    try {
        // Fazendo a requisição para buscar o post específico pelo ID
        const { data } = await api.get(`/posts?id=eq.${id}`);

        if (data && data.length > 0) {
            return data[0]; // Retorna o primeiro post encontrado
        }

        return null;
    } catch (error) {
        console.error('Erro na requisição:', error);
        return null;
    }
}
