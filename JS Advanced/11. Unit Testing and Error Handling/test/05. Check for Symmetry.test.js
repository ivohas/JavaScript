const{expect}=require('chai')
const {isSymmetric}=require('../05. Check for Symmetry')
describe('SymetricalTests',()=>{
    it('should return true',()=>{
        //Arrenge
        let array=[1,2,3,4,5,4,3,2,1];
        //Act
         result=isSymmetric(array)
        //Assert
        expect(result).to.be.equal(true)
    })
    it('should return false',()=>{
        //Arrenge
        let array=[1,2,5,4,3,2,1];
        //Act
         result=isSymmetric(array)
        //Assert
        expect(result).to.be.equal(false)
    })
    it('should return false becouse of not correct input',()=>{
        //Arrenge
        let array=132;
        //Act
         result=isSymmetric(array)
        //Assert
        expect(result).to.be.equal(false)
    })
    it('taake an arrey',()=>{
        //Arrenge
        let array=[1,'a',5,4,3,'a',1];
        //Act
         result=isSymmetric(array)
        //Assert
        expect(result).to.be.equal(false)
    })
    describe('SymetricalTests',()=>{
        it('should return true',()=>{
            //Arrenge
            let array=[1,2,3,4,5,4,3,2,1];
            //Act
             result=isSymmetric(array)
            //Assert
            expect(result).to.be.equal(true)
        })
        it('should return false',()=>{
            //Arrenge
            let array=[1,2,5,4,3,2,1];
            //Act
             result=isSymmetric(array)
            //Assert
            expect(result).to.be.equal(false)
        })
        it('should return false becouse of not correct input',()=>{
            //Arrenge
            let array=132;
            //Act
             result=isSymmetric(array)
            //Assert
            expect(result).to.be.equal(false)
        })
        it('tarey',()=>{
            //Arrenge
            let array=[1,'a','a',1];
            //Act
             result=isSymmetric(array)
            //Assert
            expect(result).to.be.equal(true)
        })
    })
})