import { html } from '../lib.js'
import {createSubmitHandler} from '../util.js'
import {login} from '../api/user.js'


const loginTemplate = (heandler) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form @submit=${heandler} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="/register">Create an account</a>
            </p>
        </form>
    </div>
</section>
`
export async function showLogin(ctx) {

    ctx.render(loginTemplate(createSubmitHandler(onLogin)))

    async function onLogin({ email, password }) {

        if (email == '' || password == '') {
            return alert("All fields are required!")

        }
        await login(email, password);
        ctx.updateNav()
        ctx.page.redirect('/catalog')
    }
}