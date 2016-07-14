function countDays() {
    let oneDay = 1000 * 60 * 60 * 24;
    let firstDate = new Date(2016, 12, 25);
    let secondDate = new Date(2015, 12, 25);
    let difference = Math.floor(Math.abs(firstDate.getTime() - secondDate.getTime())) / oneDay;
    console.log(difference);
}
countDays();