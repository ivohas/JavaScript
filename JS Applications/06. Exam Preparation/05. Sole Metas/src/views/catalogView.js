import { html } from '../lib.js'
import { getAllShoes } from '../api/data.js'
// make it dynamic
const catalogTemp = (shoes) => html`
    <li class="card">
    <img src="${shoes.imageUrl}" alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoes.brand}n</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoes.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoes.value}</span>$</p>
    <a class="details-btn" href="/catalog/${shoes._id}">Details</a>
</li>
`
const catalogsTemp = (shoes, hasUser) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${shoes.length>0 ?
        html`
    <ul class="card-wrapper">
        ${shoes.map(s => catalogTemp(s))}

    </ul>`
    : html` <h2>There are no items added yet.</h2>`}

</section>

`

export async function showCatalog(ctx) {

    const shoes = await getAllShoes()
    ctx.render(catalogsTemp(shoes, !!ctx.user))
}