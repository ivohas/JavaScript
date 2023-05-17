import { getUserData } from "../util.js";

const host= 'http://localhost:3030'
async function request(method, url, data){
    const options= {
        method,
        headers:{}
    };
    if(data!==undefined){
        options.headers['Content-Type']='application/json'
        options.body= JSON.stringify(data)
    }

    const user= getUserData()

    if(user){
      options.headers['X-Authorization']= user.accessToken;
    }
    
    try {
        const response=await fetch(host+ url,options);

        if(response.status==204){
          return response
        }
      
        const result= await response.json();  
        if(response.ok==false){
            throw new Error(result.message)
        }

        return result

    } catch (err) {
        alert(err.message)
        throw err
    }
}

export const get = request.bind(null, 'get')
export const post = request.bind(null, 'post')
export const put = request.bind(null, 'put')
export const del = request.bind(null, 'delete')
