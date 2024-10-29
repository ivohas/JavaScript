// ***** IMPORT ****
import { html, nothing } from "../lib.js";
import {deleteElement, getDetailsById} from '../api/data.js'
// Tamplate
const detailsTemp=()=> html`
/ imlpimante 
`
// function 
export async function showDetails(ctx){
    const id = ctx.params.id
    // change name
    // fucn from data.js probably
    const info= await getDetailsById(id)
    const owner= info._ownerId===ctx.user._id
    ctx.render(detailsTemp(info,owner,onDelete))
    
    async function onDelete(){

        const userConfirm=confirm('are you sure?')
        if(!userConfirm){
            return
        }
        // create func in data.js for deling info
        await deleteElement(id)
        ctx.page.redirect('/catalog')
    }
}