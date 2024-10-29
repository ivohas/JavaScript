// ***** IMPORT *****

import { html } from "../lib.js"
import {editAlbum,getDetailsById} from '../api/data.js'
import { createSubmitHandler } from "../util.js"

// template 
// will have heandler 
const editTemp = (job,heandler) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${heandler} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" value=${job.title} />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${job.imageUrl} />
            <input type="text" name="category" id="job-category" placeholder="Category"  value=${job.category}/>
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"> ${job.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
             cols="50">${job.requirements} </textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${job.salary} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`

// functioin
export async function showEdit(ctx) {

    const id = ctx.params.id
    // rename and import creat fucn in data.js
    const job = await getDetailsById(id)
    ctx.render(editTemp(job, createSubmitHandler(onEdit)))

    async function onEdit(data) {

        // const will be diff find them in word
        const {
            title,
            imageUrl, 
            category, 
            description, 
            requirements, 
            salary
          
        } = data
        if (!title || !imageUrl || !category || !requirements || !salary || !description) {

            return alert("all fields is reqired")
        }
        // create func in data.js
        await editAlbum(id, data)
        // redirect may change 
        ctx.page.redirect(`/details/${id}`)
    }

}