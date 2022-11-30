function attachEvents(){
GetStudents()
}
async function GetStudents(){
    let url = "http://localhost:3030/jsonstore/collections/students" 
    
    let response= await fetch (url)
    let data= await response.json()
   
    let form = document.getElementById("results")
    Object.values(data).forEach(student=>{
        let ul = document.createElement('ul')

        let liName= document.createElement('li')
        liName.textContent= student.firstName 
        ul.appendChild(liName)

        let liLastName=document.createElement("li")
        liLastName.textContent= student.lastName 
        ul.appendChild(liLastName)


       form.appendChild(ul)
    })
}
attachEvents()