import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';

const shoeTemplate = (shoe, userId) => html `
    <li class="card">
        <img src="${shoe.imageUrl}" alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
        </p>
        <p>
            <strong>Model: </strong
            ><span class="model">${shoe.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>

        ${userId ? html `<a class="details-btn" href="/details/${shoe._id}">Details</a>` : html ``}
    </li>
`

const searchTemplate = (shoesList, userId, ctx) => html `
     <!-- Search Page (Only for logged-in users) -->
     <section id="search">
        <h2>Search by Brand</h2>

        <form class="search-wrapper cf"  @submit=${e => onSearch(e, ctx)}>
        <input
            id="#search-input"
            type="text"
            name="search"
            placeholder="Search here..."
            required
        />
        <button type="submit">Search</button>
        </form>

        <h3>Results:</h3>

        <div id="search-container">
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${shoesList.length === 0 ? html`<h2>There are no results found.</h2>` : shoesList.map(shoe => shoeTemplate(shoe, userId))}
        </ul>
        </div>
    </section>
`;

async function onSearch(event, ctx) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const query = formData.get('search').trim();

    ctx.page.redirect(`/search?query=${query}`);
}

export async function searchPage(ctx) {
    const userId = sessionStorage.getItem('userId');

    const brand = ctx.querystring.split('=')[1];
    const shoesList = brand == undefined ? [] : await search(brand);
    render(searchTemplate(shoesList, userId, ctx), document.querySelector('main'));
  }