
//1

// const promiseOne = new Promise((resolve, reject) => {
// //     Do an async function
// //     DB calls, network, cryptography
//     setTimeout(()=> {
//         console.log("Async task is completed");
//         resolve();
//     }, 1000)
// });

// promiseOne.then(() => {
//     console.log("Promise Consumed");
// });


//2

// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Async 2 is consumed");
//         resolve();
//     }, 1000)
// })
// .then(() => {
//     console.log("Promise2 Consumed");
// })


//3

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({username : "Abhay Agrawal", email: "abhaytalkin@gmail.com"})
//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user);
// })


//4

// const promiseFour = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username : "Abhay Agrawal", password : "123abc"})
//         }
//         else{
//             reject("Error : Something went wrong")
//         }
//     },1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(()=> {
//     console.log("The Promise is either resolved or rejected");
// })

//5

// const promiseFive = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({language : "javascript", password : "123abc"})
//         }
//         else{
//             reject("Error : Javascript went wrong");
//         }
//     },1000)
// })

// async function consumePromiseFive (){
//     try {
//         let res = await promiseFive;
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();


//6


//fetch using try catch block

// async function getAllUsers () {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await res.json()
//         console.log(data);   
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

//fetch using .then .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})