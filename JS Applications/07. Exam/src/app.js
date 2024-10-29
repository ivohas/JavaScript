
import {render, page} from './lib.js'
import {getUserData} from './util.js'
import { showCatalog } from './views/catalogView.js';
import { showCreate } from './views/createView.js';
import { showDetails } from './views/datilsView.js';
import { showEdit } from './views/editView.js';
import { showHome } from './views/homeView.js';
import { showLogin } from './views/loginView.js';
import {updateNav} from './views/nav.js'
import { showRegister } from './views/registerView.js';
// Import inn the main html src app.js
// Make second 


// Import views

// get main element 
const main= document.querySelector('main')

//  Attach middle ware. May hav some difference
page(decorateContext);
page('/',showHome)
page('/catalog', showCatalog)
page('/catalog/:id',showDetails );
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register',showRegister);


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