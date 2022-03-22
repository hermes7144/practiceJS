// 함수 타입(Function Types)
// 인터페이스로 함수 타입을 기술하기 위해, 인터페이스에 호출 서명(call signature)를 전달합니다.
// 이는 매개변수 목록과 변환 타입만 주어지는 함수 선언과 비슷합니다. 각 매개변수는 이름과 타입이 모두 필요합니다.

interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 한번 정의되면, 함수 타입 인터페이스는 다른 인터페이스처럼 사용할 수 있습니다.
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

// 인덱서블 타입(Indexable Types)
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

console.log(myStr);

// 위에 인덱스 시그네쳐가 있는 StringArray 인터페이스가 있습니다. 이 인덱스 서명은 StringArray가 number로 색인화(indexed)
// 되면 string을 반환할 것을 나타냅니다.

// 인덱스 시그네쳐를 지원하는 타입에는 두 가지가 있다. 문자열과 숫자
// 두 타입의 인덱서(indexer)를 모두 지원하는 것은 가능하지만, 숫자 인덱서에서 반환된 타입은 반드시 문자열 인덱서에서 반환된 타입의 하위 타입이어야 한다.
// 이 이유는 number로 인덱싱 할 때, JavaScript는 실제로 객체를 인덱싱하기 전에 string으로 변환하기 때문입니다.

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

// 오류: 숫자형 문자열로 인덱싱을 하면 완전히 다른 타입의 Animal을 얻게 될 것입니다!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

// 문자열 인덱스 시그니처는 "사전" 패턴을 기술하는 데 강력한 방법이지만, 모든 프로퍼티들이 반환 타입과 일치하도록 강제합니다.
// 문자열 인덱스가 obj.property가 obj['property']로도 이용 가능함을 알려주기 때문입니다. 다음 예제에서, name의 타입은
// 문자열 인덱스 타입과 일치하지 않고, 타입 검사는 에러를 발생시킵니다.

interface NumberDictionary {
  [index: string]: number;
  length: number; // 성공, length는 숫자입니다.
  name: string; // 오류, 'name'의 타입은 인덱서의 하위타입이 아닙니다.
}

// 하지만, 인덱스 시그니처가 프로퍼티의 합집합이라면 다른 타입의 프로퍼티들도 허용할 수 있습니다.
interface NumberorStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

// 마지막으로, 인덱스의 할당을 막기 위해 인덱스 시그니처를 읽기 전용으로 만들 수 있습니다.
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ['Alice', 'Bob'];
myArray2[1] = 'Mallory';
