function colorize() {
    // TODO
    let arrey = document.querySelectorAll('table tr')
     index=0
    for (const iterator of arrey) {
      index++ 
        if(index%2==0){
           iterator.style.background='teal'
        }
    }
}