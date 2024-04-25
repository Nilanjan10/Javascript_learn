/* can be created by 2 ways - as literals and from constructors(singleton-only one instance of a class and that instance can be accessed globally)--Object.create*/

//object literals
const myPass = Symbol("key1")
const JsUser = {
    name: "Nil",
    "full name": "Nilanjan Bhattacharya",
    [myPass]: "mykey1",
    age: 21,
    loc: "kolkata",
    isLoggedIn: false,
    lastLoggedIn: ["MON","TUE"]
}

console.log(JsUser.age);//21
console.log(JsUser["full name"]);//Nilanjan Bhattacharya
console.log(JsUser[myPass]);//mykey1 -- type-symbol

JsUser.name = "lm10"
//Object.freeze(JsUser)
JsUser.name = "Nilanjan"
console.log(JsUser);//name is updated to lm10 from nil but after freeze modifications are not possible

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());//Hello JS user
console.log(JsUser.greetingTwo());//Hello JS user, Nilanjan