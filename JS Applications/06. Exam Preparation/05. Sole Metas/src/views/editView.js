import { html } from "../lib.js";
import {editInfo, getDetailsById} from '../api/data.js' 
import {createSubmitHandler} from '../util.js'

const editTemp = (shoes,heandler) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${heandler} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" value=${shoes.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model"  value=${shoes.model}/>
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" value=${shoes.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" value=${shoes.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" value=${shoes.designer}/>
            <input type="text" name="value" id="shoe-value" placeholder="Value" value=${shoes.value}/>

            <button type="submit">post</button>
        </form>
    </div>
</section>
`
export async function showEdit(ctx){

    const id= ctx.params.id
    const shoes = await getDetailsById(id)
    ctx.render(editTemp(shoes,createSubmitHandler(onEdit)))

    async function onEdit(data){

        const {
            brand,
            model, 
            imageUrl, 
            release, 
            designer, 
            value
          
          }=data
          if(!brand||!model||!imageUrl||!release||!designer||!value){
            return alert("all fields is reqired")
        }
       await editInfo(id,data)
       ctx.page.redirect(`/catalog/${id}`)
    }

}