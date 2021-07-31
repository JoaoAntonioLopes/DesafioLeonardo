import axios from 'axios';

function sendUser(user){
    
        return new Promise((resolve, reject)=>{
                axios.post('http://localhost:3000/User', user, {
                        validateStatus: (status) => status == 200})
                .then((response)=>{
                        resolve(response.data);
                })
                .catch((err)=>{
                        resolve(err);                       
                })
        })
     
}
export {sendUser};