function attachEvents() {
   
    let btnSend= document.getElementById("submit").addEventListener("click",OnSendMsg)
   let btnRefresh= document.getElementById("refresh").addEventListener("click", getAllMsg)
   
}
function OnSendMsg(){
    let author = document.querySelector('input[name="author"]')
    let content= document.querySelector('input[name="content"]')
   let data={
    author:author.value,
    content: content.value
   }
   createMsg(data)
}
async function getAllMsg(){
     const url = " http://localhost:3030/jsonstore/messenger"
     const responce = await fetch(url)
     const data = await responce.json()
   render(data)
}

async function createMsg(body){
    const url = " http://localhost:3030/jsonstore/messenger"
    const responce= await fetch(url,{
       method:"POST",
       headers:{
        "Content-type":"application/json"
       },
       body: JSON. stringify(body)
    })
   const data= await responce.json()
   return data
}
function render(data){

    let content =Object.values(data).map(x=>`${x.author}: ${x.content}`).join("\n")
    let textArea= document.getElementById("messages")
    textArea.textContent=content
  
  }
attachEvents();