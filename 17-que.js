function binarySearch(array, element) {
    let position = Math.floor(array.length / 2);

    if (array[position] === element) {
        return position;
    }
    else if (array.length === 1) {
        return null;
    }
    else if (array[position] < element) {
        let arr = array.slice(position + 1);
        let result = binarySearch(arr, element);
        if (arr === null) {
            return null;
        }
        else {
            return position + 1 + result;
        }
    }
    else {
        let arr1 = array.slice(0, position);
        return binarySearch(arr1, element);
    }
}

var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binarySearch(myArray, 6));  