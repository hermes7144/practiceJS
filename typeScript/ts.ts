// 함수
function hello(name?: string) {
  return `Hello, ${name || 'world'}`;
}

const result = hello('fd');
const result2 = hello('ffd');
