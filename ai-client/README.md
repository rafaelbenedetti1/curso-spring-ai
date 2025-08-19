# AI Client - Cliente React para API Kotlin

Uma aplicação React moderna para integração com uma API Kotlin de Inteligência Artificial, oferecendo três funcionalidades principais: chat com IA, geração de receitas e geração de imagens.

## 🚀 Funcionalidades

### 1. Chat com IA
- Interface de chat intuitiva
- Histórico de mensagens
- Indicador de digitação
- Suporte a Enter para enviar mensagens

### 2. Gerador de Receitas
- Formulário para ingredientes disponíveis
- Seleção de tipo de cozinha (italiana, chinesa, mexicana, etc.)
- Restrições alimentares (vegetariana, vegana, sem glúten, etc.)
- Botão para copiar receita gerada

### 3. Gerador de Imagens
- Campo para descrição da imagem
- Configurações de qualidade (padrão, HD, Ultra HD)
- Seleção de quantidade (1-4 imagens)
- Diferentes tamanhos (512x512, 1024x1024, retrato, paisagem)
- Visualização em modal
- Download das imagens geradas

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones modernos
- **React Scripts** - Scripts de desenvolvimento

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd ai-client
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a URL da API:
Crie um arquivo `.env` na raiz do projeto:
```env
REACT_APP_API_URL=http://localhost:8080
```

4. Execute a aplicação:
```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 🔧 Configuração da API

A aplicação espera que sua API Kotlin esteja rodando com os seguintes endpoints:

### Chat com IA
```
GET /ask-ai-options?prompt={texto}
```

### Gerador de Receitas
```
GET /recipe-creator?ingredients={ingredientes}&cuisine={cozinha}&dietaryRestrictions={restricoes}
```

### Gerador de Imagens
```
GET /generate-image?prompt={descricao}&quality={qualidade}&number={quantidade}&height={altura}&width={largura}
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ChatComponent.tsx      # Componente de chat
│   ├── RecipeComponent.tsx    # Componente de receitas
│   ├── ImageComponent.tsx     # Componente de imagens
│   └── Navigation.tsx         # Navegação principal
├── services/
│   └── api.ts                # Serviços de API
├── App.tsx                   # Componente principal
├── index.tsx                 # Ponto de entrada
└── index.css                 # Estilos globais
```

## 🎨 Interface

A aplicação possui uma interface moderna e responsiva com:

- **Navegação por abas** - Alternância fácil entre funcionalidades
- **Design responsivo** - Funciona em desktop e mobile
- **Feedback visual** - Indicadores de carregamento e estados
- **Cores temáticas** - Cada funcionalidade tem sua cor distintiva
- **Animações suaves** - Transições e hover effects

## 🔄 Estados da Aplicação

### Chat
- Lista de mensagens com timestamps
- Indicador de digitação da IA
- Validação de entrada

### Receitas
- Formulário com validação
- Estados de carregamento
- Exibição da receita gerada
- Funcionalidade de cópia

### Imagens
- Grid responsivo de imagens
- Modal para visualização
- Download individual
- Configurações avançadas

## 🚀 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `build/`.

## 🔍 Desenvolvimento

### Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm test` - Executa testes
- `npm run eject` - Ejecta do Create React App

### Variáveis de Ambiente

- `REACT_APP_API_URL` - URL base da API (padrão: http://localhost:8080)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas, abra uma issue no repositório.
