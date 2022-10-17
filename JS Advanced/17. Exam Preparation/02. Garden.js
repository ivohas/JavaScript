class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable=spaceAvailable
        this.plants=[];
        this.storage=new Array;
    }
    addPlant =(plantName, spaceRequired)=>{
        if(spaceRequired>this.spaceAvailable){
            throw new Error("Not enough space in the garden.")
        }
        // SHOULD ADD PLANT TO THE COLLECTION
        let newPlant={
            plantName,
            spaceRequired,
            ripe:false,
            quantity:0
        }
        this.spaceAvailable-=spaceRequired
        this.plants.push(newPlant)
        return `The ${plantName} has been successfully planted in the garden.`
    }


    ripenPlant=(plantName, quantity)=>{

        let currentPlant= this.plants.find(x=> x.plantName===plantName)
        if(!currentPlant){
            throw Error(`There is no ${plantName} in the garden.`)
        }
        if(currentPlant.ripe==true){
            throw Error(`The ${plantName} is already ripe.`)
        }
        if(quantity<=0){
            throw Error("The quantity cannot be zero or negative.")
        }
        currentPlant.ripe=true;
        currentPlant.quantity=quantity;
        if(currentPlant.quantity>1){
            return `${quantity} ${plantName}s have successfully ripened.`
        }
        return `${quantity} ${plantName} has successfully ripened.`
    }


    harvestPlant=(plantName) =>{
        let currentPlant= this.plants.find(x=> x.plantName===plantName)
        if(!currentPlant){
            throw Error(`There is no ${plantName} in the garden.`)
        }
        if(!currentPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.spaceAvailable+=currentPlant.spaceRequired
        this.plants=this.plants.filter(pl=>pl.plantName!==plantName)
        let quantity=currentPlant.quantity
        let storedPlant={
            plantName,
            quantity
        }
        this.storage.push(storedPlant)
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport=()=>{
        let result=''
         result += `The garden has ${ this.spaceAvailable } free space left.`
         result+='\n'
        result+="Plants in the garden: "
        this.plants.sort((a,b)=>a.plantName.localeCompare(b.plantName)).forEach(plant=>result+=`${plant.plantName}, `)
        result =result.substring(0,result.length-2)
        result+='\n'
        if(this.storage.length===0){
            result+= "Plants in storage: The storage is empty."
        }else{
            // Storage 
            result+= "Plants in storage: "
            this.storage.sort((a,b)=>a.plantName.localeCompare(b.plantName)).forEach(plant=>result+=`${plant.plantName} (${plant.quantity}), `)
           result= result.substring(0,result.length-2)
        }
        return result
    }
}
// Test 1
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('olive', 50));

// Test 2
const myGarden2 = new Garden(250)
console.log(myGarden2.addPlant('apple', 20));
console.log(myGarden2.addPlant('orange', 100));
console.log(myGarden2.addPlant('cucumber', 30));
console.log(myGarden2.ripenPlant('apple', 10));
console.log(myGarden2.ripenPlant('orange', 1));
console.log(myGarden2.ripenPlant('orange', 4));

// TEST 3
const myGarden3 = new Garden(250)
console.log(myGarden3.addPlant('apple', 20));
console.log(myGarden3.addPlant('orange', 100));
console.log(myGarden3.addPlant('cucumber', 30));
console.log(myGarden3.ripenPlant('apple', 10));
console.log(myGarden3.ripenPlant('orange', 1));
console.log(myGarden3.ripenPlant('olive', 30));

// Test 4
const myGarden4 = new Garden(250)
console.log(myGarden4.addPlant('apple', 20));
console.log(myGarden4.addPlant('orange', 100));
console.log(myGarden4.addPlant('cucumber', 30));
console.log(myGarden4.ripenPlant('apple', 10));
console.log(myGarden4.ripenPlant('orange', 1));
console.log(myGarden4.ripenPlant('cucumber', -5));

// Test 5
const myGarden5 = new Garden(250)
console.log(myGarden5.addPlant('apple', 20));
console.log(myGarden5.addPlant('orange', 200));
console.log(myGarden5.addPlant('raspberry', 10));
console.log(myGarden5.ripenPlant('apple', 10));
console.log(myGarden5.ripenPlant('orange', 1));
console.log(myGarden5.harvestPlant('apple'));
console.log(myGarden5.harvestPlant('olive'));

//Test 6
const myGarden6 = new Garden(250)
console.log(myGarden6.addPlant('apple', 20));
console.log(myGarden6.addPlant('orange', 200));
console.log(myGarden6.addPlant('raspberry', 10));
console.log(myGarden6.ripenPlant('apple', 10));
console.log(myGarden6.ripenPlant('orange', 1));
console.log(myGarden6.harvestPlant('orange'));
console.log(myGarden6.generateReport());
 
//Testing harvestPlant

let myGardenH = new Garden(250);
const{assert,expect}=require('chai')
assert.equal(myGardenH.addPlant("apple", 20), "The apple has been successfully planted in the garden.");
assert.equal(myGardenH.addPlant("orange", 200), "The orange has been successfully planted in the garden.");
assert.equal(myGardenH.addPlant("raspberry", 10), "The raspberry has been successfully planted in the garden.");
assert.equal(myGardenH.ripenPlant("apple", 10), "10 apples have successfully ripened.");
assert.equal(myGardenH.ripenPlant("orange", 1), "1 orange has successfully ripened.");
assert.equal(myGardenH.harvestPlant("apple"), "The apple has been successfully harvested.");
expect(() => myGardenH.harvestPlant("raspberry")).to.throw("The raspberry cannot be harvested before it is ripe.");
expect(() => myGardenH.harvestPlant("olive")).to.throw("There is no olive in the garden.");


//Testing generateReport

let myGardenG = new Garden(250);

assert.equal(myGardenG.addPlant("apple", 20), "The apple has been successfully planted in the garden.");
assert.equal(myGardenG.addPlant("orange", 200), "The orange has been successfully planted in the garden.");
assert.equal(myGardenG.addPlant("raspberry", 10), "The raspberry has been successfully planted in the garden.");
assert.equal(myGardenG.ripenPlant("apple", 10), "10 apples have successfully ripened.");
assert.equal(myGardenG.ripenPlant("orange", 1), "1 orange has successfully ripened.");
assert.equal(myGardenG.harvestPlant("orange"), "The orange has been successfully harvested.");
assert.equal(myGardenG.generateReport(), "The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)");

//Check
//'The garden has 220 free space left.\nPlants in the garden: apple, raspberry\nPlants in storage: orange (1)'
//'The garden has 220 free space left.\nPlants in the garden: apple,raspberry\nPlants in storage: orange (1)'