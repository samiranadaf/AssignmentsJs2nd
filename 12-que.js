function findFactors(num) {
    let temp = num

    for (let i = 1; i <= temp; i++) {
        if (temp % i == 0) {
            console.log(i);
        }
    }

}
findFactors(12);