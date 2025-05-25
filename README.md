# 🗺️ KML Generator - Gerador de Pontos KML

<div align="center">
  <img src="./public/placeholder-logo.svg" alt="KML Generator Logo" width="120" height="120">
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38b2ac?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  
  <h3>🚀 Ferramenta moderna para visualizar e gerar arquivos KML a partir de dados tabulares</h3>
  
  <p>
    <strong>Desenvolvido por Leonardo Juvencio</strong> · 
    <a href="#demo">Demo</a> ·
    <a href="#features">Features</a> ·
    <a href="#instalacao">Instalação</a> ·
    <a href="#uso">Como usar</a>
  </p>
</div>

---

## ✨ Features

- 🎯 **Interface intuitiva** - Design moderno e responsivo com Tailwind CSS
- 📊 **Visualização em tempo real** - Veja seus dados organizados em uma tabela antes de gerar o KML
- 🗂️ **Processamento de dados** - Suporte para dados tabulares com nome, descrição, latitude e longitude
- 📁 **Geração automática** - Crie arquivos KML prontos para uso no Google Earth ou outras aplicações GIS
- 🌙 **Tema claro/escuro** - Interface adaptável com suporte a temas
- ⚡ **Performance otimizada** - Construído com Next.js 15 e React 19
- 🎨 **UI Components** - Biblioteca completa de componentes com Radix UI
- 📱 **Mobile-first** - Totalmente responsivo para todos os dispositivos

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 15.2.4** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Tipagem estática para JavaScript
- **Tailwind CSS 3.4.17** - Framework CSS utilitário

### UI/UX
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones modernos e consistentes
- **next-themes** - Sistema de temas integrado
- **class-variance-authority** - Gerenciamento de variantes CSS

### Formulários & Validação
- **React Hook Form 7.54.1** - Gerenciamento de formulários performático
- **Zod 3.24.1** - Validação de schemas TypeScript-first
- **@hookform/resolvers** - Resolvers para validação

### Funcionalidades Extras
- **date-fns 4.1.0** - Manipulação de datas moderna
- **react-day-picker** - Seletor de datas elegante
- **sonner** - Notificações toast minimalistas

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/gerador-pontos-kml.git
cd gerador-pontos-kml
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o projeto localmente**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 💡 Como Usar

### 1. Prepare seus dados
Organize seus dados no formato de colunas separadas por TAB:
```
Nome    Descrição    Latitude    Longitude
Ponto 1    Descrição do ponto 1    -23.5505    -46.6333
Ponto 2    Descrição do ponto 2    -22.9068    -43.1729
```

### 2. Cole os dados
- Cole seus dados na área de texto principal
- A tabela de visualização será atualizada automaticamente

### 3. Gere o KML
- Clique no botão "Gerar KML"
- O arquivo será baixado automaticamente
- Abra o arquivo no Google Earth ou sua aplicação GIS preferida

### 📋 Formato dos Dados

O sistema espera dados no seguinte formato:

| Coluna | Descrição | Exemplo |
|--------|-----------|---------|
| **Nome** | Nome do ponto | "Escritório Central" |
| **Descrição** | Descrição detalhada | "Sede da empresa" |
| **Latitude** | Coordenada de latitude | "-23.5505" |
| **Longitude** | Coordenada de longitude | "-46.6333" |

> ⚠️ **Importante**: As colunas devem estar separadas por TAB (não espaços)

## 🏗️ Estrutura do Projeto

```
📁 gerador-pontos-kml/
├── 📁 app/                   # App Router do Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicial
│   └── globals.css          # Estilos globais
├── 📁 components/           # Componentes React
│   ├── kml-generator.tsx    # Componente principal
│   ├── data-table.tsx       # Tabela de dados
│   ├── header.tsx           # Cabeçalho
│   ├── footer.tsx           # Rodapé
│   └── 📁 ui/               # Componentes de UI
├── 📁 lib/                  # Utilitários
│   ├── kml-utils.ts         # Funções para KML
│   └── utils.ts             # Utilitários gerais
├── 📁 hooks/                # React Hooks customizados
└── 📁 public/               # Arquivos estáticos
```

## 🎨 Personalização

### Temas
O projeto suporta temas claro e escuro. Para personalizar:

```tsx
// components/theme-provider.tsx
<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
```

### Cores
Personalize as cores no `tailwind.config.ts`:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Suas cores personalizadas
      }
    }
  }
}
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Outras plataformas
```bash
npm run build
npm start
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera a build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linting do código
```

## 🐛 Problemas Conhecidos

### Dependências
Se encontrar problemas com dependências, tente:
```bash
npm install --legacy-peer-deps
```

### Build
Para resolver conflitos de dependências no build:
```bash
npm ci --legacy-peer-deps
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Leonardo Juvencio**
- GitHub: [@leonardo-juvencio](https://github.com/leonardo-juvencio)
- LinkedIn: [Leonardo Juvencio](https://linkedin.com/in/leonardo-juvencio)

---

<div align="center">
  <p>Feito com ❤️ e ☕ por Leonardo Juvencio</p>
  <p>⭐ Deixe uma estrela se este projeto te ajudou!</p>
</div>
