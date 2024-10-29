// *** IMPORTS ***

import { html } from '../lib.js'
import {createSubmitHandler} from '../util.js'
import { createAlbum} from '../api/data.js'
//  tamplate will have heandler and submit or click in form or btn 
const createTemp = (heandler) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form @submit=${heandler} class="create-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`
export async function showCreate(ctx) {
    ctx.render(createTemp(createSubmitHandler(onCreate)))

    async function onCreate(data) {

        //  will have diff in cosnt 
        const {
            title,
            imageUrl, 
            category, 
            description, 
            requirements, 
            salary
          
        }=data
        if (!title || !imageUrl || !category || !requirements || !salary || !description) {

            return alert("all fields is reqired")
        }
        // create func in data.js
        await createAlbum(data)
        ctx.page.redirect('/catalog')
    }
}