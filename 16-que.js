function occurrence(str, subString, overlapping) {

    str = str + "";
    subString = subString + "";
    if (subString.length <= 0) return (str.length + 1);

    var num = 0,
        position = 0,
        step = overlapping ? 1 : subString.length;

    while (true) {
        position = str.indexOf(subString, position);
        if (position >= 0) {
            ++num;
            position = position + step;
        } else break;
    }
    console.log(num);
}
occurrence("samira", "a");