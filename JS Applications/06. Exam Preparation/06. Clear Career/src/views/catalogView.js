// **** IMPORTS *****//
import { html } from '../lib.js'
import {getAll} from '../api/data.js'

// Template for one thing
// Add info and user
const catalogTemp = (info) => html`
   <div class="offer">
        <img src=${info.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${info.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${info.salary}</span></p>
        <a class="details-btn" href="/details/${info._id}">Details</a>
    </div>
`
// Template for full page 
const catalogsTemp = (info) => html`
<section id="dashboard">
    <h2>Job Offers</h2>

    <!-- Display a div with information about every post (if any)-->
    ${info.length>0?
        info.map(i=>catalogTemp(i))
        : html` <h2>No offers yet.</h2>`}
 
</section>

`
// FUNTION  
export async function showCatalog(ctx) {
    // create fucn in data.js 
    const info = await getAll()
    // rename info
    ctx.render(catalogsTemp(info, !!ctx.user))
}