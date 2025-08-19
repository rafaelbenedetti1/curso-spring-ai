import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface RecipeRequest {
  ingredients: string;
  cuisine?: string;
  dietaryRestrictions?: string;
}

export interface ImageRequest {
  prompt: string;
  quality?: string;
  number?: number;
  height?: number;
  width?: number;
}

export const apiService = {
  // Chat com opções
  askAiWithOptions: async (prompt: string): Promise<string> => {
    const response = await api.get('/ask-ai', {
      params: { prompt },
    });
    return response.data;
  },

  // Gerador de receitas
  generateRecipe: async (request: RecipeRequest): Promise<string> => {
    const response = await api.get('/recipe-creator', {
      params: request,
    });
    return response.data;
  },

  // Gerador de imagens
  generateImage: async (request: ImageRequest): Promise<string[]> => {
    const response = await api.get('/generate-image', {
      params: request,
    });
    return response.data;
  },
};

export default api;
