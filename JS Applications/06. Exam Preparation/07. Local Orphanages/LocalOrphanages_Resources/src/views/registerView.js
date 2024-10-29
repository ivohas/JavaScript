// IMPORTS 

import { html } from "../lib.js";
import { createSubmitHandler } from '../util.js'
import { register } from '../api/user.js'
const registerTemp = (heandler) => html`
<section id="register-page" class="auth">
    <form @submit=${heandler} id="register">
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
export async function showRegister(ctx) {
    ctx.render(registerTemp(createSubmitHandler(onRegister)))

    async function onRegister(data) {

        // may have diff 
        if (data.email == "" || data.password == "" || data["repeatPassword"] == "") {
            return alert("all fields is require")

        } else {
            if (data.password !== data["repeatPassword"]) {
                return alert("password don\'t match")
            }
        }
        await register(data.email, data.password)
        ctx.updateNav()
        // change redict
        ctx.page.redirect('/catalog')
    }
}