// *****  IMPORT *** 

import { html } from "../lib.js";

// Template
const homeTemp=()=> html `

`
export async function showHome(ctx){

    ctx.render(homeTemp())
}