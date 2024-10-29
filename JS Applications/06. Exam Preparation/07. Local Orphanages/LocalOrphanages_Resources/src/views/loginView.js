// ** IMPORTS ***

import { html } from "../lib.js";
import { createSubmitHandler } from '../util.js'
import { login } from '../api/user.js'
// Template 
const loginTepm = (heandler) => html`
<section id="login-page" class="auth">
    <form @submit=${heandler} id="login">
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
`

export async function showLogin(ctx) {

    ctx.render(loginTepm(createSubmitHandler(onLogin)))

    async function onLogin({ email, password }) {

        if (email == '' || password == '') {
            return alert("All fields are required!")

        }
        await login(email, password);
        ctx.updateNav()
        // change redirect 
        ctx.page.redirect('/catalog')
    }
}