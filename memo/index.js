// 주제 : 화살표함수와 펑션의차이

// 펑션은 순서어디다써도됨. 이걸 호이스팅이 일어난다고 함
// 콘스트는 미리 선언해야 쓸수잇음

function add(a, b) {
  return a + b;
}

const minus = (a, b) => {
  return a - b;
};

console.log(add(1, 2));
console.log(minus(1, 2));

// 2. this바인드
const obj = {
  a: 1,
  b: function () {
    // 여기의 this는 호출한 객체
    return this.a;
  },
  c: () => {
    // 여기의 this는 상위 스코프 this
    return this.a;
  },
};

console.log(obj.b()); // 1 , obj안에를 부름
console.log(obj.c()); // unde , 글로벌을 부름

// 결론 펑션은 확실하지않으면 잘안씀
