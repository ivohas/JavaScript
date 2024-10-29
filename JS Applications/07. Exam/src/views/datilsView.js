// ***** IMPORT ****
import { html, nothing } from "../lib.js";
import { deleteElement, getDetailsById } from '../api/data.js'
import { getUserData } from '../util.js';
// Tamplate
const detailsTemp = (info,hasUser, owner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src="${info.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${info.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${info.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${info.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${info.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${info.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">0</span></div>
         ${hasUser? html`
         <div id="action-buttons">
            ${!owner? html`
                <a href="javascript:void(0)" id="like-btn">Like</a>
            `: nothing}

            ${owner ? html`
             <a href="/edit/${info._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`:nothing}
           
        </div>
         
         `: nothing}
        
    </div>
</section>
`
// function 
export async function showDetails(ctx) {
    const id = ctx.params.id
    // change name
    // fucn from data.js probably
    const info = await getDetailsById(id)
    const user = getUserData();
    let owner = false;
    if (ctx.user) {
        owner = info._ownerId === ctx.user._id;
    }
    ctx.render(detailsTemp(info,user, owner, onDelete))

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