import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Service is running');
});

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});
