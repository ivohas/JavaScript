// ** IMPORTS ***

import { html } from "../lib.js";
import {createSubmitHandler} from '../util.js'
import {login} from '../api/user.js'
// Template 
const loginTepm=()=> html `

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