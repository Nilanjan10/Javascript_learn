//primitive datatypes are stored in stack memory
let myName = 'nil'
let newName = myName
myName = 'nila'
console.log(myName);//nila
console.log(newName);//nil

//non primitive datatypes are stored in heap memory
let myEmail = {
    email: 'nil@gmail.com',
    user: 'me'
}
let newEmail = myEmail
myEmail.email = "nilanjan@gmail.com"

console.log(myEmail.email);//nilanjan@gmail.com
console.log(newEmail);//{email: 'nilanjan@gmail.com', user: 'me'}
