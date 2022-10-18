window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish-btn").addEventListener('click',createPost)
  let title= document.getElementById("post-title")
  let category= document.getElementById("post-category")
  let text=document.getElementById("post-content")
 let aproveSelection= document.getElementById("published-list")

  function createPost(){
     if(!text.value|| !title.value|| !category.value){     
    return; 
   }
  createList(text.value,category.value,title.value)
  }
  function createList(textValue,categoryValue,titleValue){
    //create list
    let li=document.createElement('li');
    li.classList.add('rpost')

    //create article
    let article= document.createElement('article')
    let h= document.createElement('h4')
    let PCategory=document.createElement('p')
    h.textContent=titleValue
    PCategory.textContent='Category: '+categoryValue
    let textP=document.createElement('p')
    textP.textContent='Content: '+textValue
    article.appendChild(h)
    article.appendChild(PCategory)
    article.appendChild(textP)

    //create button
    let editButton= document.createElement("button")
    editButton.classList.add('action-btn')
    editButton.classList.add('edit')
    editButton.textContent='Edit'
    editButton.addEventListener('click',editpost)
    let approveButton= document.createElement('button')
    approveButton.classList.add('action-btn')
    approveButton.classList.add('approve')
    approveButton.textContent='Approve'
    approveButton.addEventListener('click',aprove)
    li.appendChild(article)
    li.appendChild(editButton)
    li.appendChild(approveButton)
    // append the li
    let ul= document.getElementById("review-list")
    ul.appendChild(li)
    clearField()
  }
  function clearField(){
    title.value=''
    category.value=''
    text.value=''
  }
  function editpost(e){
    let currentPost= e.target.parentElement;
   
    let article= currentPost.getElementsByTagName('article')[0].children
    let titleValue= article[0].textContent
    let contentText=article[1].textContent.split(": ")[1]
    let textValue=article[2].textContent.split(": ")[1]

    text.value=textValue
    category.value=contentText
    title.value=titleValue
     currentPost.remove()
  }
  function aprove(e){
    let currentPost= e.target.parentElement;
     aproveSelection.appendChild(currentPost)
    Array.from(currentPost.querySelectorAll('button')).forEach(btn=>btn.remove())
  }
  let clearButton=document.getElementById("clear-btn")
  clearButton.addEventListener('click',clear)
  function clear(e){
    Array.from(aproveSelection.children).forEach(ar=>ar.remove())
  }
}
