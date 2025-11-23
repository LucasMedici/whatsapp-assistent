import { Router, Request, Response } from 'express';
import { createUser, findUserByEmail, updateUserName } from '../services/userService';
import { signLoginToken, verifyPassword, hashPassword } from '../services/authService';


const router = Router();

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { name } = req.body;

    try {
        const updatedUser = await updateUserName(id, { name });
        res.json(updatedUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});




export default router;