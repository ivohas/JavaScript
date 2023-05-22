import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

const endpoint={
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
    // may have more endpoins or have one different
}
//  there can be difference in pasword or email 
export async function login(email, password){
    const { _id, email: resultEmail, accessToken} = await post('/users/login', { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function register(email, password){
    const { _id, email: resultEmail, accessToken} = await post('/users/register', { email, password });

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function logout(){
    get('/users/logout');
    clearUserData();
}