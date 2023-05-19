import { html, render,page } from '../node_modules/lit-html/lit-html.js'
import { getUserData } from '../util.js';
import { logout } from '../api/user.js';

const nav = document.querySelector('header')

const navTemplate = (hasUser) => html`
        <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Dashboard</a></li>
                ${!hasUser? html`<li class='guest'><a href="/login">Login</a></li>
                <li ><a href="/register">Register</a></li>`:html`
                <li ><a href="/create">Create Postcard</a></li>
                <li ><a @click=${onLogout} id='logoutBtn' href="javascript:void(0)">Logout</a></li>
                `}
                <!--Only Guest-->
                
                <!--Only Users-->
            
            </ul>
        </nav>
`;
export function updateNav() {
     const user = getUserData();
    render(navTemplate(user), nav)
}
function onLogout(){
    logout()
     updateNav()
    page.redirect('/')
}
