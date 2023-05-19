import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoes, getShoesById, getApplicationById, getApplications, postApplication } from '../api/data.js';
import { setupNavbar } from '../app.js';

// const detailsTemplate = (shoe, likes, hasLiked, ctx) => html`
//     <!--Details Page-->
//     <section id="detailsPage">
//       <div id="detailsBox">
//         <div class="detailsInfo">
//           <h1>Title: ${shoe.title}</h1>
//           <div>
//             <img src="${shoe.imageUrl}" />
//           </div>
//         </div>

//         <div class="details">
//           <h3>Shoes Description</h3>
//           <p>${shoe.description}</p>
//           <h4>Date: ${shoe.date}</h4>
//           <h4>Author: ${shoe.author}</h4>

//           ${checkForOwner(shoe, hasLiked, likes, ctx)}
//           <p class="likes">Likes: ${likes}</p>
//         </div>
//       </div>
//     </section>
// `;

const detailsTemplate = (shoe, ctx) => html`
    <!-- Details page -->
    <section id="details">
      <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
          <img src="${shoe.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
          <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
          <p>
            Model: <span id="details-model">${shoe.model}</span>
          </p>
          <p>Release date: <span id="details-release">${shoe.release}</span></p>
          <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
          <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        ${checkForOwner(shoe, ctx)}
      </div>
    </section>
`;
export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const shoe = await getShoesById(id);
  const userId = sessionStorage.getItem('userId') || null;
  // const applications = await getApplications(id);
  // const hasApplied = await getApplicationById(id, userId) ? true : false;

  render(detailsTemplate(shoe, ctx), document.querySelector('main'));
}

async function applyToShoes(shoe, hasApplied, ctx) {
  await postApplication(shoe._id);
  detailsPage(ctx);
}

function checkForOwner(shoe, ctx) {
  const userId = sessionStorage.getItem('userId');
  if (userId == shoe._ownerId) {
    return html`
      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
        <a @click=${e => onDelete(e, ctx)} id="delete-btn">Delete</a>
      </div>
    `
  } else {
      return html``;
  }
}

async function onDelete(event, ctx) {
  event.preventDefault();

  const id = ctx.params.id;

  const confirmed = confirm('Are you sure you want to delete this shoe?');

  if (confirmed) {
    await deleteShoes(id);
    ctx.page.redirect('/dashboard');
    setupNavbar();
  }
}