var Strategy = (function() {
  function Strategy() {
    this.strategy = null;
  }
  Strategy.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
  };
  Strategy.prototype.execute = function() {
    this.strategy.execute();
  };
  return Strategy;
})();
var ShipStrategy = (function() {
  function ShipStrategy() {}
  ShipStrategy.prototype.execute = function() {
    console.log('배로 이탈리아에 갑니다');
  };
  return ShipStrategy;
})();
var LandStrategy = (function() {
  function LandStrategy() {}
  LandStrategy.prototype.execute = function() {
    console.log('육로로 이탈리아에 갑니다');
  };
  return LandStrategy;
})();
var strat = new Strategy();
var ship = new ShipStrategy();
var land = new LandStrategy();
strat.setStrategy(ship);
strat.setStrategy(land); // 전략을 바꿈
strat.execute(); // 어떤 전략이든 설정된 것을 실행
// 육로로 이탈리아에 갑니다.