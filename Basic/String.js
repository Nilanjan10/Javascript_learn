const name = "nilanjan"
const repos = 4

//console.log(name+repos+" Value");
console.log(`Hello my name is ${name} and my repo count is ${repos}`);//Hello my name is nilanjan and my repo count is 4
const gameName = new String('XlrNil')
console.log(gameName[0]);//x
console.log(gameName.length);//6
console.log(gameName.charAt(2));//r
console.log(gameName.indexOf('l'));//1

const newGName = gameName.substring(0,3)
console.log(newGName);//Xlr

const newGNAME = gameName.slice(-6,4)
console.log(newGNAME);//XlrN

const newString = "  nila  "
console.log(newString.trim());//nila

const url = "https://nil.com/nil%20lm"
console.log(url.replace('%20','-'));//https://nil.com/nil-lm
console.log(url.includes('nil'));//true

const level = "twenty-five"
console.log(level.split('-'));//[ 'twenty', 'five' ]