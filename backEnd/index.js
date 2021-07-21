import express from 'express';
import {findUser, saveUser, closeDb,connectMongo} from './db.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async function (req, res) {

    //HTTP referente a criado!
    // o res vai mandar o conteúdo da resposta, este pode ser o caminho do estimulo
    const user = req.body;
    const userExist =  await findUser(user);
    console.log(userExist);
    if(userExist.length == 0){
        console.log("NewUser");
        saveUser(user);
        res.send('Usuário cadastrado');
    }else{
        console.log('OldUser');
        res.send('Usuário já existe');      
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

