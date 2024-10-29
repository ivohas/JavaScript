// *****  IMPORT *** 

import { html } from "../lib.js";

// Template
const homeTemp = () => html`
<section id="home">
    <img src="./images/landing.png" alt="home" />

    <h2 id="landing-text"><span>Add your favourite albums</span> <strong>||</strong> <span>Discover new ones right
            here!</span></h2>
</section>
`
export async function showHome(ctx) {

    ctx.render(homeTemp())
}