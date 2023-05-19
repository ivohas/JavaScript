import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { editShoes, getShoesById } from '../api/data.js';

// const editTemplate = (shoe, ctx) => html`
//     <section id="editPage">
//       <form @submit=${e => onSubmit(e, ctx)} class="shoe-form">
//         <h1>Edit Shoes</h1>
//         <div>
//           <label for="title">Title:</label>
//           <input id="title" name="title" type="text" placeholder="Shoes name" value="${shoe.title}">
//         </div>
//         <div>
//           <label for="date">Date:</label>
//           <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${shoe.date}">
//         </div>
//         <div>
//           <label for="author">Author:</label>
//           <input id="author" name="author" type="text" placeholder="Author" value="${shoe.author}">
//         </div>
//         <div>
//           <label for="description">Shoes Description:</label>
//           <textarea id="description" name="description" placeholder="Description">${shoe.description}</textarea>
//         </div>
//         <div>
//           <label for="imageUrl">Image url:</label>
//           <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="${shoe.imageUrl}">
//         </div>
//         <button class="btn" type="submit">Submit</button>
//       </form>
//     </section>
// `;

const editTemplate = (shoe, ctx) => html`
     <!-- Edit Page (Only for logged-in users) -->
     <section id="edit">
      <div class="form">
        <h2>Edit item</h2>
        <form class="edit-form" @submit=${e => onSubmit(e, ctx)}>
          <input
            type="text"
            name="brand"
            id="shoe-brand"
            placeholder="Brand"
            value=${shoe.brand}
          />
          <input
            type="text"
            name="model"
            id="shoe-model"
            placeholder="Model"
            value=${shoe.model}
          />
          <input
            type="text"
            name="imageUrl"
            id="shoe-img"
            placeholder="Image url"
            value=${shoe.imageUrl}
          />
          <input
            type="text"
            name="release"
            id="shoe-release"
            placeholder="Release date"
            value=${shoe.release}
          />
          <input
            type="text"
            name="designer"
            id="shoe-designer"
            placeholder="Designer"
            value=${shoe.designer}
          />
          <input
            type="text"
            name="value"
            id="shoe-value"
            placeholder="Value"
            value=${shoe.value}
          />

          <button type="submit">post</button>
        </form>
      </div>
    </section>

`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const shoe = await getShoesById(id);

  render(editTemplate(shoe, ctx), document.querySelector('main'));
}

async function onSubmit(event, ctx) {
  event.preventDefault();
  const id = ctx.params.id;

  const formData = new FormData(event.target);
  const shoe = {
    brand: formData.get('brand').trim(),
    model: formData.get('model').trim(),
    imageUrl: formData.get('imageUrl').trim(),
    release: formData.get('release').trim(),
    designer: formData.get('designer').trim(),
    value: formData.get('value').trim(),
  }

  if (shoe.brand == '' || shoe.model == '' || shoe.imageUrl == '' || shoe.release == '' || shoe.designer == '' || shoe.value == '') {
    return alert('Invalid info');
  }


  await editShoes(id, shoe);
  ctx.page.redirect('/details/' + id);
}