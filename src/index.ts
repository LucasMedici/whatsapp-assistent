import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import webhookRoutes from './routes/webhook';
import authRouter from './routes/auth';

const app = express();
app.use(express.json());

app.get('/serverstatus', (req, res) => {
  res.send('on');
});

app.use('/webhook', webhookRoutes);
app.use('/auth', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
