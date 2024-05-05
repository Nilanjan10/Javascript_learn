//const fbUser = new Object()//singleton

const fbUser = {}
    fbUser.id="123ab"
    fbUser.name="nil"
    fbUser.isLoggedIn=false
//console.log(fbUser);{ id: '123ab', name: 'nil', isLoggedIn: false }

const reguser = {
    email:"any@gmail.com",
    userName :{
        fullName:{
            firstName:"Nilanjan",
            lastName:"Bhattacharya"
        }
    }
}
//console.log(reguser.userName.fullName);//{ firstName: 'Nilanjan', lastName: 'Bhattacharya' }

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"a",6:"b"}

const obj5 = {obj1,obj2,obj3}
//console.log(obj5);//{ obj1: { '1': 'a', '2': 'b' },obj2: { '3': 'c', '4': 'd' },obj3: { '5': 'a', '6': 'b' }}
const obj4 = Object.assign({}/*target,source*/,obj1,obj2,obj3)
//console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'b' }
const obj6 = {...obj1,...obj2,...obj3}
//console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'a', '6': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(fbUser);//{ id: '123ab', name: 'nil', isLoggedIn: false }

console.log(Object.keys(fbUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(fbUser));//[ '123ab', 'nil', false ]
console.log(Object.entries(fbUser));//[ [ 'id', '123ab' ], [ 'name', 'nil' ], [ 'isLoggedIn', false ] ]

console.log(fbUser.hasOwnProperty('isLoggedIn'));//true