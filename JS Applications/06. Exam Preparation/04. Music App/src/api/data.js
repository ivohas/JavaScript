import { del, get, post, put } from "./api.js";

// ***** create application sevice******//

const endpoints={
    'albums':"/data/albums",
    'getAllAlbums':'/data/albums?sortBy=_createdOn%20desc&distinct=name'
    
}
export async function createAlbum(data){

    return post(endpoints.albums,data)
}
export async function getAllAlbums(){
    return get(endpoints.getAllAlbums)
}
export async function getDetailsById(id){
    return get(endpoints.albums+ '/'+id)
}
export async function deleteAlbum(id){
    return del(endpoints.albums+ '/'+ id)
}
export async function editAlbum(id,data){

    return put(endpoints.albums+'/'+id,data)
}