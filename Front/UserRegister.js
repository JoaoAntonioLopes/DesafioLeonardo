import axios from 'axios';
function sendUser(user){
    return axios.post('http://localhost:3000/register', user);
}
export {sendUser};