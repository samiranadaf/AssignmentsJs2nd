function randomNum() {
    let num = (Math.ceil(Math.random() * 11));
    //console.log(num);
    let enterNum = prompt("Enter Number");
    if (num === enterNum) {
        console.log("Good Work...!");
    }
    else {
        console.log("Not Matched");
    }
}
randomNum();