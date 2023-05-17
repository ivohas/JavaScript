import {get} from './api.js'

export async function getAll(){
let url ='/data/pets?sortBy=_createdOn%20desc&distinct=name'
 return get(url)
}
export async function getById(id){

     return get('/data/pets'+ id )
}