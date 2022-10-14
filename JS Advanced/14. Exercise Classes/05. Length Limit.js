class Stringer{
    constructor(word,lenght){
        this.word=word
        this.long=lenght
        this.bing=lenght
    }
    increase=(num)=>{
        this.long+=num
        if(this.long>this.bing){
            this.long=this.bing
        }
    }
    decrease=(num)=>{
        this.long-=num
        if(this.long<0){
            this.long=0
        }
    }
    toString=()=>{
        let newWord= this.word.substring(0,this.long)
       
    
      
        let num = this.bing-this.long;
        
       
          
        let a=''
        for(let i=0;i<num;i++){
            a+='.'
        }
        let result=newWord+a
        return result
    }
    
}

let s = new Stringer("Viktor", 6);
s.decrease(3)
s.decrease(4)
s.increase(5)
s.increase(3)
console.log(s.toString())
     
