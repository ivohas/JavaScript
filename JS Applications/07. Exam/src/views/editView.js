// ***** IMPORT *****

import { html } from "../lib.js"
import { editElement, getDetailsById } from '../api/data.js'
import { createSubmitHandler } from "../util.js"

// template 
// will have heandler 
const editTemp = (element, heandler) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${heandler} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${element.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" value=${element.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${element.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" value=${element.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" value=${element.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${element.sales} />

            <button type="submit">post</button>
        </form>
    </div>
</section>


`

// functioin
export async function showEdit(ctx) {

    const id = ctx.params.id
    // rename and import creat fucn in data.js
    const elements = await getDetailsById(id)
    ctx.render(editTemp(elements, createSubmitHandler(onEdit)))

    async function onEdit(data) {

        // const will be diff find them in word
        const {
            singer,
            album,
            imageUrl,
            release,
            label,
            sales

        } = data
        if (!singer || !album || !imageUrl || !release || !label || !sales ) {

            return alert("all fields is reqired")
        }
        // create func in data.js
        await editElement(id, data)
        // redirect may change 
        ctx.page.redirect(`/catalog/${id}`)
    }

}