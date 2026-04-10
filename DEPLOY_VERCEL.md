# 🚀 Guia de Deploy no Vercel

## Pré-requisitos
- Conta no Vercel (gratuita): https://vercel.com/signup
- Git instalado na sua máquina

## Passo 1: Preparar o Repositório Local

Abra o terminal na pasta do projeto e execute:

```bash
cd "c:\Users\User\Downloads\PROJETO INTEGRA\PROJETO INTEGRA SITE INSTITUCINAL"

# Inicializar o Git (se ainda não tiver)
git init

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "Site Integra Atelier - versão inicial"
```

## Passo 2: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `integra-atelier-site` (ou o que preferir)
3. Deixe como **Público** ou **Privado** (recomendado: Privado)
4. **NÃO** marque "Initialize with README"
5. Clique em "Create repository"

## Passo 3: Conectar Local ao GitHub

Copie os comandos que o GitHub vai mostrar na tela após criar o repositório:

```bash
git remote add origin https://github.com/SEU-USUARIO/integra-atelier-site.git
git branch -M main
git push -u origin main
```

## Passo 4: Deploy no Vercel

### Opção A: Via Dashboard (Recomendado)

1. Acesse: https://vercel.com/new
2. Clique em **"Import Git Repository"**
3. Conecte sua conta do GitHub (se ainda não conectou)
4. Selecione o repositório `integra-atelier-site`
5. **Configurações:**
   - Framework Preset: **Vite** (já detectado automaticamente)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Clique em **"Deploy"**
7. Aguarde ~30 segundos
8. **Pronto!** Você receberá uma URL como: `https://integra-atelier-site.vercel.app`

### Opção B: Via CLI (Alternativo)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

## Passo 5: Configurar Domínio Personalizado (Opcional)

Quando quiser migrar para a hospedagem oficial da cliente:

1. No dashboard do Vercel, vá em **Settings > Domains**
2. Adicione o domínio da cliente (ex: `integraateliedeinteriores.com.br`)
3. Configure o DNS conforme instruções do Vercel

---

## 📋 Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado (push)
- [ ] Projeto conectado no Vercel
- [ ] Deploy realizado com sucesso
- [ ] URL do Vercel compartilhada com a cliente
- [ ] Testar em desktop e mobile
- [ ] Verificar todas as páginas e links
- [ ] Testar formulário de contato

---

## 🔧 Ajustes Futuros

Para atualizar o site no futuro:

```bash
# Fazer alterações nos arquivos
git add .
git commit -m "Descrição da alteração"
git push

# O Vercel faz deploy automático a cada push!
```

---

## 📱 URLs Importantes

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/SEU-USUARIO/integra-atelier-site
- **Site no Ar:** https://integra-atelier-site.vercel.app (após deploy)
