import { Router, Request, Response } from 'express';
import { createUser, findUserById, updateUserName } from '../services/userService';
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

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try{
        const user = await findUserById(id);
        if(!user) {
            return res.status(404).json({error: 'User not found'});
        }
        res.json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}) 




export default router;