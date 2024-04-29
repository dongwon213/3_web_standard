function printTest(){
    console.log('hello world');
}

const temp1 = function(){
    console.log('hello javascript');
}

const temp2 = function name(){
    console.log('hello javascript');
}

const temp3 = () => {
    console.log('에로우함수')
}

printTest();
temp1();
// name(); 에러
temp2();
temp3('이거 출력해');

