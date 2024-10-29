import { html, render,page } from '../lib.js'
import { getUserData } from '../util.js';
import { logout } from '../api/user.js';
// serch element
const nav = document.querySelector('   ')

const navTemplate = (hasUser) => html`
    //  navigation 
`;
export function updateNav() {
    // check for user
     const user = getUserData();
     //  can test putting false or thrue
    render(navTemplate(user), nav)
}
function onLogout(){
    logout()
    updateNav()
    page.redirect('/')
}
