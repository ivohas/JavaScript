const { expect } = require('chai');
const {sum}=require('../04. Sum of Numbers')

describe('sum',()=>{
    it('should return correct sum',()=>{
        //Arrenge
        let array=[1,2,3,4,4,5,]
        //Act 
        result= sum(array)
        //Assert
        expect(result).to.be.equal(19)
    });
    it('should be working with all types',()=>{
         //Arrenge
         let array=[true,2,3,4,4,5,]
         //Act 
         result= sum(array)
         //Assert
         expect(result).to.be.equal(19)
    })

})