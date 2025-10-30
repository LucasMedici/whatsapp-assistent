import express from 'express';
import dotenv from 'dotenv';
import webhookRoutes from './routes/webhook';

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/serverstatus', (req, res) => {
  res.send('on');
});

app.use('/webhook', webhookRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
