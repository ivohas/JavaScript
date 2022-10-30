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
      let firstNameValue = firstName.value;
      let lastNameValue = lastName.value;
      let ageValue = age.value;
      let storyTitleValue = storyTitle.value;
      let genreValue = genre.value;
      let storyValue = story.value

      if(!firstNameValue || !lastNameValue || !ageValue || !storyTitleValue || !genreValue || !storyValue){
        return;
      }

      firstNameSaved = firstNameValue;
      lastNameSaved = lastNameValue;
      ageSaved = ageValue;
      storyTitleSaved = storyTitleValue;
      genreSaved = genreValue;
      storySaved =storyValue;


      firstName.value = '';
      lastName.value = '';
      age.value = '';
      storyTitle.value = '';
      genre.value = '';
      story.value = '';
      createStory(firstNameValue, lastNameValue, ageValue, storyTitleValue, genreValue, storyValue);


      e.target.setAttribute('disabled', true);
  }

  function createStory(firstNameValue, lastNameValue, ageValue, storyTitleValue, genreValue, storyValue){
      let li = document.createElement('li');
      li.classList.add('story-info');

      let aaaaasdfdsdfghjgfdfgh = document.createElement('aaaaasdfdsdfghjgfdfgh');

      let h4 = document.createElement('h4');
      h4.textContent = `Name: ${firstNameValue} ${lastNameValue}`;

      let p = document.createElement('p');
      p.textContent = `Age: ${ageValue}`;

      let secondP = document.createElement('p');
      secondP.textContent = `Title: ${storyTitleValue}`;

      let thirdP = document.createElement('p');
      thirdP.textContent = `Genre: ${genreValue}`;

      let fourthP = document.createElement('p');
      fourthP.textContent = storyValue;

      aaaaasdfdsdfghjgfdfgh.appendChild(h4);
      aaaaasdfdsdfghjgfdfgh.appendChild(p);
      aaaaasdfdsdfghjgfdfgh.appendChild(secondP);
      aaaaasdfdsdfghjgfdfgh.appendChild(thirdP);
      aaaaasdfdsdfghjgfdfgh.appendChild(fourthP);

      li.appendChild(aaaaasdfdsdfghjgfdfgh);

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