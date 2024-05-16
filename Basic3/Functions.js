function addTwoNumbers(num1,num2) {//num1,num2->parameters
    return num1+num2
}
const result = addTwoNumbers(3,2)//3,2->arguments
console.log("Result: ",result);//Result:  5

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`//The `${}` syntax is used to insert the value of a variable or an expression inside a string
}
//console.log(loginUserMessage("Nilanjan"));//Nilanjan just logged in
console.log(loginUserMessage());//undefined

function calculateCartPrice(...num){//The rest operator allows you to represent an indefinite number of arguments as an array. It's denoted by three dots (...)
    return num
}
console.log(calculateCartPrice(1,2,3));//[ 1, 2, 3 ]

const user={
    userid:"Nil10",
    price:"199"
}
function handleObject(anyobject){
    console.log(`Userid is ${anyobject.userid} and price is ${anyobject.price}`);
}
handleObject(user)//Userid is Nil10 and price is 199

const newArray = [100,500,200]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(newArray));//500