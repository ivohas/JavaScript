import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getMyShoess } from '../api/data.js';

const shoeTemplate = (shoe) => html`
    <div class="event-info">
      <img src="${shoe.imageUrl}">
      <h2>${shoe.title}</h2>
      <h6>${shoe.date}</h6>
      <a href="/details/${shoe._id}" class="details-button">Details</a>
    </div>
`;

const profileTemplate = (shoeList, email) => html`
  <section id="profilePage">
    <div class="userInfo">
      <div class="avatar">
        <img src="./images/profilePic.png">
      </div>
      <h2>${email}</h2>
    </div>
    <div class="board">
  
      ${shoeList.length == 0 ? html`
      <div class="no-events">
        <p>This user has no events yet!</p>
      </div>
      ` : html`
      <div class="eventBoard">
        ${shoeList.map(shoeTemplate)}
      </div>
      `}
  
    </div>
  </section>
`;

export async function profilePage() {
  const shoeList = await getMyShoess();
  const email = sessionStorage.getItem('email');

  render(profileTemplate(shoeList, email), document.querySelector('main'));
}