// TypeScript의 핵심 원칙 중 하나는 타입 검사가 값의 형태에 초점을 맞추고 있다는 것입니다.
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
