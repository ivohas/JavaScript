// **** IMPORTS *****//
import { html } from '../lib.js'
import { getAll } from '../api/data.js'
// Template for one thing
// Add info and user
const catalogTemp = (info) => html`
<div class="post">
    <h2 class="post-title">${info.title}</h2>
    <img class="post-image" src="${info.imageUrl}" alt="Kids clothes">
    <div class="btn-wrapper">
        <a href="/catalog/${info._id}" class="details-btn btn">Details</a>
    </div>
</div>
`
// Template for full page 
const catalogsTemp = (info, hasUser) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    ${info.length > 0 ?
    html`
    <div class="all-posts">
        ${info.map(i=> catalogTemp(i))}
    </div>
    `: html`
    <h1 class="title no-posts-title">No posts yet!</h1>`}  
</section>

`
// FUNTION  
export async function showCatalog(ctx) {
    // create fucn in data.js 
    const info = await getAll()
    // rename info
    ctx.render(catalogsTemp(info, !!ctx.user))
}