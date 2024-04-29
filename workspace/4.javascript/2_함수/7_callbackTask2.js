// 문제
let products = [
    {품목 : '마우스', 가격 : '50000', 수량 : 5},
    {품목 : '키보드', 가격 : '100000', 수량 : 3},
    {품목 : '모니터', 가격 : '250000', 수량 : 2},
    {품목 : '노트북', 가격 : '1550000', 수량 : 1}
]

// 함수를 정의한다
// 해당 배열을 전달하면 
// 품목 객체를 새롭게 리턴 받아보자
// 예시 : 품목:마우스, 총가격:250000
// 메게변수로 마우스와 callback합수를 전달받는 함수
// 콜백 -> 품복이름이 넘어온 걸로 가격과 수량을 구해서
// 두 수를 곱해서 히턴해주는 친구를 만들어라
function gettype(type){
    for(pro of products){
        if(pro.품목 == type){
            return pro.수량 * pro.가격;
        }
    }
}

function test(proName, callback){
    let total = callback(proName);
    let result = {
        품목 : proName,
        총가격 : total
    }
    return result;
    
}
function getTotal(proName){


    for(pro of products){
        if(pro.품목 == '마우스'){
            return pro.수량 * pro.품목;
        }

    }

}

console.log(test('마우스', getTotal));


gettype('마우스');




for(pro of products){
    if(pro.품목 == '마우스'){
        return pro.수량 * pro.품목;
    }
    



    console.log(pro.품목 == '마우스');
}
