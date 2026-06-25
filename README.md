# 3Dk Impressões — Site institucional

Site profissional para a **3Dk Impressões** (impressão 3D personalizada), com
front-end responsivo e back-end em Node.js/Express.

## Estrutura

```
Dreeku/
├── server.js              # Back-end Express (API + serve o site)
├── package.json
├── public/                # Front-end
│   ├── index.html
│   ├── css/styles.css
│   └── js/main.js
└── data/
    └── orcamentos.json    # Pedidos de orçamento salvos (criado em runtime)
```

## Como rodar

```bash
npm install      # só na primeira vez
npm start        # http://localhost:3000
```

Para desenvolvimento com reload automático:

```bash
npm run dev
```

## API

| Método | Rota               | Descrição                                        |
|--------|--------------------|--------------------------------------------------|
| GET    | `/api/servicos`    | Lista os serviços (o front monta os cards)       |
| POST   | `/api/orcamento`   | Recebe e valida um pedido de orçamento           |
| GET    | `/api/orcamentos`  | Lista os pedidos recebidos (uso administrativo)  |

Os pedidos são validados no servidor e gravados em `data/orcamentos.json`.

## Próximos passos sugeridos

- Trocar o número do WhatsApp e os contatos (estão como placeholder).
- Enviar os orçamentos por e-mail (ex.: Nodemailer) ou integrar a um banco de dados.
- Adicionar uma galeria de fotos das peças reais.
