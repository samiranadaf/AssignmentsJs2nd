function CurrentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log("Current date is:" + ' ' + day + "/" + month + "/" + year);
    console.log("Current date is:" + ' ' + day + "-" + month + "-" + year);
    console.log("Current date is:" + ' ' + month + "/" + day + "/" + year);
    console.log("Current date is:" + ' ' + month + "-" + day + "-" + year);


}
CurrentDate();