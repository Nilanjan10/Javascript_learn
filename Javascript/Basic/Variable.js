const accountId = 1234                 //for constant variables
let accountEmail = "nil123@gmail.com"  //for variables that can be changed
var accountPassword = "4321"           //same as let but don't use var due to issue in block and functional scope
accountCity = "Jaipur"
let accountState;

accountEmail = "abc@gmail.com"
accountPassword = "23"
accountCity = "Pune"
// accountId = 2 it is not allowed const means it is constant
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);