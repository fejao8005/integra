# Integra Atelier de Interiores

Site institucional do Integra Atelier de Interiores, estúdio de design de interiores fundado por Mara Meloni.

## 🚀 Deploy

Este projeto está configurado para deploy automático no **Vercel** (gratuito).

### Deploy Rápido

1. **Criar repositório no GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/SEU-USUARIO/integra-atelier-site.git
   git branch -M main
   git push -u origin main
   ```

2. **Conectar no Vercel:**
   - Acesse https://vercel.com/new
   - Importe o repositório do GitHub
   - Framework: Vite (detectado automaticamente)
   - Clique em Deploy

3. **Pronto!** Seu site estará online em `https://seu-projeto.vercel.app`

📖 Veja o guia completo em [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md)

---

## 🛠️ Desenvolvimento Local

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ImageWithFade.tsx
│   │   └── RevealOnScroll.tsx
│   ├── pages/           # Páginas do site
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Methodology.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── projetos/        # Fotos dos projetos reais
│   └── favicon.svg
├── context/             # Material de referência (briefing, manual, fotos)
├── vercel.json          # Configuração do Vercel
└── package.json
```

---

## 🎨 Identidade Visual

- **Cores:** Paleta oficial do manual de identidade visual
- **Tipografia:** Jost (Google Fonts)
- **Logo:** SVG customizado com linha dourada decorativa

---

## 📄 Páginas

| Página | URL | Descrição |
|--------|-----|-----------|
| Home | `/` | Apresentação, tipos de projeto, bio da Mara |
| Projetos | `/projects` | Portfólio com categorias |
| Quem Somos | `/about` | História, visão e biografia |
| Metodologia | `/methodology` | Processo em 4 etapas |
| Contato | `/contact` | Formulário e informações de contato |

---

## 📞 Contato do Atelier

- **Email:** mara@integraateliedeinteriores.com.br
- **Telefone:** 11 94340-0222
- **Instagram:** @Integraatelierdeinteriores
