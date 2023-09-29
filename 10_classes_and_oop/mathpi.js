const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

//console.log(descripter);

//console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name : 'ginger chai',
    price : 250, 
    isAvailable : true,
    
    orderChai : function() {
        console.log("Chai nhi bani");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai , 'name', {
    // writable : false,
    enumerable : false
})

for (const [key , value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

// for(let k in chai){
//     if(typeof chai[k] !== 'function'){
//         console.log(`${k} : ${chai[k]}`);
//     }
// }

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
