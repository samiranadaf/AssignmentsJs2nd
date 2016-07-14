function checkLeapYear() {
    let year = prompt("Enter Year");
    if (year % 4 === 0 || year % 400 === 0 && year % 100 !== 0) {
        console.log("Entered Year is Leap Year");
    }
    else {
        console.log("Entered Year is Not Leap Year");
    }
}
checkLeapYear();