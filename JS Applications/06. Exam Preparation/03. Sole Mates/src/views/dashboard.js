import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getShoes } from '../api/data.js';


const shoesTemplate = (shoes, userId) => html`

    <li class="card">
      <img src="${shoes.imageUrl}" alt="travis" />
      <p>
        <strong>Brand: </strong><span class="brand">${shoes.brand}</span>
      </p>
      <p>
        <strong>Model: </strong
        ><span class="model">${shoes.model}</span>
      </p>
      <p><strong>Value:</strong><span class="value">${shoes.value}</span>$</p>
      <a class="details-btn" href="/details/${shoes._id}">Details</a>
    </li>
`;

const dashboardTemplate = (shoesList, userId) => html`
    <!-- Dashboard page -->
    <section id="dashboard">
      <h2>Collectibles</h2>
      <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${shoesList.length === 0 ? html`<h2>There are no items added yet.</h2>` : shoesList.map(shoes => shoesTemplate(shoes, userId))}
      </ul>
    </section>
`;

export async function dashboardPage(ctx) {
  const userId = sessionStorage.getItem('userId');
  const shoesList = await getShoes();
  render(dashboardTemplate(shoesList, userId), document.querySelector('main'));
}