
// slowMath.add(6,2)
// .then((val)=>{
// console.log(val);
// return slowMath.multiply(val,2);
// }).then((val)=>{
// console.log(val);
// return slowMath.divide(val,4);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.subtract(val,3);
// }).then ((val)=>{
//     console.log(val);
//     return slowMath.add(val,98);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.remainder(val,2);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.multiply(val,50);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.remainder(val,40);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.add(val,32);
// }).then((val)=>{
//     console.log(val);
//     console.log(`The final result is ${val}`);
// }).catch((err)=>{
//     console.log(err);
// });

// slowMath.add(1,1)
// .then((val)=>{
// console.log(val);
// return slowMath.multiply(val,2);
// }).then((val)=>{
// console.log(val);
// return slowMath.divide(val,4);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.subtract(val,3);
// }).then ((val)=>{
//     console.log(val);
//     return slowMath.add(val,98);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.remainder(val,2);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.multiply(val,50);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.remainder(val,40);
// }).then((val)=>{
//     console.log(val);
//     return slowMath.add(val,32);
// }).then((val)=>{
//     console.log(val);
//     console.log(`The final result is ${val}`);
// }).catch((err)=>{
//     console.log(err);
// });



async function doMath() {
    try {
        let result =  await slowMath.add(6, 2);
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result);
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add(result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.remainder(result, 40);
        console.log(result);
        result = await  slowMath.add(result, 32);
        console.log(result);
        console.log(`the result is ${result}`);

    } catch (error) {
        console.log(error);
    }


};
doMath();
