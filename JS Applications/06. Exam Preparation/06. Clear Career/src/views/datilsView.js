// ***** IMPORT ****

import { html,nothing } from "../lib.js";
import {deleteJob, getDetailsById} from '../api/data.js'

// Tamplate
const detailsTemp = (job,owner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${job.imageUrl}" alt="example1" />
        <p id="details-title">${job.title}</p>
        <p id="details-category">
            Category: <span id="categories">${job.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${job.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${job.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${job.requirements}</span>
            </div>
        </div>
        

        ${owner?html`<div id="action-buttons">
            <a href="/edit/${job._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>

            <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="" id="apply-btn">Apply</a>
        </div>`:nothing
        }
        
    </div>
</section>

`
// function 
export async function showDetails(ctx) {
    const id = ctx.params.id
    // change name
    // fucn from data.js probably
    const job = await getDetailsById(id)
    const owner = job._ownerId === ctx.user._id;
    ctx.render(detailsTemp(job,owner, onDelete))

    async function onDelete() {

        const userConfirm = confirm('are you sure?')
        if (!userConfirm) {
            return
        }
        // create func in data.js for deling info
        await deleteJob(id)
        ctx.page.redirect('/catalog')
    }
}

