function uniqueAlphabates(str1) {
    var str = str1;
    var uniqChar = "";
    for (var x = 0; x < str.length; x++) {

        if (uniqChar.indexOf(str.charAt(x)) === -1) {
            uniqChar = uniqChar + str[x];

        }
    }
    return uniqChar;
}
console.log(uniqueAlphabates("thequickbrownfoxjumpsoverthelazydog"));  