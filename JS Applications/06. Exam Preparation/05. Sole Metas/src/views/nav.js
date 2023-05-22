import { html, render, page } from '../lib.js'
import { getUserData } from '../util.js';
import { logout } from '../api/user.js';

const nav = document.querySelector('header')

const navTemplate = (hasUser) => html`
    <header>
        <!-- Navigation -->
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
    
        <nav>
            <div>
                <a href="/catalog">Dashboard</a>
                <a href="#">Search</a>
            </div>
    
            ${hasUser?
                html`        
                    <!-- Logged-in users -->
            <div class="user">
                <a href="/create">Add Pair</a>
                <a @click=${onLogout} href="javascript:void(0)">Logout</a>
            </div>`: 
            html` 
             <!-- Guest users -->
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>`}

    
          
        </nav>
    </header>

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
