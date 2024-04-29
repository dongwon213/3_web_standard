console.log('===== 전역 스코프 =====')
var data1 = 49;
function func1(){
    console.log('함수 안 data : ${data1}')
}


func1();
console.log('함수 안 data : ${data}')

console.log('===== 지역 스코프 =====')
// function func1(){
//     var data2 = 49;
//     console.log('함수 안 data : ${data2}')
// }

// func2();

// console.log('함수 안 data : ${data2}')
// console.log('===== 블록 스코프 =====')
// console.log('===== let =====')
// let temp1 = 94;
// function func3(){
//     let temp2 = 49;
//     console.log('함수 안 temp1 : ${temp1}')
//     console.log('함수 안 temp2 : ${temp2}')
// }

console.log('===== 블록 스코프 =====')
console.log('===== var =====')
var temp1 = 94;
{
    var temp2 = 49;
    console.log('함수 안 temp1 : ${temp1}');
    console.log('함수 안 temp2 : ${temp2}');
}

console.log('함수 밖 temp1 : ${temp1}');
console.log('함수 밖 temp2 : ${temp2}');

console.log('===== 블록 스코프 =====');
console.log('===== var =====');

var temp1 = 94;

{
    var temp2 = 49;
    console.log(`함수 안 temp1 : ${temp1}`);
    console.log(`함수 안 temp2 : ${temp2}`);
}

console.log(`함수 밖 temp1 : ${temp1}`);
console.log(`함수 밖 temp2 : ${temp2}`); // temp2는 함수 안에서 정의된 지역 변수이므로 함수 밖에서 접근할 수 없습니다.


