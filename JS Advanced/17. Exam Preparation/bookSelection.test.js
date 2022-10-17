const { expect,assert } = require('chai');
const {bookSelection}=require('./bookSelection')


describe("Tests …", function() {
    describe("IsTheFilmSuatable", function() {

        it("HorrorAndNotOldEnought", function() {
           let genre= 'Horror'
           let age=10;
           expect(bookSelection.isGenreSuitable(genre,age)).to.be.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`)
        });
        it("TrillerAndNotOldEnought", function() {
            let genre= 'Thriller'
            let age=12;
            expect(bookSelection.isGenreSuitable(genre,age)).to.be.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`)
         });
        
         it("TheBookIsAllRight", function() {
            let genre= 'Normal'
            let age=12;
            expect(bookSelection.isGenreSuitable(genre,age)).to.be.equal(`Those books are suitable`)
         });
         it("OldEniugt", function() {
            let genre= 'Thriller'
            let age=22;
            expect(bookSelection.isGenreSuitable(genre,age)).to.be.equal(`Those books are suitable`)
         });
     });

     describe("PriceAndBudget", function() {

        it("BugetIsMoreThanPrice", function() {
        let budget=12.20;
        let bookPrice=11.90;
        let result=budget-bookPrice
        expect(bookSelection.isItAffordable(bookPrice,budget)).to.be.equal(`Book bought. You have ${result}$ left`)
         })
        it("Dont have money", function() {
        let budget=12.20;
        let bookPrice=14.90;
        let result=budget-bookPrice
        expect(bookSelection.isItAffordable(bookPrice,budget)).to.be.equal("You don't have enough money")
        })

       // I should check type
       it("NotCorectInput", function() {
       assert.throw(()=>{bookSelection.isItAffordable('budget',10)},"Invalid input")
       assert.throw(()=>{bookSelection.isItAffordable(10,'10')},"Invalid input")
       assert.throw(()=>{bookSelection.isItAffordable('budget','10')},"Invalid input")
        })
       // Test for the last method
    
      });
      describe("ArrayOfBooks", function() {
        it("NotAnArray", function() {
            let arr='s';
            let genre= 'Triller'
            assert.throw(()=>{bookSelection.suitableTitles(arr,genre),"Invalid input"})
            // wanted book is not a string
            arr=[{ title: "The Da Vinci Code", genre: "Thriller" }]
            genre=10
            assert.throw(()=>{bookSelection.suitableTitles(arr,genre),"Invalid input"})
        })
        it('WorksProperly',function(){
            arr=[{ title: "The Da Vinci Code", genre: "Thriller" },
                 {title:"Assasins creed creation", genre:"Action"}]
                 let genre='Thriller';
                 result=["The Da Vinci Code"]
                 expect(bookSelection.suitableTitles(arr,genre)).to.deep.equal(result)

        })
    })
    
});
