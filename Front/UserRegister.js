import axios from 'axios';

function sendUser(user){
    
        return new Promise((resolve, reject)=>{
                axios.post('http://localhost:3000/register', user)
                .then((response)=>{
                        resolve(response.data);
                })
                .catch((err)=>{
                        reject(err);
                })
        })
     
}
export {sendUser};