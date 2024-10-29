import { del, get, post, put } from "./api.js";

// ***** create application sevice******//
export async function getAll(){
    return get('/data/albums?sortBy=_createdOn%20desc')
}
export async function getDetailsById(id){
    return get(`/data/albums/${id}`)
}
export async function deleteElement(id){
    return del (`/data/albums/${id}`)
}
export async function editElement(id, data){
    return put(`/data/albums/${id}`,data)
}
export async function createElement(data){
    return post('/data/albums', data)
}