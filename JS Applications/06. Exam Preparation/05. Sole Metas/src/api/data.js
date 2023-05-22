import { del, get, post, put } from "./api.js";

// ***** create application sevice******//

export async function getAllShoes(){
    return get('/data/shoes?sortBy=_createdOn%20desc')
}
export async function getDetailsById(id){
    return get(`/data/shoes/${id}`)
}
export async function deleteElement(id){
return del(`/data/shoes/${id}`)
}
export async function createShoes(data){
    return post('/data/shoes',data)
}
export async function editInfo(id,data){
    return put(`/data/shoes/${id}`,data)
}