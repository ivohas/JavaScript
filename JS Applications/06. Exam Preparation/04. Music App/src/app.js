import {render, page} from './lib.js'
import {getUserData} from './util.js'
import {updateNav} from './views/nav.js'
import {showLogin} from './views/loginView.js'
import { showRegister } from './views/registerView.js'
import {showHome} from './views/homeView.js'
import { showCreate } from './views/createView.js'
import { showCatalog } from './views/catalogView.js'
import { showDetails } from './views/datailView.js'
import { showEdit } from './views/editView.js'
// Import inn the main html src app.js
// Make second 


// Import views

// get main element 
const main= document.getElementById("main-content")

//  Attach middle ware. May hav some difference
page(decorateContext);
page('/',showHome)
page('/home',showHome)
page('/login', showLogin);
page('/register', showRegister);
page('/catalog',showCatalog)
page('/create', showCreate);
page("/details/:id",showDetails);
page('/edit/:id',showEdit);
page('/search', ()=>console.log('search'));


// update Navigation and start page
updateNav()
page.start()


function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if(user){
        ctx.user = user;
    }
    
    next();
}

function renderMain(content){
    render(content, main);
}