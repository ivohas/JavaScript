// ***** IMPORT *****

import { html } from "../lib.js"
import {editElement,getDetailsById} from '../api/data.js'
import { createSubmitHandler } from "../util.js"

// template 
// will have heandler 
const editTemp=()=> html`

` 

// functioin
export async function showEdit(ctx){

    const id= ctx.params.id
    // rename and import creat fucn in data.js
    const elements = await getDetailsById(id)
    ctx.render(editTemp(elements,createSubmitHandler(onEdit)))

    async function onEdit(data){

        // const will be diff find them in word
        const {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
          }=data
          if(!name||!imgUrl||!price||!releaseDate||!artist||!genre||!description){

            return alert("all fields is reqired")
        }
        // create func in data.js
       await editElement(id,data)
       // redirect may change 
       ctx.page.redirect(`/details/${id}`)
    }

}