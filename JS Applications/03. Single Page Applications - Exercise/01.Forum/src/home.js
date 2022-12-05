import {showDetails} from "./detail.js"


const section = document.getElementById("homeView")
const topicConteiner= document.querySelector(".topic-container")

const main = document.getElementsByTagName('main')[0]
const form = document.querySelector("#homeView form")
form.addEventListener('submit',OnSubmit)

section.remove()

export async function showHome(){
 
  const post = await loadPost()
  const content= Object. values(post).map(x=> topicTemplate(x))

  topicConteiner.replaceChildren(...content)


   
  main.replaceChildren(section)
    
}
function topicTemplate(data){
  const container=  document.createElement('div')
  container.classList.add("topic-container")
  container.innerHTML=`<div class="topic-name-wrapper"><div class="topic-name"><a href="#" class="normal"><h2>${data.topicName}</a><div class="columns"><div><p>Date: <time>${data.date}</time></p><div class="nick-name"><p>Username: <span>${data.username}</span></p></div></div>  </div> </div> </div>`
  container.querySelector("a").addEventListener("click", showDetails)
  return container              
}
function OnSubmit(e){
    e.preventDefault();
     if(e.submitter.innerHTML==="Cancel"){
      return clearForm()
     }
     //  see date
      const formData= new FormData(form)  
      const {topicName, username, postText}= Object.fromEntries(formData)
      console.log(topicName, username, postText)
   
      createPost({ topicName, username, postText, date: new Date()})
}
function clearForm(){
  form.reset()
}
async function createPost (body){
  const url="http://localhost:3030/jsonstore/collections/myboard/posts"
   const response= await fetch(url,{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
   })
   const data = await response.json()
}
async function loadPost(){
  const url="http://localhost:3030/jsonstore/collections/myboard/posts"
const response= await fetch(url)
const data = await response.json();
return data
}
window.loadPost=loadPost
