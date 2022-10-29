window.addEventListener('load', solve);

function solve() {
   let button=document.querySelector("button[type='submit']").addEventListener('click',Submit)
  let type= document.getElementById("type-product").value
    let description=document.getElementById('description')
    let clientName=document.getElementById("client-name")
    let clientPhone=document.getElementById("client-phone")
    let place= document.getElementById("completed-orders")
    let clear= document.querySelector("button[class='clear-btn']").addEventListener('click',Clear)
    document.get
function Submit(e){
    e.preventDefault();
    if(!description.value||!clientName.value||!clientPhone.value){
        return;
    }
    let div=document.createElement("div")
    div.classList.add('container')
    let h2= document.createElement('h2')
    h2.textContent='Product type for repair: '+ type 
    let h3=document.createElement('h3')
    h3.textContent='Client information: '+clientName.value+', '+clientPhone.value
    div.appendChild(h2)
    div.appendChild(h3)
    let h4=document.createElement('h4')
    h4.textContent='Description of the problem: '+description.value
    div.appendChild(h4)
    let buttonStart=document.createElement('button')
    buttonStart.classList.add('start-btn')
    buttonStart.textContent='Start repair'
    buttonStart.addEventListener('click',startRepair)
    div.appendChild(buttonStart)
    let buttonFinish=document.createElement('button')
    buttonFinish.classList.add('finish-btn')
    buttonFinish.textContent='Finish repair'
    buttonFinish.addEventListener('click',MoveToReady)
    buttonFinish.setAttribute('disabled',true)
    div.appendChild(buttonFinish)
    let placeToAdd= document.getElementById("received-orders")
    placeToAdd.appendChild(div)
    description.value=''
    clientName.value=''
    clientPhone.value=''
}
function startRepair(e){
  
    document.getElementsByClassName('finish-btn')[0].disabled=false 
     e.target.setAttribute('disabled',true)
}
function MoveToReady(e){
    
    let diva= e.target.parentElement
    place.appendChild(diva)
    let btns=diva.querySelectorAll('button')
     btns[1].remove()
    btns[0].remove()
   
}
function Clear(e){
 let container= e.target.parentElement;
 let divs= container.querySelectorAll('div')
 for (const iterator of divs) {
    iterator.remove()
 }
}
}