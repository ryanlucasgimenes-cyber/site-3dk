# 3Dk Impressões — Site

Site institucional da **3Dk Impressões** (impressão 3D personalizada).
Site **estático** (HTML/CSS/JS), com formulário que envia os pedidos
direto para o **WhatsApp**.

## Estrutura

```
Dreeku/
├── public/                # O site (é isto que vai para o ar)
│   ├── index.html
│   ├── css/styles.css
│   └── js/main.js         # serviços + número do WhatsApp ficam no topo
├── server.js              # servidor LOCAL opcional (para testar)
└── PUBLICAR.md            # passo a passo para publicar e atualizar
```

## Rodar localmente

```bash
npm install   # só na primeira vez
npm start     # http://localhost:3000
```

(ou abra `public/index.html` direto no navegador)

## Publicar / atualizar

Veja o guia completo em **[PUBLICAR.md](PUBLICAR.md)**.
Resumo: código no GitHub → hospedado no Render (site estático grátis) →
atualizar é só `git push`.
