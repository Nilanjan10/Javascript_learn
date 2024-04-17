const Arr = [99,88,77,"nil","hitesh"]
console.log(Arr[3]);//nil
const myHero = ["ironman","thor"]
const Arr2 = new Array(1,2,3,4)
console.log(Arr2[1]);//2

Arr.push(6)//add element at the last
Arr.push(10)
Arr.pop()//removes last element
console.log(Arr);//[ 99, 88, 77, 'nil', 'hitesh', 6 ]

Arr2.unshift(7)//adds element at the first
Arr2.unshift(12)
Arr2.shift()//removes first element
console.log(Arr2);//[ 7, 1, 2, 3, 4 ]

const newArr = Arr.join()
console.log(newArr);//99,88,77,nil,hitesh,6
console.log(typeof Arr);//OBJECT
console.log(typeof newArr);//STRING

//////slice vs splice////////
const val = [11,22,33,44]
console.log(val.slice(1,3));//[ 22, 33 ]
console.log("A",val);//A [ 11, 22, 33, 44 ]

const val2 = [11,22,33,44]
console.log(val2.splice(1,3));//[ 22, 33, 44 ]
console.log("A",val2);//A [ 11 ]

// slice() extracts elements into a new array without modifying the original. splice() changes the contents of the original array
