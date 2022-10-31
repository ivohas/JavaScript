window.addEventListener("load", solve);

function solve() {
  document.getElementById('form-btn').addEventListener('click', publishStory);
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');
  let previewEl = document.getElementById('preview-list');

  function publishStory(e){
      let asdfghjhgfdfvbghjkjhgfdd = firstName.value;
      let gcfgcg = lastName.value;
      let vbxxffxf = age.value;
      let storyTitleValue = storyTitle.value;
      let genreValue = genre.value;
      let storyValue = story.value

      if(!asdfghjhgfdfvbghjkjhgfdd || !gcfgcg || !vbxxffxf || !storyTitleValue || !genreValue || !storyValue){
        return;
      }

      firstNameSaved = asdfghjhgfdfvbghjkjhgfdd;
      lastNameSaved = gcfgcg;
      ageSaved = vbxxffxf;
      storyTitleSaved = storyTitleValue;
      genreSaved = genreValue;
      storySaved =storyValue;


      firstName.value = '';
      lastName.value = '';
      age.value = '';
      storyTitle.value = '';
      genre.value = '';
      story.value = '';
      createStory(asdfghjhgfdfvbghjkjhgfdd, gcfgcg, vbxxffxf, storyTitleValue, genreValue, storyValue);


      e.target.setAttribute('disabled', true);
  }

  function createStory(asdfghjhgfdfvbghjkjhgfdd, gcfgcg, vbxxffxf, storyTitleValue, genreValue, storyValue){
      let li = document.createElement('li');
      li.classList.add('story-info');

      let article = document.createElement('article');

      let h4 = document.createElement('h4');
      h4.textContent = `Name: ${asdfghjhgfdfvbghjkjhgfdd} ${gcfgcg}`;

      let p = document.createElement('p');
      p.textContent = `Age: ${vbxxffxf}`;

      let secondP = document.createElement('p');
      secondP.textContent = `Title: ${storyTitleValue}`;

      let thirdP = document.createElement('p');
      thirdP.textContent = `Genre: ${genreValue}`;

      let fourthP = document.createElement('p');
      fourthP.textContent = storyValue;

      article.appendChild(h4);
      article.appendChild(p);
      article.appendChild(secondP);
      article.appendChild(thirdP);
      article.appendChild(fourthP);

      li.appendChild(article);

      let saveBtn = document.createElement('button');
      saveBtn.classList.add('save-btn');
      saveBtn.textContent = 'Save Story';
      saveBtn.addEventListener('click', ()=>{
        let mainDiv = document.getElementById('main');
        mainDiv.innerHTML = '';
        let h1 = document.createElement('h1');
        h1.textContent = 'Your scary story is saved!';
        mainDiv.appendChild(h1);
      });

      let editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit Story';
      editBtn.addEventListener('click', ()=>{
        firstName.value = firstNameSaved;
          lastName.value = lastNameSaved;
          age.value = ageSaved;
          storyTitle.value = storyTitleSaved;
          genre.value = genreSaved;
          story.value = storySaved;
          document.getElementById('form-btn').disabled = false;
          editBtn.parentElement.remove();
      });

      let deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete Story';
      deleteBtn.addEventListener('click', ()=>{
          document.getElementById('form-btn').disabled = false;
          editBtn.parentElement.remove();
      });

      li.appendChild(saveBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      previewEl.appendChild(li);

  }
}