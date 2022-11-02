import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllPost } from '../api/data.js';

const dashboardTamplate = (post) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    <!-- Display a div with information about every post (if any)-->
    <div class="all-posts">
        ${post.length == 0 ? html`<h1 class="title no-posts-title">No posts yet!</h1>` : post.map(p => html`
        <div class="post">
            <h2 class="post-title">${p.title}</h2>
            <img class="post-image" src="${p.imageUrl}" alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${p._id}" class="details-btn btn">Details</a>
            </div>
        </div>`)}
    </div>

</section>
`

export async function dashboardPage(ctx) {
    const post = await getAllPost();
    ctx.render(dashboardTamplate(post));
}