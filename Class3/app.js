//class 3
function addArgus() {
    let sum = 0;
    for (let i=0; arguments.length > i; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
};

addArgus(1, 2, 3, 4, 5, 6);