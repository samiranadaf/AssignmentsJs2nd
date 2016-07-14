function uniqueId(len) {
    let id = "";
    
    let string = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < len; i++) {

        id = id + string.charAt(Math.floor(Math.random() * string.length));
    }
    console.log(id);
}
uniqueId(8);