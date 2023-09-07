// for


//Normal loop

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }


//Table from 1 to 10

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + "*" + j + "=" + i*j);
//     }
// }


//On array

// let myArray = ['flash', 'batman', 'superman']

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


//break and continue

//break
// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }

//continue
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
}

