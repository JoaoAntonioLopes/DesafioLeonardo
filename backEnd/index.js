import express from 'express';
import {closeDb,connectMongo} from './DB/db.js';
import { createUser } from './services/userServices.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

app.post('/User', async function (req, res) {

    //HTTP referente a criado!
    // o res vai mandar o conteúdo da resposta, este pode ser o caminho do estimulo
    const user = req.body;

    user['_id'] = user.cpf;

    try{
        await createUser(user);
        res.send('Usuário cadastrado!')
    }
    catch(e){
        res.status(400).send('Usuário já existe!');
    }
   
});

process.on('exit', ()=>{
    closeDb();
    console.log('Process Ended');
});

app.listen(3000, function () {
    console.log('Ready');
    connectMongo();

});
