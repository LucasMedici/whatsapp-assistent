import { Router, Request, Response } from 'express';
import { processUserMessage } from '../services/chatService';
import { PrismaClient } from '../generated/prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/messages', async (req: Request, res: Response) => {
  const { Body, From } = req.body;

  console.log('Mensagem recebida');
  console.log('De: ', From);
  console.log('Conteúdo: ', Body);

  try {
    const messageProcessed = await processUserMessage(Body);
    
    if (messageProcessed.error) {
      console.warn('Erro no processamento:', messageProcessed.error);
      return res.status(400).json({ error: 'Não foi possível processar a mensagem' });
    }

    try {
      await prisma.transaction.create({
        data: {
          phone: From,
          type: messageProcessed.tipo,
          amount: messageProcessed.valor,
          category: messageProcessed.categoria,
          description: messageProcessed.comentario,
          messageId: messageProcessed.id || null,
        },
      });
      console.log('Mensagem salva no banco com sucesso');
    } catch (dbError) {
      console.error('Erro ao salvar no banco:', dbError);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    return res.status(200).json(messageProcessed);
  } catch (error) {
    console.error('Erro no webhook:', error);
    return res.status(500).json({ error: 'Erro ao processar a mensagem' });
  }
});

export default router;
