// *** IMPORTS ***
import { html } from '../lib.js'
import {createSubmitHandler} from '../util.js'
import { createElement} from '../api/data.js'
//  tamplate will have heandler and submit or click in form or btn 
const createTemp=()=> html`
//tempalte
`
export async function showCreate(ctx){
    ctx.render(createTemp(createSubmitHandler(onCreate)))

    async function onCreate(data){

        //  will have diff in cosnt 
        const {name,imgUrl,price,releaseDate,artist,genre,description}=data 
        if(!name||!imgUrl||!price||!releaseDate||!artist||!genre||!description){

            return alert("all fields is reqired")
        }
        // create func in data.js
        await createElement(data)
        // check place to redirect
        ctx.page.redirect('/catalog')
    }
}