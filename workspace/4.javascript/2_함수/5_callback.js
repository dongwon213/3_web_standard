function callbackTEst1(callback){
    for(let i = 1; i <= 3; i++){
        callback(i);
    }

}

function print(number){
    console.log(`${number}번쨰 함수 호출`)
}

function printTest(i){
    console.log(`${i}번쨰 함수 호출2`)
}

callbackTEst1(print);
callbackTEst1(printTest);

callbackTEst1(function printTest2(i){
    console.log(`${i}번째 호출중 3`)
});

callbackTEst1((i) => console.log(`${i}번쨰 호출중4`));


