// **** IMPORTS *****//
import { html } from '../lib.js'
import { getAll } from '../api/data.js'
// Template for one thing
// Add info and user
const catalogTemp = (info) => html`
<li class="card">
    <img src="${info.imageUrl}" alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${info.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${info.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${info.sales}</span></p>
    <a class="details-btn" href="/catalog/${info._id}">Details</a>
</li>
`
// Template for full page 
const catalogsTemp = (info, hasUser) => html`
<section id="dashboard">
    <h2>Albums</h2>
    ${info.length > 0 ? html`
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
       ${info.map(i=>catalogTemp(i))}

    </ul>

    `: html`
    <h2>There are no albums added yet.</h2>
    `}


    <!-- Display an h2 if there are no posts -->

</section>

`
// FUNTION  
export async function showCatalog(ctx) {
    // create fucn in data.js 
    const info = await getAll()
    // rename info
    ctx.render(catalogsTemp(info, !!ctx.user))
}