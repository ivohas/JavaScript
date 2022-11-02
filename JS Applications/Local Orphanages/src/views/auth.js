import { html } from '../../node_modules/lit-html/lit-html.js';
import { login, register } from '../api/api.js';

const loginTamplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${onSubmit}>
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>
`;

export async function loginPage(ctx) {
    ctx.render(loginTamplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!password || !email) {
            return alert('All fields are required!');
        }

        await login(email, password);
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/')
    }
}

const registerTamplate = (onSubmit) => html`
<section id="register-page" class="auth">
    <form id="register" @submit=${onSubmit}>
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>
`

export async function registerPage(ctx) {
    ctx.render(registerTamplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPass = formData.get('repeatPassword');

        if (!password || !email) {
            return alert('All fields are required!');
        } else if (password != repeatPass) {
            return alert('Password don\'t match')
        }

        await register(email, password);
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}