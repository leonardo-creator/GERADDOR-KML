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
- 🗂️ **Entrada de dados flexível** - Suporte para entrada manual via textarea ou upload de arquivos Excel (.xlsx)
- 📁 **Geração automática** - Crie arquivos KML prontos para uso no Google Earth ou outras aplicações GIS
- 📈 **Suporte a Excel** - Importe dados diretamente de planilhas Excel com estrutura personalizável
- 🔄 **Dados enriquecidos** - Suporte a informações adicionais como status, tamanho de arquivo, tipo, data e previsão
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

### Método 1: Entrada Manual
1. **Prepare seus dados** no formato de colunas separadas por TAB:
```
Nome    Descrição    Latitude    Longitude
Ponto1  Descrição1   -11.7090    -49.0530
Ponto2  Descrição2   -11.7218    -49.0934
```

2. **Cole os dados** na área de texto da aplicação
3. **Visualize** a prévia dos dados na tabela
4. **Clique em "Gerar e Baixar KML"** para criar o arquivo

### Método 2: Upload de Excel (.xlsx)
1. **Prepare sua planilha Excel** com as seguintes colunas:
   - **Obrigatórias**: `name` (ou `nome`), `Latitude`, `Longitude`
   - **Opcionais**: `status`, `description`, `fileSize`, `fileType`, `date`, `predictionDate`

2. **Exemplo de estrutura**:
   | name         | status   | description | Latitude          | Longitude         | date              |
   |--------------|----------|-------------|-------------------|-------------------|-------------------|
   | IMG_1661.JPG | Pendente | hjkhjk      | -12.0394694444444 | -48.5382805555555 | 24/05/2025, 17:31 |
   | IMG_1663.JPG | Pendente | hjkhjk      | -12.0394638888889 | -48.5380861111111 | 24/05/2025, 17:31 |

3. **Faça upload** do arquivo usando o botão "Upload"
4. **Baixe um arquivo de exemplo** clicando em "Baixar Exemplo" se necessário
5. **Visualize** os dados importados na tabela
6. **Gere o KML** clicando em "Gerar e Baixar KML"

### 📋 Formato dos Dados

#### Entrada Manual (TAB-separated)
```
Nome    Descrição    Latitude    Longitude
Ponto 1    Descrição do ponto 1    -23.5505    -46.6333
Ponto 2    Descrição do ponto 2    -22.9068    -43.1729
```

#### Planilha Excel (.xlsx)
| Coluna | Obrigatória | Descrição | Exemplo |
|--------|-------------|-----------|---------|
| **name** / **nome** | ✅ | Nome do ponto | "IMG_1661.JPG" |
| **Latitude** / **latitude** | ✅ | Coordenada de latitude | -12.0394694444444 |
| **Longitude** / **longitude** | ✅ | Coordenada de longitude | -48.5382805555555 |
| **description** / **descricao** | ❌ | Descrição detalhada | "Descrição do ponto" |
| **status** | ❌ | Status atual | "Pendente" |
| **fileSize** | ❌ | Tamanho do arquivo | "5470.95 KB" |
| **fileType** | ❌ | Tipo do arquivo | "image/jpeg" |
| **date** | ❌ | Data de criação | "24/05/2025, 17:31:47" |
| **predictionDate** | ❌ | Data de previsão | "2025-06-10" |

> ⚠️ **Importante**: 
> - Para entrada manual: As colunas devem estar separadas por TAB (não espaços)
> - Para Excel: O sistema aceita variações nos nomes das colunas (ex: name/Name/nome/Nome)

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

## 🛠️ Tecnologias

### Core
- **Next.js 15.2.4** - Framework React para produção
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript 5** - JavaScript com tipagem estática

### UI & Styling
- **Tailwind CSS 3.4.17** - Framework CSS utilitário
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones SVG

### Data Processing
- **xlsx** - Biblioteca para leitura e escrita de arquivos Excel
- **@types/xlsx** - Tipagens TypeScript para xlsx

### Tools
- **ESLint** - Linting e formatação de código
- **PostCSS** - Processamento de CSS

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
