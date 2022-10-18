const { Test } = require("mocha")

class VegetableStore{

    constructor(owner,location){
        this.owner=owner
        this.location=location
        this.availableProducts=new Array
    }
    loadingVegetables=(vegetables)=>{
        
         let loaldedStock=[]
         for (const veg of vegetables) {
            let type=veg.split(' ')[0]
            let quantity=Number(veg.split(' ')[1])
            let price=Number(veg.split(' ')[2])
            let vegetable= this.availableProducts.find(x=>x.type===type)
            
            if(!vegetable){
               this.availableProducts.push({type,quantity,price}) 
               loaldedStock.push(type)
            }
            else{
               vegetable.quantity+=quantity
               if(vegetable.price<price){
                vegetable.price=price
            }
            }
         }
        loaldedStock= loaldedStock.sort((a,b)=> a-b)
        let result=`Successfully added `+ loaldedStock.join(', ')
        	return result
    }
    buyingVegetables =(selectedProducts)=>{
        let totalPrice=0;
        selectedProducts.forEach(data => {

            let [type,quantity]=data.split(' ')
            let currentProduct= this.availableProducts.find(pr=>pr.type===type)
            if(!currentProduct)
            {
                throw Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            
                if(quantity>currentProduct.quantity){
                    throw Error( `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }
                    let priceForProduct=+ quantity*currentProduct.price;
                    totalPrice+=priceForProduct
                  currentProduct.quantity-=quantity               
               return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`            
        });
    }

}
// Test 1
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// Test 2 
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
 console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
 console.log(vegStore.buyingVegetables(["Okra 1"]));
 console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
 console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
