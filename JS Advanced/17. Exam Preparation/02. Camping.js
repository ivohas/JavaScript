class SummerCamp{
      constructor(organizer,location){
        this.organizer=organizer;
        this.location=location
        this.priceForTheCamp={"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants=[]
    }
    registerParticipant= (name, condition, money)=>{
        if(this.priceForTheCamp.condition){
            throw Error("Unsuccessful registration at the camp.")
        }
        let isItInList= this.listOfParticipants.find(x=>x.name===name)
        if(isItInList){
           return `The ${name} is already registered at the camp.`
        }
        let need=0;
        if(condition=='child'){
            need=150
        }
        if(condition=='student'){
            need=300
        }
        if(condition=='collegian'){
            need=500
        }


        if(need>money){
           return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({name, condition, power: 100, wins: 0})
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant =(name)=>{
        let participate= this.listOfParticipants.find(x=>x.name===name);
        if(!participate){
            throw Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants.find(x=>x!==participate)
        return `The ${name} removed successfully.`
    }
    timeToPlay= (typeOfGame, participant1, participant2=undefined)=>{
        let player =this.listOfParticipants.find(x=>x.name===participant1)
        if(!player){
            return `Invalid entered name/s.`
        }
        if(typeOfGame=="WaterBalloonFights"){
         let player2=this.listOfParticipants.find(x=>x.name===participant2)
            if(!player2){
                return `Invalid entered name/s.`
            }
            if(player.condition!=player2.condition){
               throw Error( `Choose players with equal condition.`)
            }
            if(player.power>player2.power){
                player.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            }else{
                if(player.power==player2.power)
                {
                    return `There is no winner.`
                }
                player2.wins++;

                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }
        }
        if(typeOfGame=="Battleship"){
            player.power+=20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }
    toString=()=>{
        let result=`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
      let ars=  this.listOfParticipants.sort((a,b)=>b.wins-a.wins)
      ars.forEach(element => {
        result+=`\n${element.name} - ${element.condition} - ${element.power} - ${element.wins}`
      });
      return result
    }

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



//'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nPetar Petarson - child - 100 - 0\nSara Dickinson - child - 120 - 1'
//'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0'
//test4
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

//test3
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "child", 300));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));


// test2
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// test1
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 250));

// console.log(summerCamp.registerParticipant("Leila Wolfe", "chaild", 200));
