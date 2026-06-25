# 🚀 Como publicar e atualizar o site da 3Dk

O site é **estático** (pasta `public/`). Os pedidos do formulário vão direto
para o **WhatsApp +55 11 94009-4766**, então não há servidor/banco para manter.

Vamos hospedar **de graça no Render**, conectado ao **GitHub**. Depois de
configurado, atualizar é só dar `git push`.

---

## Parte 1 — Enviar o código para o GitHub (uma vez só)

> O repositório Git local já está pronto (já fiz `git init` e o primeiro commit).

1. Crie uma conta em https://github.com (se ainda não tiver).
2. Clique em **New repository** (botão verde).
   - **Name:** `site-3dk` (ou o nome que quiser)
   - Deixe **público** ou privado, tanto faz.
   - **NÃO** marque "Add README" / .gitignore (já temos).
   - Clique em **Create repository**.
3. O GitHub vai mostrar uns comandos. Use estes, no terminal, dentro da pasta do projeto:

   ```bash
   git remote add origin https://github.com/SEU-USUARIO/site-3dk.git
   git push -u origin main
   ```

   (Troque `SEU-USUARIO` pelo seu usuário do GitHub.)

Pronto, o código está no GitHub.

---

## Parte 2 — Publicar no Render (uma vez só)

1. Crie uma conta em https://render.com — escolha **"Sign in with GitHub"**
   (assim ele já enxerga seus repositórios).
2. No painel, clique em **Add new → Static Site**.
3. Selecione o repositório `site-3dk`.
4. Preencha:
   - **Name:** `3dk` (vira parte do endereço, ex.: `3dk.onrender.com`)
   - **Branch:** `main`
   - **Build Command:** deixe **em branco**
   - **Publish Directory:** `public`
5. Clique em **Create Static Site**.

Em ~1 minuto o site estará no ar em algo como **https://3dk.onrender.com**.
É grátis, abre instantâneo e não "dorme".

---

## Parte 3 — Como atualizar o site (sempre que precisar)

Sempre que você mudar qualquer coisa (texto, foto, cor…):

```bash
git add .
git commit -m "descreva o que mudou"
git push
```

O Render detecta o push e **republica sozinho** em ~1 minuto. Só atualizar a página. ✅

---

## Testar no seu computador antes de publicar

Abra o terminal na pasta do projeto e rode:

```bash
npm start
```

Depois acesse **http://localhost:3000**. (Também dá para abrir o
`public/index.html` direto no navegador.)

---

## Domínio próprio (opcional, ex.: www.3dkimpressoes.com.br)

1. Registre o domínio (ex.: registro.br, ~R$40/ano).
2. No Render: **Settings → Custom Domains → Add Custom Domain**.
3. O Render mostra um registro **CNAME** para você cadastrar no painel do
   seu domínio. Pronto — em algumas horas ele funciona com HTTPS automático.

---

## Onde mexer em cada coisa

| Quero mudar...            | Arquivo                      |
|---------------------------|------------------------------|
| Textos / seções           | `public/index.html`          |
| Cores / layout            | `public/css/styles.css`      |
| Serviços, número WhatsApp | `public/js/main.js` (topo)   |
| Fotos da galeria          | `public/index.html` (galeria)|
