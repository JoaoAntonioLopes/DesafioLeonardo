import {findUser, saveUser} from "../DB/db.js";

async function userExist(id){
    const user = await findUser(id);
    console.log(id);
    console.log(user);
    return user != undefined && user != null;
}

export async function createUser(user){
    if(await userExist(user['_id'])){
        throw new Error('Usuário Existe!');
    }else{
        saveUser(user);
    }
}