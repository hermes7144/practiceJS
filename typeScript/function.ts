// 기명 함수
function add(x: number, y: number): number {
  return x + y;
}

// 함수 타입 작성하기 (Writing the function type)
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

// 함수의 타입은 매개변수의 타입과 반환 타입이 있습니다. 전체 함수 타입을 작성하고자 한다면 이 두 가지 타입이 필요합니다.

// 매개변수의 타입들이 올바르게 나열되어 있다면 함수 타입에 이름을 붙이더라도 유효한 타입으로 간주합니다.
let myAdd2: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
  return x + y;
};

// 두 번째로 반환 타입입니다. 매개변수 타입들과 반환 타입 사이에 '화살표 표기'(=>)를 써서 반환 타입을 분명히 할 수 있습니다.
// 이전에 언급했듯이, 함수 표기에 필요한 부분입니다. 그래서 만약 함수가 값을 반환하지 않는다면 비워두는 대신 void를 써서 표시합니다.

// 타입의 추론

// myAdd는 전체 함수 타입을 가집니다.
let myAdd3 = function (x: number, y: number): number {
  return x + y;
};

// 매개변수 x와 y는 number 타입을 가집니다.
let myAdd4: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
