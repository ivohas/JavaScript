import { deleteAlbum, getDetailsById } from "../api/data.js"
import { html,nothing } from "../lib.js"

const detailsTemp = (album, owner,onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre:${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>${album.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${owner?
                html` 
                <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>`
            :nothing}
           
        </div>
    </div>
</section>
`
export async function showDetails(ctx){
    const id = ctx.params.id
    const album= await getDetailsById(id)
    const owner= album._ownerId===ctx.user._id
    ctx.render(detailsTemp(album,owner,onDelete))
    
    async function onDelete(){

        const userConfirm=confirm('are you sure?')
        if(!userConfirm){
            return
        }
        await deleteAlbum(id)
        ctx.page.redirect('/catalog')
    }
}