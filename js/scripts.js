//business logic
var number = function(change) {
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
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    $("#result").empty();
    var change =parseInt($("input#change").val());
    var output =number(change);

    output.forEach(function(number){
      $("#result").append('<li>'+ number + '</li>');
    });
    event.preventDefault();
  });
});
