import page from '../node_modules/page/page.mjs';

import { createPage } from './views/create.js'
import { dashboardPage } from './views/dashboard.js'
import { detailsPage } from './views/details.js'
import { registerPage } from './views/register.js'
import { loginPage } from './views/login.js'
import { homePage } from './views/home.js';
import { editPage } from './views/edit.js';
import { searchPage } from './views/search.js';

import * as api from './api/data.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';
window.api = api;

page('/', homePage);
page('/dashboard', dashboardPage);
page('/register', registerPage);
page('/login', loginPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/search', searchPage)
page.start();

export function setupNavbar() {
  const token = sessionStorage.getItem('authToken');
  let template;

  if (token) {
    template = () => html`
    <div>
      <a href="/dashboard">Dashboard</a>
      <a href="/search">Search</a>
    </div>
    <!-- Logged-in users -->
    <div class="user">
      <a href="/create">Add Pair</a>
      <a @click=${logout}>Logout</a>
    </div>
    `;

    
  } else {
    template = () => html`
    
          <div>
            <a href="/dashboard">Dashboard</a>
            <a href="/search">Search</a>
          </div>
            <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        `;
  }
  render(template(), document.querySelector('nav'));
}

setupNavbar();

async function logout() {
  await api.logout();
  page.redirect('/');
  setupNavbar();
}