# 💬 Jorge - Assistent

Um assistente pessoal de finanças via Jorge Assistent APP.

O **Jorge - Assistent** permite registrar gastos e gerar relatórios apenas conversando com o Jorge, como:  
> “Gastei 50 reais no mercado”  
> “Gere um relatório com meus gastos dos últimos 3 mêses”

As mensagens são recebidas por um **webhook** integrado com a aplicação **React Native**, processadas por um servidor **Node.js (Express)** e armazenadas em um banco **PostgreSQL** via **Prisma ORM**.

## 🚀 Tecnologias
- Node.js + Express  
- TypeScript  
- Prisma ORM  
- PostgreSQL  
- OpenAI API
- ngrok (para ambiente local)

## 📦 Execução local
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o .env com suas credenciais do banco e Twilio
   
4. Inicie o servidor:
     ```bash
      npm run dev
      ```
4. Exponha o servidor local com o ngrok:
   ```bash
   ngrok http 3000
   ```

## ▲ Prisma
1. Sincronize o banco com as migrations
   ```bash
   npx prisma migrate dev
   ```
