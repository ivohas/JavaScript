class SmartHike{
    constructor(username){
        this.username=username
        this.goals={}
        this.listOfHikes=new Array
        this.resources=100
    }
    addGoal =(peak, altitude)=>{
        if (this.goals[peak] == undefined) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
          } else {
            return `${peak} has already been added to your goals`;
          }
    }
    hike= (peak, time, difficultyLevel)=>{
        if(this.goals[peak]==undefined){
            throw Error(`${peak} is not in your current goals`)
        }
        if(this.resources<1){
            throw Error("You don't have enough resources to start the hike")
        }
        let difference= this.resources-time*10
        if(difference<0){
            throw Error("You don't have enough resources to complete the hike")
        }
        this.resources-=time*10
        this.listOfHikes.push({ peak, time, difficultyLevel })
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
} 
//test 2
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.hike('Rui', 3, 'easy'));
console.log(user.hike('Everest', 12, 'hard'));

// test 1
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));
