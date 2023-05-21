import { html } from "../lib.js";

const homeTemp = () => html`
<section id="welcomePage">
    <div id="welcome-message">
        <h1>Welcome to</h1>
        <h1>My Music Application!</h1>
    </div>

    <div class="music-img">
        <img src="./images/musicIcons.webp">
    </div>
</section>

`
export async function showHome(ctx){

    ctx.render(homeTemp())
}
// login ready check for detail add to cheet sheet /src/app.js and api.js  localhost without / in the end
// some of the render function like in login, register, home can be added to the sceleton 
// 1.37 hours