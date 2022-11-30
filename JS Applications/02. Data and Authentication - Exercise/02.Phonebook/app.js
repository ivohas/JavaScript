function attachEvents() {
    console.log('TODO...');
    let btnLoad= document.getElementById("btnLoad").addEventListener("click",loadInfo)
    document.getElementById("btnCreate").addEventListener('click', createPost)
}
async function loadInfo(){
    let url ="http://localhost:3030/jsonstore/phonebook"
    let phonebook= document.getElementById('phonebook')
    phonebook.innerHTML=""
    let response= await fetch(url);
    const data = await response.json();
    Object.values(data).forEach(person=>{
        let li = document.createElement('li')
        li.textContent=`${person.person}": <${person.phone}>`

        let btnDelete = document.createElement('button')
        btnDelete.addEventListener('click', DeleteIfo)
        btnDelete.textContent="Delete"

        li.appendChild(btnDelete)
        phonebook.appendChild(li)
        
    })
    
}

async function createPost(){
    let name = document.getElementById("person").value
    let number = document.getElementById("phone").value
    
    let url ="http://localhost:3030/jsonstore/phonebook"
    const body ={
        person:name,
        phone: number
    }

    

    const response = await fetch(url, {
        method: "POST", 
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    const data = await response.json();
    //  clear data from fields
     document.getElementById("person").value=''
     document.getElementById("phone").value=""
    loadInfo()
    return data;
}
async function DeleteIfo(key){
    
    let urlDelete=`http://localhost:3030/jsonstore/phonebook/${key}>`
    let url ="http://localhost:3030/jsonstore/phonebook"

   const body ={person,phone}

   let response = await fetch(url,{
    method:"DELETE",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(body)
   })
   let data = await response.json()
   return data
}
attachEvents();