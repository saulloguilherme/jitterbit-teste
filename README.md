# API de Pedidos

API REST para gerenciamento de pedidos desenvolvida em Node.js + Express + MongoDB.
Teste técnico para a Jitterbit.

As questões propostas estão no arquivo QUESTIONS.md

## Tecnologias
- Node.js
- Express
- MongoDB
- Mongoose
- Express Validator
- Swagger

## ▶️ Como rodar
```bash
npm install
docker compose up -d
npm start
```

## Endpoints
Criar pedido
POST /order

Buscar pedido por id
GET /order/:id

Listar pedidos
GET /order/list

Atualizar pedido
PUT /order/:id

Deletar pedido
DELETE /order/:id

## Estrutura do Projeto

src/
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── validators/
├── swagger/
└── config/


## ✨ Boas Práticas Aplicadas

✔ Arquitetura em camadas (Controller → Service → Model)
✔ Separação de responsabilidades
✔ Validação de entrada de dados
✔ Tratamento centralizado de erros
✔ Mapeamento de DTOs
✔ Documentação com Swagger