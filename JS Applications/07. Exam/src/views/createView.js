// *** IMPORTS ***
import { html } from '../lib.js'
import { createSubmitHandler } from '../util.js'
import { createElement } from '../api/data.js'
//  tamplate will have heandler and submit or click in form or btn 
const createTemp = (heandler) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${heandler} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

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
             singer,
            album,
            imageUrl,
            release,
            label,
            sales
        } = data
        if (!singer || !album || !imageUrl || !release || !label || !sales) {

            return alert("all fields is reqired")
        }
        // create func in data.js
        await createElement(data)
        // check place to redirect
        ctx.page.redirect('/catalog')
    }
}