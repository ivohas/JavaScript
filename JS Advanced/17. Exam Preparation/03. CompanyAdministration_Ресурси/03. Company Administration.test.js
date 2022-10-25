const { expect,assert } = require("chai");
const{companyAdministration}=require('./companyAdministration')

describe("Tests …", function() {
   
   it('hireEmployee',function(){
    let name='Gosho'
    let position='Cleaner'
    let yearsExperience=3
    assert.throw(()=>{companyAdministration.hiringEmployee(name,position,yearsExperience)},`We are not looking for workers for this position.`)
    position='Programmer'
    expect(companyAdministration.hiringEmployee(name,position,yearsExperience)).to.be.equal(`${name} was successfully hired for the position ${position}.`)
    yearsExperience=1;
    expect(companyAdministration.hiringEmployee(name,position,yearsExperience)).to.be.equal(`${name} is not approved for this position.`)
 
   })
   it('Salary',function(){
    hours=-12
    assert.throw(()=>{companyAdministration.calculateSalary(hours)},"Invalid hours")
    hours='Suii'
    assert.throw(()=>{companyAdministration.calculateSalary(hours)},"Invalid hours")
    hours=200
    let Salary=1000+15*200;
    expect(companyAdministration.calculateSalary(hours)).to.be.equal(Salary)
   })
   it('firedEmp',function(){
   let arrayOfEmployee= ["Petar", "Ivan", "George"]
   index=1;
   expect(companyAdministration.firedEmployee(arrayOfEmployee,index)).to.be.equal('Petar, George')
   index=NaN
   assert.throw(()=>{companyAdministration.firedEmployee(arrayOfEmployee,index)},"Invalid input")
   index=4
   assert.throw(()=>{companyAdministration.firedEmployee(arrayOfEmployee,index)},"Invalid input")
   index=1
   arrayOfEmployee=3
   assert.throw(()=>{companyAdministration.firedEmployee(arrayOfEmployee,index)},"Invalid input")
   arrayOfEmployee= ["George"]
   index=0
   expect(companyAdministration.firedEmployee(arrayOfEmployee,index)).to.be.equal('')
   index=-1
   assert.throw(()=>{companyAdministration.firedEmployee(arrayOfEmployee,index)},"Invalid input")
   })
});

