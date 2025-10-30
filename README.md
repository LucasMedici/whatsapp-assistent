# 💬 Whatsapp - Assistent

Um assistente pessoal de finanças via WhatsApp.

O **Whatsapp - Assistent** permite registrar gastos e lembretes apenas enviando mensagens de WhatsApp, como:  
> “Gastei 50 reais no mercado”  
> “Me lembre de desligar o forno em 10 minutos”

As mensagens são recebidas por um **webhook** integrado com a **Twilio**, processadas por um servidor **Node.js (Express)** e armazenadas em um banco **PostgreSQL** via **Prisma ORM**.

## 🚀 Tecnologias
- Node.js + Express  
- TypeScript  
- Prisma ORM  
- PostgreSQL  
- Twilio API (Webhook WhatsApp)  
- ngrok (para ambiente local)

## 📦 Execução local
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o .env com suas credenciais do banco e Twilio
3. Inicie o servidor:
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