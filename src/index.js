import express from 'express';
import bodyParser from 'body-parser';
import userController from './controllers/user.js';
import Home from './pages/home.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

app.use('/', Home())

app.use('/user', userController);

app.listen(PORT, () => {
  console.log(`App rodando em http://localhost:${PORT}`);
});