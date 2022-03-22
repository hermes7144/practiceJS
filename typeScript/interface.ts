// TypeScript의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다는 것입니다.

// 첫 번째 인터페이스
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// Optional Properties

// 선택적 프로퍼티를 가지는 인터페이스는 다른 인터페이스와 비슷하게 작성되고,
// 선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 ?를 붙여 표시합니다.
// 선택적 프로퍼티의 이점은 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서, 사용 가능한 속성을 기술하는 것입니다.
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({ color: 'black' });

// 읽기전용 프로퍼티(Readonly properties)
// 일부 프로퍼티들은 객체가 처음 생성될 때만 수정 가능해야합니다. 프로퍼티 이름 앞에 readonly를 넣어서 이를 지정할 수 있습니다.

interface Point {
  readonly x: number;
  readonly y: number;
}

// 객체 리터럴를 할당하여 Point를 생성
let p1: Point = { x: 10, y: 20 };
p1.x = 5;

// 생성 후에 배열을 변경하지 않음을 보장
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

// 타입 단언(type assertion)으로 오버라이드 하는 것은 가능합니다.
a = ro as number[];

// readonly vs const
// readonly와 const 중에 어떤 것을 사용할 지 기억하기 가장 쉬운 방법은 변수와 프로퍼티중 어디에 사용할지 질문해 보는 것.
// 변수는 const를 사용하고 프로퍼티는 readonly에 사용

// 초과 프로퍼티 검사(Excess Property Checks)

// 함수 타입(Function Types)
// 인터페이스로 함수 타입을 기술하기 위해, 인터페이스에 호출 서명(call signature)를 전달합니다.
// 이는 매개변수 목록과 변환 타입만 주어지는 함수 선언과 비슷합니다. 각 매개변수는 이름과 타입이 모두 필요합니다.

interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 한번 정의되면, 함수 타입 인터페이스는 다른 인터페이스처럼 사용할 수 있습니다.
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
