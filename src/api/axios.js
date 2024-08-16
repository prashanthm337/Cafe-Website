import axios from 'axios';
import ApplicationStore from '../utils/localStorageUtil';
const token = ApplicationStore().getStorage('token');  
const id=ApplicationStore().getStorage('id');  
const id2=ApplicationStore().getStorage('id2');  
const user_email=ApplicationStore().getStorage('user_email');  
export default axios.create({
    baseURL:'http://localhost:3006/api',
    headers: {
        'Content-Type':'application/json',
        "authorization" : `Bearer:${token}`,
        "id":id,
        "id2":id2,
        "user_email":user_email
    } 
});