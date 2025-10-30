import { Router, Request, Response } from "express";

const router = Router();

router.post("/messages", async (req: Request, res: Response) =>  {
    const { Body, From } = req.body;
    
    console.log("Mensagem recebida")
    console.log("De: ", From);
    console.log("Conteúdo: ", Body);

    // processar mensagem
    // salvar no banco

    return res.status(200).send("Mensagem recebida com sucesso");
});

export default router;