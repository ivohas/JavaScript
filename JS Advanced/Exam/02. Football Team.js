class footballTeam{
    constructor(clubName,country){
        this.clubName=clubName
        this.country=country
        this.invitedPlayers=new Array
    }
    newAdditions=(footballPlayers)=>{
        
        let name=''
        let age=0
        let playerValue=0
        for (const element of footballPlayers) {
             name=element.split('/')[0]
            age=element.split('/')[1]
            playerValue=element.split('/')[2]
            let currPlayer=this.invitedPlayers.find(x=>x.name===name)
            if(currPlayer!=undefined){
                if(currPlayer.playerValue<playerValue)
                currPlayer.playerValue=playerValue
            }else{
                this.invitedPlayers.push({name, age, playerValue})
            }

        }
        
         let result="You successfully invite "
            for (const player of this.invitedPlayers) {
               
               let currName=player.name+', ' 
                result+=currName
            }
            let a=result.substring(0,result.length-2)+'.'
            return a
    }
    signContract=(selectedPlayer)=>{
        let nameToSing= selectedPlayer.split('/')[0]
        let valueOffer = selectedPlayer.split('/')[1]
        let currPlayer= this.invitedPlayers.find(x=>x.name===nameToSing)
        if(!currPlayer){
            throw Error(`${nameToSing} is not invited to the selection list!`)
        }
        if(valueOffer<currPlayer.playerValue){
            let priceDifference=currPlayer.playerValue-valueOffer
            throw Error(`The manager's offer is not enough to sign a contract with ${nameToSing}, $${priceDifference} million more are needed to sign the contract!`)
        }
        currPlayer.playerValue='Bought'
        return `Congratulations! You sign a contract with ${nameToSing} for ${valueOffer} million dollars.`
    }
    ageLimit=(name, age)=>{
        let currPlayer=this.invitedPlayers.find(x=>x.name===name)
        if(!currPlayer){
            throw Error(`${name} is not invited to the selection list!`)

        }
        if(currPlayer.age<age){
            let ageDiffernce= age-currPlayer.age
            if(ageDiffernce>5){
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }else{
                return `${name} will sign a contract for ${ageDiffernce} years with ${this.clubName} in ${this.country}!`
            }
        }else{
           return `${name} is above age limit!`
        }
    }
    transferWindowResult=()=>{
        // not sorted
        let result ="Players list:"
      let a=this.invitedPlayers.sort((a,b) =>a.name.localeCompare(b.name))
        for (const players of a) {
            result+=`\nPlayer ${players.name}-${players.playerValue}`
        }
        return result
    }
}
// test 4
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


// test 3 
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// test 2
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));



// test 1
// let fTeam = new footballTeam("Barcelona", "Spain");
//  console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
