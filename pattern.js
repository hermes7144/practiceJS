// 모듈 패턴: 비공개 변수를 만드는 디자인 패턴
var newScope = (function () {
  var x = 'local';
  return {
    y: function() {
      console.log(x);
    }
  };
})();

newScope.y();

// 싱글턴 패턴: 싱글턴은 필요에 의해 단 하나의 객체만을 만들 때 사용합니다.
var obj = {
  a: 'hello',
  b: function() {
    alert(this.a);
  }
};
obj.b();

// 비공개로 만드는 게 제대로된 싱글턴
var singleton = (function() {
  var instance;
  var a = 'hello';
  function initiate() {
    return {
      a: a,
      b: function() {
        alert(a);
      }
    };
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = initiate();
      }
      return instance;
    }
  }
})();
var first = singleton.getInstance();
var second = singleton.getInstance();
console.log(first === second); // true;
// 아무리 호출해도 기존에 있던 객체는 복사되는 것이 아닌 그대로 반환됩니다. 

// 생성자 패턴: 상속이 필요할 때 주로 사용

var Vehicle = (function() {
  function Vehicle(name, speed) {
    this.name = name; this.speed = speed;
  }
  Vehicle.prototype.drive = function () {
    console.log(this.name + ' runs at ' + this.speed);
  };
  return Vehicle;
})();