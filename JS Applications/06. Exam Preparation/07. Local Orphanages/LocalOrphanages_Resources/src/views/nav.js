import { html, render, page } from '../lib.js'
import { getUserData } from '../util.js';
import { logout } from '../api/user.js';
// serch element
const nav = document.querySelector('header')

const navTemplate = (hasUser) => html`
<h1><a href="/">Orphelp</a></h1>

<nav>
    <a href="/catalog">Dashboard</a>

    <!-- Logged-in users -->
    ${hasUser ? 
        html` 
        <div id="user">
          <a href="#">My Posts</a>
          <a href="/create">Create Post</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>`: html`
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}
   

    <!-- Guest users -->
    
</nav>
`;
export function updateNav() {
    // check for user
    const user = getUserData();
    //  can test putting false or thrue
    render(navTemplate(user), nav)
}
function onLogout() {
    logout()
    updateNav()
    page.redirect('/')
}
