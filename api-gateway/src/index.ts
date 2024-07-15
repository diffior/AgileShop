import express from 'express';
import proxy from 'express-http-proxy';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/users', proxy('http://user-service:3000'));
app.use('/products', proxy('http://product-service:3000'));
app.use('/cart', proxy('http://cart-service:3000'));
app.use('/orders', proxy('http://order-service:3000'));
app.use('/payments', proxy('http://payment-service:3000'));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

