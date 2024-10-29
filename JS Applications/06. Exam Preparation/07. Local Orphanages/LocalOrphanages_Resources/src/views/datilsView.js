// ***** IMPORT ****
import { html, nothing } from "../lib.js";
import { deleteElement, getDetailsById } from '../api/data.js'
// Tamplate
const detailsTemp = (info, owner, onDelete) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${info.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${info.title}</h2>
                <p class="post-description">Description:${info.description} ${info.address}</p>
                <p class="post-number">Phone number:${info.phone}</p>
                <p class="donate-Item">Donate Materials: 0</p>

                <!--Edit and Delete are only for creator-->
                <div class="btns">
                    <a href="/catalog/${info._id}" class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>

                    <!--Bonus - Only for logged-in users ( not authors )-->
                    <a href="#" class="donate-btn btn">Donate</a>
                </div>

            </div>
        </div>
    </div>
</section>
`
// function 
export async function showDetails(ctx) {
    const id = ctx.params.id
    // change name
    // fucn from data.js probably
    const info = await getDetailsById(id)
    debugger
    const owner = info._ownerId === ctx.user._id
    ctx.render(detailsTemp(info, owner, onDelete))

    async function onDelete() {

        const userConfirm = confirm('are you sure?')
        if (!userConfirm) {
            return
        }
        // create func in data.js for deling info
        await deleteElement(id)
        ctx.page.redirect('/catalog')
    }
}