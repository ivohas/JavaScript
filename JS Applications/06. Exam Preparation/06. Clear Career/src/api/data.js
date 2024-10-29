import { del, get, post, put } from "./api.js";

// ***** create application sevice******//
export async function getAll(){
    return get('/data/offers?sortBy=_createdOn%20desc')
}
export async function createAlbum(data){
    return post('/data/offers',data)
}
export async function deleteJob(id){
return del('/data/offers/'+ id)
}
export async function getDetailsById(id){
 return get('/data/offers/' + id)
} 
export async function editAlbum(id, data){
 return put (`/data/offers/${id}`,data)
}