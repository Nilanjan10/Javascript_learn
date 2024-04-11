const score = 400
console.log(score);//400

const balance = new Number(100)
console.log(balance);//[Number: 100]
console.log(balance.toString().length);//100//3
console.log(balance.toFixed(2));//100.00

const anyNumber = 23.8646
console.log(anyNumber.toPrecision(4));//4->23.86,3->23.9,2->24,1->2e+1

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));//10,00,000