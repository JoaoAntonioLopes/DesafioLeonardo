import express from 'express';
import {saveUser, closeDb,connectMongo} from './db.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {

    const user = req.body;
    saveUser(user);
    res.send('gay');

    console.log('foi o post')
});

process.on('exit', ()=>{
    closeDb();
    console.log('foi o process on')
});

app.listen(3000, function () {
    console.log('Ready')
    connectMongo();

});

