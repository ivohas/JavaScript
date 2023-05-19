import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { createShoes } from '../api/data.js';
import { setupNavbar } from '../app.js';

const createTemplate = (ctx) => html`
<!-- Create Page (Only for logged-in users) -->
    <section id="create" >
      <div class="form"  @submit=${e => onSubmit(e, ctx)}>
        <h2>Add item</h2>
        <form class="create-form">
          <input
            type="text"
            name="brand"
            id="shoe-brand"
            placeholder="Brand"
          />
          <input
            type="text"
            name="model"
            id="shoe-model"
            placeholder="Model"
          />
          <input
            type="text"
            name="imageUrl"
            id="shoe-img"
            placeholder="Image url"
          />
          <input
            type="text"
            name="release"
            id="shoe-release"
            placeholder="Release date"
          />
          <input
            type="text"
            name="designer"
            id="shoe-designer"
            placeholder="Designer"
          />
          <input
            type="text"
            name="value"
            id="shoe-value"
            placeholder="Value"
          />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
`;

export async function createPage(ctx) {
  render(createTemplate(ctx), document.querySelector('main'));
}

async function onSubmit(event, ctx) {
  event.preventDefault();

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

  await createShoes(shoe);
  event.target.reset();
  ctx.page.redirect('/dashboard');
  setupNavbar();
}