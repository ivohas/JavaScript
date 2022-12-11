import {html,render} from './node_modules/lit-html/lit-html.js'
 
const form = document.querySelector("form")
const container = document.getElementById('root')
form.addEventListener("click", onSubmit)

function onSubmit(e){
  e.preventDefault();
  const formData= new FormData(form)
  const {towns}= Object.fromEntries(formData)
  const townsArray= towns.split(",")
  renderArray (townsArray)
}
function renderArray(data){
  const result =createTowmList(data)
  render(result,container)
}
function createTowmList(data){
   const ul=html `
   <ul>      
   ${data.map(x=> html`<li>${x}</li> `)}
   <ul>
  `;
  return ul
}