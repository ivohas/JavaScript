 const icons= {
    "Sunny":"&#x2600", // ☀
 "Partly sunny":"&#x26C5", // ⛅
   "Overcast":"&#x2601", // ☁
    'Rain':	'&#x2614', // ☂
   "Degrees":'&#176'  // °
    


 }
 
 
 
 async function attachEvents() {
  
    let bt= document.getElementById("submit").addEventListener("click", getWeather)  
   
   async function getWeather(){
    let loc = document.getElementById("location")
    let location = loc.value
    console.log(location)
        let response = await fetch("http://localhost:3030/jsonstore/forecaster/locations")
        let data= await response.json()
        console.log(data)
        let info= undefined;
        for (const obj of data) {
            if(obj.name==location){
              info=obj
            }
        }

        // let info = data. find(x=>x.name===location)
        console.log(info)
        createForecast(info.code);
    }
async function createForecast(code){
    // today
    console.log(code)
    let url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    // next days
    let urlTwo = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
    let response= undefined;
    let dataUpcomming= undefined
    try{
       responseToday= await fetch(url)
        dataToday = await responseToday.json()
      let responseUpcomming= await fetch(urlTwo)
       dataUpcomming= await responseUpcomming.json()

    }catch(error){
        let forecast= document.getElementById("forecast")
        forecast.textConten= "Error"
        return
    }
     
   
    
    createToday(dataToday)
    createForUpcommingDays(dataUpcomming)
}
}
function createToday(data){
    const{condition,  high , low}= data.forecast;
    let main = document.getElementById("current")
   
    let div= document.createElement("div")
    div.classList.add("forecasts")

    let conditionSym= document.createElement("span")
    conditionSym.classList.add("condition")
    conditionSym.classList.add("symbol")
    conditionSym.innerHTML=icons[condition]
    // add tht content

    let spanMain= document.createElement("span")
    spanMain.classList.add("condition")

    let location= document.createElement("span")
    location.classList.add("forecast-data")
    location.textContent=data.name 

    let temp = document.createElement('span')
    temp.classList.add("forecast-data")
    temp.innerHTML= `${low}${icons["Degrees"]}/${high}${icons["Degrees"]}`
    let con= document.createElement("span")
    con.classList.add("forecast-data")
    con.textContent= condition

    spanMain.appendChild(location)
    spanMain.appendChild(temp)
    spanMain.appendChild(con)
    div.appendChild(conditionSym)
    div.appendChild(spanMain)
    main.appendChild(div)
    let smt= document.getElementById("forecast")
    smt.style.display="block"
}
function createForUpcommingDays(data){
console.log(data)
let main = document.getElementById("upcoming")
let div= document.createElement("div")
div.classList.add("forecast-info")
div.style.display="inline"
for (const days of data.forecast) {
    const{condition,high,low } = days



let spanMain= document.createElement("span")
spanMain.classList.add("upcomming")
spanMain.style.display="inline-block"

let symbol= document.createElement('span')
symbol.classList.add("symbol")
symbol.innerHTML= icons[condition]

let temp = document.createElement('span')
temp.classList.add('forecast-data')
temp.innerHTML=`${low}${icons["Degrees"]}/${high}${icons["Degrees"]}`

let con= document.createElement("span")
con.classList.add('forecast-data')
con.innerHTML=condition

spanMain.appendChild(symbol)
spanMain.appendChild(temp)
spanMain.appendChild(con)
div.appendChild(spanMain)
}

main.appendChild(div)
}
attachEvents();