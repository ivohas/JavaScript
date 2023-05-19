import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../api/data.js';
import { setupNavbar } from '../app.js';

const registerTemplate = ctx => html`
    <!-- Register Page (Only for Guest users)
    <section id="register">
      <div class="form">
        <h2>Register</h2>
        <form @submit=${e=> onSubmit(e, ctx)} class="login-form">
          <input type="text" name="email" id="register-email" placeholder="email" />
          <input type="password" name="password" id="register-password" placeholder="password" />
          <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
          <button type="submit">Register</button>
          <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
      </div>
    </section> -->

     <!-- Register Page (Only for Guest users) -->
     <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="login-form" @submit=${e=> onSubmit(e, ctx)}>
            <input
              type="text"
              name="email"
              id="register-email"
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="password"
            />
            <input
              type="password"
              name="re-password"
              id="repeat-password"
              placeholder="repeat password"
            />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>
`;

export async function registerPage(ctx) {
  render(registerTemplate(ctx), document.querySelector('main'));
}

async function onSubmit(event, ctx) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();
  const rePass = formData.get('re-password').trim();

  if (email == '' || password == '') {
    return alert('inavlid data!');
  }

  if (password != rePass) {
    return alert('Passwords don\'t match!');
  }

  await register(email, password);
  event.target.reset();
  ctx.page.redirect('/');
  setupNavbar();
}