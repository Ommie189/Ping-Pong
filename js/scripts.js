//business logic
var Number = function(change) {
  var result = [];
  for (var i = 1; i <= change; i++) {
    if (i % 15 === 0) {
      result.push('pingpong');
    } else if (i % 5 === 0) {
      result.push('pong');
    } else if (i % 3 === '0') {
      result.push('pong')
    } else {
      result.push(i);
    };
  };
  return result;
};
// USER INTERFACE
