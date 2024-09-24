import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));

});

app.get('/shop', (req, res) => {

    res.sendFile(path.join(__dirname, 'shop.html'));

});

app.listen(PORT, () =>{

    console.log((`El servidor esta escuchando en el puerto ${PORT}`));

});