import { html } from '../../node_modules/lit-html/lit-html.js';
import { deletePostById, getPostById, getTotalDonationCount, didUserDonation, donationPost } from '../api/data.js';

const detailsTemplate = (post, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate) => html`
    <!-- Details Page -->
    <section id="details-page">
      <h1 class="title">Post Details</h1>
    
      <div id="container">
        <div id="details">
          <div class="image-wrapper">
            <img src="${post.imageUrl}" alt="Material Image" class="post-image">
          </div>
          <div class="info">
            <h2 class="title post-title">${post.title}</h2>
            <p class="post-description">Description: ${post.description}</p>
            <p class="post-address">Address: ${post.address}</p>
            <p class="post-number">Phone number: ${post.phone}</p>
            <p class="donate-Item">Donate Materials: ${totalDonationCount}</p>
            <div class="btns">
    
              ${isOwner ? html `<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
              <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>` : ''}
            ${(() => {
                if (didUserDonate == 0) {
                    if (isLoggedIn && !isOwner) {        
                        return html`<a @click=${onClickDonation}href="javascript:void(0)" class="donate-btn btn">Donate</a>`
                    }
                }
            })()}
            </div>
          </div>
        </div>
      </div>
    </section>
`;

export async function detailsPage(ctx) {
  const postId = ctx.params.id;
  const post = await getPostById(postId);
  const user = ctx.user;

  let userId;
  let totalDonationCount;
  let didUserDonate;

  if (user != null) {
      userId = user._id
      didUserDonate = await didUserDonation(postId, userId);
      
  }

  const isOwner = user && post._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  totalDonationCount = await getTotalDonationCount(postId);
  ctx.render(detailsTemplate(post, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonate));

  async function onClickDonation() {
      const donation = {
          postId,
      }
      await donationPost(donation);

      totalDonationCount = await getTotalDonationCount(postId);
      didUserDonate = await didUserDonation(postId, userId);
      ctx.render(detailsTemplate(post, isOwner, onDelete, isLoggedIn, totalDonationCount, onClickDonation, didUserDonation));
  }

  async function onDelete() {
      const confirmed = confirm('Are you sure?');
      if (confirmed) {
          await deletePostById(postId);
          ctx.page.redirect('/');
      }
  }
}