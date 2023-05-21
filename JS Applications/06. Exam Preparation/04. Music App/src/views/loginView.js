import { login } from '../api/user.js'
import { html } from '../lib.js'
import { createSubmitHandler } from '../util.js'

const loginTemp = (heandler) => html`
<section id="loginPage">
    <form @submit=${heandler}>
        <fieldset>
            <legend>Login</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <button type="submit" class="login">Login</button>

            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`
 
export async function showLogin(ctx){

    ctx.render(loginTemp(createSubmitHandler(onLogin)))

   async function onLogin({email,password}){
 
    if(email==''|| password==''){
      return alert("All fields are required!")

    }
    await login(email,password);
    ctx.updateNav()
    ctx.page.redirect('/')
}
}

