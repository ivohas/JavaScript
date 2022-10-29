window.addEventListener('load', solve);

function solve() {
   document.getElementById('add').addEventListener('click',createPost)
   let modelValue= document.getElementById('model').value
   let yearValue=document.getElementById('year').value
   let descriptionValue=document.getElementById('description').value
   let priceValue=document.getElementById('price').value
     priceValue=Number(priceValue).toFixed(2)
   function createPost(e){
    e.preventDefault();
    let tr=document.createElement('tr')
    tr.classList.add('info')
    let td1= document.createElement('td')
    td1.textContent=modelValue
    let td2= document.createElement('td')
    td2.textContent=priceValue
    tr.appendChild(td1)
    tr.appendChild(td2)
    let furList= document.getElementById("furniture-list")
    furList.appendChild(tr)
   }
}
