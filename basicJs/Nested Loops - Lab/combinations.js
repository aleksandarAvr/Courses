function combinations(input) {

    let n = Number(input[0]);
    let combinCounter = 0;

    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {


            for (let c = 0; c <= n; c++) {
                let sum = a + b + c;
                if(sum === n){
                    combinCounter++;
                }

            }
        }
    }
    console.log(combinCounter)
}
combinations([20])