function rotate() {
    let word = ' w3resource ';
    setInterval(function() {
        let last = word.slice(-1);
        let curr = word.slice(0,-1);
        word = last+curr;
        
      console.log(word);
    },300);


}
rotate();