import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js'
import { showCatalog } from './views/catalog.js'
import { showDetails } from './views/details.js'
import { showHome } from './views/home.js'
import { showLogin } from './views/login.js'
import { updateNav } from './views/nav.js'
import { showRegister } from './views/register.js'


const main = document.getElementById('content')
//document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext)
page('/', showHome)
page('/catalog', showCatalog)
page('/catalog/:id', showDetails)
page('/edit/:id', () => console.log('edit'))
page('/create', () => console.log('create'))
page('/login', showLogin)
page('/register', showRegister)
updateNav()
page.start()

function decorateContext(ctx, next) {
    ctx.render = renderMain
    ctx.updateNav=updateNav
    const user = getUserData()
    if(user){
     ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main)
}


