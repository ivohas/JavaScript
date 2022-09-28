function addItem() {
   //console.log('TODO:...');
   let text= document.getElementById("newItemText").value;
   let li = document.createElement('li');
   li.appendChild(document.createTextNode(text));
   let ul= document.getElementById('items')
   ul.appendChild(li)
   document.getElementById("newItemText").value=''

}