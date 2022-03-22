// 불리언
let isDone: boolean = false;

// 숫자
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 문자열
let color: string = 'blue';
color = 'red';

let fullname: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullname}
I'll be ${age + 1} years old next month`;

// 배열
//let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// tuple

// 튜플 타입으로 선언
let x: [string, number];

// 초기화
x = ['hello', 10]; //성공

// 잘못된 초기화
x = [10, 'hello'];

// 열거
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// 기본적으로 enum은 0부터 시작하여 멤버들의 번호를 매깁니다. 멤버 중 하나의 값을 수동으로 설정하여 번호를 바꿀 수 있습니다.
enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let c2: Color2 = Color2.Green;

// enum의 유용한 기능 중 하나는 매겨진 값을 사용해 enum 멤버의 이름을 알아내 수 있다는 것입니다.
enum Color3 {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color3[2];

console.log(colorName); // 값이 2인 'Green'이 출력됩니다.

// Any
// 애플리케이션을 만들 때, 알지 못하는 타입을 표현해야 할 수도 있다.

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // 성공, 분명히 부울입니다.

notSure.ifItExists(); // 성공, ifItExists는 런타임엔 존재할 것입니다.
notSure.toFixed(); // 성공, toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)

let pretteySure: Object = 4;
pretteySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.

// 또한, any 타입은 타입의 일부만 알고 전체는 알지 못할 때 유용합니다.
let list2: any[] = [1, true, 'free'];
list2[1] = 100;

// Void
// 어떤 타입도 존재할 수 없음을 나타내기 때문에, any의 반대 타입 void는 보통 함수에서 반환 값이 없을 때
// 반환 타입을 표현하기 위해 쓰이는 것을 있습니다.
function warnUser(): void {
  console.log('This is my warning message');
}

// Null and Undefined

// 이 밖에 이 변수들에 할당할 수 있는 값이 없습니다.
let u: undefined = undefined;
let n: null = null;

// 기본적으로 null과 undefined는 다른 모든 타입의 하위 타입입니다. 이건, null과 undefined 같은 타입에 할당할 수 있다는 것을 의미합니다.

// Never
// never 타입은 절대 발생할 수 없는 타입을 나타냅니다. 예를 들어, never는 함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나
// 절대 반환하지 않는 반환타입으로 쓰입니다. 변수 또한 타입 가드에 의해 아무 타입도 얻지 못하게 좁혀지면 never 타입을 얻게 될 수 있습니다.

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
  return error('Something failed');
}

// 객체 (Object)
// object는 원시 타입이 아닌 타입을 나타냅니다. 예를 들어, number, string, boolean, bigint, symbol, null, 또는 undefined가 아닌 나머지를 의미합니다.
declare function create(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공

create(42);
create('string');
create(false);
create(undefined);

// 타입 단언(Type assertions)
// 타입 단언은 다른 언어의 타입 변환(형 변환)과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성하지 않습니다.
// 이는 런타임에 영향을 미치지 않으며, 온전히 컴파일러만 이를 사용합니다.

// 타입 단언에는 두 가지 형태가 있습니다. 하나는 "angle-bracket" 문법입니다.
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

// 다른 하나는 as 문법입니다.
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
