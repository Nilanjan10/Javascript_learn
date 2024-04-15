let myDate = new Date()
console.log(myDate);//2024-04-15T18:52:57.701Z
console.log(typeof myDate);//object
console.log(myDate.toString());//Tue Apr 16 2024 00:32:47 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());//2024-04-15T19:03:33.539Z
console.log(myDate.toJSON());//2024-04-15T19:11:55.758Z
console.log(myDate.toDateString());//Tue Apr 16 2024
console.log(myDate.toLocaleString());//16/4/2024, 12:41:55 am

let newDate = new Date(2023,0,23,8,30)
console.log(newDate.toDateString());//Mon Jan 23 2023
console.log(newDate.toLocaleString());//23/1/2023, 8:30:00 am

let Timestamp = Date.now()
//console.log(Timestamp);//1713214243086 ->in milisec
//console.log(newDate.getTime());//1674442800000 ms both can be compared
console.log(Math.floor(Date.now()/1000));//1713214487 sec