const { expect,assert } = require("chai");
const{chooseYourCar}=require('./chooseYourCar')
describe("Tests …", function() {
  describe("TODO …", function() {
      it("First …", function() {
       let color='yellow'
      let type='Sedan'
          assert.throw(()=>{chooseYourCar.choosingType('Sedan','yellow',1899)},"Invalid Year!")
          assert.throw(()=>{chooseYourCar.choosingType('Sedan','yellow',2300)},"Invalid Year!")
          assert.throw(()=>{chooseYourCar.choosingType('Comby','yellow',2000)},"This type of car is not what you are looking for.")

          expect(chooseYourCar.choosingType(type,color,2010)).to.be.equal(`This ${color} ${type} meets the requirements, that you have.`)
          expect(chooseYourCar.choosingType(type,color,2009)).to.be.equal(`This ${type} is too old for you, especially with that ${color} color.`)
      });
      it("AAA …", function() {
        let color='yellow'
        let type='Sedan'
        expect( chooseYourCar.choosingType( type,color,2011)).to.be.equal(`This ${color} ${type} meets the requirements, that you have.`)
       expect(chooseYourCar.choosingType(type,color,2009)).to.deep.equal(`This ${type} is too old for you, especially with that ${color} color.`)
        
      })
      it("BarndNAme …", function() {
        let array=(["BMW", "Toyota", "Peugeot"])
        let index=2
        assert.throw(()=>{chooseYourCar.brandName(array,4)},"Invalid Information!")
        array=2
        assert.throw(()=>{chooseYourCar.brandName(array,index)},"Invalid Information!")
        assert.throw(()=>{chooseYourCar.brandName(array,'aindex')},"Invalid Information!")
        array=(["BMW", "Toyota", "Peugeot"])
        expect(chooseYourCar.brandName(array,index)).to.deep.equal("BMW, Toyota")
      })
      it("CarFuelConsumption …", function() {
        let a=6/10
       a= a.toFixed(2)

          expect(chooseYourCar.carFuelConsumption(1000,6)).to.be.equal(`The car is efficient enough, it burns ${a} liters/100 km.`)
          a=(7).toFixed(2)
          expect(chooseYourCar.carFuelConsumption(100,7)).to.be.equal(`The car is efficient enough, it burns ${a} liters/100 km.`)
          a=(8)
          a=a.toFixed(2)
          expect(chooseYourCar.carFuelConsumption(1000,80)).to.be.equal(`The car burns too much fuel - ${a} liters!`)
        assert.throw(()=>{chooseYourCar.carFuelConsumption('s',8)},"Invalid Information!")
        assert.throw(()=>{chooseYourCar.carFuelConsumption(100,'s')},"Invalid Information!")
      })
   });
 
});
