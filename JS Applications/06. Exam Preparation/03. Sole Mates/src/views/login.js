import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';
import { setupNavbar } from '../app.js';

const loginTemplate = (ctx) => html`
    <!-- Login Page (Only for Guest users) -->
    <section id="login">
      <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${e => onSubmit(e, ctx)}>
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
        </form>
      </div>
    </section>

`;

export async function loginPage(ctx) {
  render(loginTemplate(ctx), document.querySelector('main'));
}

async function onSubmit(event, ctx) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if (email == '' || password == '') {
    return alert("All fields required!");
  }

  await login(email, password);
  event.target.reset();
  ctx.page.redirect('/');
  setupNavbar();
}