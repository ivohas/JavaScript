function search() {
   // TODO
   //`${matches} matches found`.
   let townToSearch= document.getElementById("searchText").value
   let towns =Array.from(document.querySelectorAll('ul li'))
   debugger
   let matches=0
   for (const town of towns) {
      text = town.textContent
      if(text.includes(townToSearch))
      {
         town.style.textDecoration='underline'
         town.style.fontWeight="bold"
         matches++;
      }
   }
   if(matches>0){
      document.getElementById('result').textContent=`${matches} matches found`
   }
   
}
