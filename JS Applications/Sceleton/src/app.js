
import {render, page} from './lib.js'
import {getUserData} from './util.js'
import {updateNav} from './views/nav.js'
// Import inn the main html src app.js
// Make second 


// Import views

// get main element 
const main= document.getElementById('')

//  Attach middle ware. May hav some difference
page(decorateContext);
page('/',()=>console.log('home'))
page('/catalog', ()=>console.log('catalog'))
page('/catalog/:id',()=>console.log('details') );
page('/edit/:id', ()=>console.log('edit'));
page('/create', ()=>console.log('create'));
page('/login', ()=>console.log('login'));
page('/register', ()=>console.log('register'));


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