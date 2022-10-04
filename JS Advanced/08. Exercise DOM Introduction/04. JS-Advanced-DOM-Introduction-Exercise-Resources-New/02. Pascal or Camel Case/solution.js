function solve() {
  //TODO...
  let text= document.getElementById('text').value;
  let convention=document.getElementById('naming-convention').value;
  let result='';
  debugger;
  let arrey=text.toLowerCase().split(' ');
  switch(convention){
    case'Camel Case':
    arrey.forEach((element,index )=> {
      
      if(index===0){
         return result+=element.toLowerCase()

      }
      return result+= element[0].toUpperCase()+element.substring(1)
     
    });
    break;
     case"Pascal Case":
     arrey.forEach((element,index )=> {
      return result+=element[0].toUpperCase()+element.substring(1)
     });
     break;
    default:
      result='Error!'
    break;
  }

  document.getElementById('result').textContent=result;
}
