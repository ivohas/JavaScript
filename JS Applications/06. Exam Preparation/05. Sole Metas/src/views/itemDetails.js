import {html, nothing} from '../lib.js'
import {getDetailsById, deleteElement} from '../api/data.js' 

const detailsTemp = (shoes,owner,onDelete,id) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="${shoes.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoes.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoes.release}</span></p>
            <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
            <p>Value: <span id="details-value">${shoes.value}</span></p>
        </div>

        ${owner?html`
          <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            <a href="/edit/${id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>
        
        `:nothing}
      
    </div>
</section>
`
export async function showDetails(ctx){
    const id = ctx.params.id
    const shoes= await getDetailsById(id)
    const owner= shoes._ownerId===ctx.user._id
    ctx.render(detailsTemp(shoes,owner,onDelete,id))
    
    async function onDelete(){

        const userConfirm=confirm('are you sure?')
        if(!userConfirm){
            return
        }
        await deleteElement(id)
        ctx.page.redirect('/catalog')
    }
}