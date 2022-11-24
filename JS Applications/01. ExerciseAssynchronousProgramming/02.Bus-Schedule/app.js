 async function solve() {


    let url =`http://localhost:3030/jsonstore/bus/schedule/depot`
    try{
        let response= await fetch(url)
        let data= await response.json()
        
        console.log(data)
        let info = document.getElementById("info")
        info.textContent=`Next stop ${data.name}`
    }
    catch(error){
        let info= document.getElementById("info").textContent="Error"
    }

    async function depart() {
      let nextStopId=data.next;
      let url =`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`
       let btn = document.getElementById("depart").style= "disable";

      try{
        let response= await fetch(url)
        let data= await response.json()
        console.log(data)
        let info = document.getElementById("info")
        info.textContent=`Next stop ${data.name}`
      }
      catch(error){let info= document.getElementById("info").textContent="Error"}
       

    }

    function arrive() {
        console.log('Arrive TODO...');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();