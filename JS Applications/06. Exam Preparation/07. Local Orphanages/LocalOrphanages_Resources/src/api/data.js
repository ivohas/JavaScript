import { del, get, post, put } from "./api.js";

// ***** create application sevice******//

export async function getAll(){

    return get('/data/posts?sortBy=_createdOn%20desc')
}
export async function deleteElement(id){
    return del('/data/posts/'+ id)
}
export async function getDetailsById(id){
    return get('/data/posts/'+ id)
}