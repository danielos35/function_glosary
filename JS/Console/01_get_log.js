const init = { input: process.stdin, output: process.stdout }
const readline = require("readline").createInterface(init)[Symbol.asyncIterator]();
let arraySanta = [];

const validArray = (array_santa = [])=>{
    let subiendo = true;
    let esParabola = true;
    arraySanta.map((res, i, arr)=>{
        if(i > 0 && res > arr[i-1] && subiendo == false){
            esParabola = false;
        }

        if(i > 0 && res > arr[i-1]){
            subiendo = true;
        }

        if(i > 0 && res < arr[i-1] && subiendo == true){
            subiendo = false;
        }

    })
    return esParabola

}

(async () => {
    let line1 = (await readline.next()).value
    arraySanta = [0,2,3,4,3,2,1];
    // arraySanta = arraySanta.map(res => Number(res));
    console.log(validArray(arraySanta));
})();
