const marvel_heros = ["ironman","thor","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);//[ 'ironman', 'thor', 'spiderman', [ 'superman', 'flash', 'batman' ] ]--same for concat
console.log(marvel_heros[3][1]);//flash
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);//[ 'ironman', 'thor', 'spiderman', 'superman', 'flash', 'batman' ]

const new_arr = [1,2,[3,4],5,[6,7,[8,9]]]
const real_arr = new_arr.flat(Infinity)
console.log(real_arr);//[1,2,3,4,5,6,7,8,9]

console.log(Array.isArray("Nilanjan"));//false
console.log(Array.from("Nilanjan"));//['N', 'i', 'l','a', 'n', 'j','a', 'n']
let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]