function deleteByEmail() {
    // getting the input
    let email = document.getElementsByName("email")[0].value.trim();
  let secondColumn = document.querySelectorAll(
    "#customers tr td:nth-child(2)");
  for (let td of secondColumn)
    if (td.textContent == email) {
      let row = td.parentNode;
      row.parentNode.removeChild(row);
      document.getElementById('result').innerText='Deleted'
    }else{
        document.getElementById('result').innerText="Not found."
    }
    //we can clear the input 
    document.getElementsByName('email').value==''
}