// IMPORTS 

import { html } from "../lib.js";
import {createSubmitHandler} from '../util.js'
import {register} from '../api/user.js'
const registerTemp =()=> html `

`
export async function showRegister(ctx) {
    ctx.render(registerTemp(createSubmitHandler(onRegister)))

    async function onRegister(data) {

        // may have diff 
        if (data.email == "" || data.password == "" || data["re-password"]== "") {
            return alert("all fields is require")

        } else {
            if (data.password !== data["re-password"]) {
                return alert("password don\'t match")
            }
        }
       await register(data.email, data.password)
        ctx.updateNav()
        // change redict
        ctx.page.redirect('/catalog')
    }
}