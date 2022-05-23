function waitAsync(callback, ms) {
    setTimeout(callback, ms); // 특정 시간 이후에 콜백함수를 실행시켜 주는 브라우저 내장기능이다. 
  }
  
  function drink(person, coffee) {
    console.log(person + '는 ' + coffee + '를 마십니다');
  }
  
  let customers = [{
    name: 'Steve',
    request: '카페라떼'
  }, {
    name: 'John',
    request: '아메리카노'
  }];

  function orderCoffeeAsync(menu, callback) {
    console.log(menu + '가 접수되었습니다.');
    waitAsync(function() {
      callback(menu);
      }, 4000);
  }

  customers.forEach(function(customer) {
    orderCoffeeAsync(customer.request, function(coffee) {
      drink(customer.name, coffee);
    });
  });