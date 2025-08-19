import React, { useState } from 'react';
import { ChefHat, Loader2, Copy, Check } from 'lucide-react';
import { apiService, RecipeRequest } from '../services/api';

const RecipeComponent: React.FC = () => {
  const [formData, setFormData] = useState<RecipeRequest>({
    ingredients: '',
    cuisine: 'any',
    dietaryRestrictions: 'none'
  });
  const [recipe, setRecipe] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const cuisineOptions = [
    { value: 'any', label: 'Qualquer' },
    { value: 'italian', label: 'Italiana' },
    { value: 'chinese', label: 'Chinesa' },
    { value: 'mexican', label: 'Mexicana' },
    { value: 'indian', label: 'Indiana' },
    { value: 'french', label: 'Francesa' },
    { value: 'japanese', label: 'Japonesa' },
    { value: 'brazilian', label: 'Brasileira' },
    { value: 'mediterranean', label: 'Mediterrânea' },
    { value: 'american', label: 'Americana' }
  ];

  const dietaryOptions = [
    { value: 'none', label: 'Nenhuma' },
    { value: 'vegetarian', label: 'Vegetariana' },
    { value: 'vegan', label: 'Vegana' },
    { value: 'gluten-free', label: 'Sem glúten' },
    { value: 'dairy-free', label: 'Sem lactose' },
    { value: 'low-carb', label: 'Baixo carboidrato' },
    { value: 'keto', label: 'Cetogênica' },
    { value: 'paleo', label: 'Paleo' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.ingredients.trim()) return;

    setIsLoading(true);
    setRecipe('');

    try {
      const response = await apiService.generateRecipe(formData);
      setRecipe(response);
    } catch (error) {
      setRecipe('Erro ao gerar receita. Verifique se os ingredientes foram fornecidos corretamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (recipe) {
      try {
        await navigator.clipboard.writeText(recipe);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Erro ao copiar texto:', error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
          <div className="flex items-center space-x-3">
            <ChefHat className="text-white h-6 w-6" />
            <h2 className="text-white text-xl font-semibold">Gerador de Receitas</h2>
          </div>
        </div>

        <div className="p-6">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
                Ingredientes Disponíveis *
              </label>
              <textarea
                id="ingredients"
                value={formData.ingredients}
                onChange={(e) => setFormData(prev => ({ ...prev, ingredients: e.target.value }))}
                placeholder="Ex: frango, arroz, tomate, cebola, alho..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                rows={3}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Separe os ingredientes por vírgula
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Cozinha
                </label>
                <select
                  id="cuisine"
                  value={formData.cuisine}
                  onChange={(e) => setFormData(prev => ({ ...prev, cuisine: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {cuisineOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-2">
                  Restrições Alimentares
                </label>
                <select
                  id="dietary"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {dietaryOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={!formData.ingredients.trim() || isLoading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Gerando receita...</span>
                </>
              ) : (
                <>
                  <ChefHat className="h-5 w-5" />
                  <span>Gerar Receita</span>
                </>
              )}
            </button>
          </form>

          {/* Recipe Result */}
          {recipe && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Receita Gerada</h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">
                  {recipe}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;
