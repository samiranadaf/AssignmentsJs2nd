function largestNumber(element) {
    return function (value, index, array) {
        return (value >= element);
    };
}
var result = [11, 45, 4, 31, 64, 10].filter(largestNumber(10));
console.log(result);  