window.addEventListener("load", solve);

function solve() {
  
let make= document.getElementById('make')
let model=document.getElementById('model')
let year= document.getElementById('year')
let fuelType=document.getElementById('fuel')
let originalPrice=document.getElementById('original-cost')
let sellingPrice=document.getElementById("selling-price")

let buttun=document.getElementById("publish").addEventListener('click',Start)

function Start(e){
 e.preventDefault();
 // if not good
  if(!make.value||!model.value||!year.value|| !originalPrice.value||!sellingPrice.value){
      return;
  }
  if(sellingPrice.value<originalPrice.value){
    return
  }
 createElement(make.value,model.value,year.value,fuelType.value,originalPrice.value,sellingPrice.value)
 make.value=''
 model.value=''
 year.value=2017
 originalPrice.value=''
 sellingPrice.value=''
 function createElement(makeValue,modelValue,yearValue,fuelValue,orgValue,sellValue){
let tr=document.createElement('tr')
 tr.classList.add('row')
 let td1=document.createElement('td')
 td1.textContent=makeValue
 let td2=document.createElement('td')
 td2.textContent=modelValue
 let td3=document.createElement('td')
 td3.textContent=yearValue
 let td4=document.createElement('td')
 td4.textContent=fuelValue
 let td5=document.createElement('td')
 td5.textContent=orgValue
 let td6=document.createElement('td')
 td6.textContent=sellValue

 let btnEdit=document.createElement('button')
 btnEdit.textContent='Edit'
 btnEdit.classList.add('action-btn','edit')
 btnEdit.addEventListener('click',Edit)

let btnSell= document.createElement('button')
btnSell.textContent='Sell'
btnSell.classList.add('action-btn','sell')
 tr.appendChild(td1)
 tr.appendChild(td2)
 tr.appendChild(td3)
 tr.appendChild(td4)
 tr.appendChild(td5)
 tr.appendChild(td6)
 tr.appendChild(btnEdit)
 tr.appendChild(btnSell)
 // btn append
 let tableBody=document.getElementById("table-body")
 tableBody.appendChild(tr)
 } 
}
function Edit(e){
  let a=e.target.parentNode
  make.value=a[0].textContent
 a.remove()
  let tableBody=document.getElementById("table-body")
}
// main
}
