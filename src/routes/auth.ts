import { Router, Request, Response } from 'express';
import { createUser, findUserByEmail } from '../services/userService';
import { signLoginToken, verifyPassword, hashPassword } from '../services/authService';


const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
    const { email, password, phone } = req.body;
    if(!email || !password || !phone) {
        return res.status(400).json({ error: "Email, password, and phone are required" });
    }

    try{
        const existingUser = await findUserByEmail(email);
        if(existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }

        const hashedPassword = await hashPassword(password);
        const user = await createUser({ email, password: hashedPassword, phone });
        return res.status(201).json({ id: user.id, email: user.email, phone: user.phone });
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
})


router.post('/login', async (req: Request, res: Response) => {
    console.log("to no login com esses dados")
    console.log(req.body)
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try{
        const token = await signLoginToken(email, password);
        if(!token) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        return res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: "Internal server error" });
    }
})

export default router;