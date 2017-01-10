
function getData() {
    $.get('/users', (data) => {
      const userData = data.reduce(function(accumulator, currentValue) {
        return accumulator + `<p>${currentValue.email}</p><p>${currentValue.name}</p>`;
      }, '') //second argument is the initial value
      $('body').append(userData);
    })
};

function ourReduce(data, cb, initial) {
  var answer = initial;
  for(var i = 0; i < data.length; i ++) {
    answer = cb(answer, data[i]);
  }

  return answer;
}

ourReduce([1,2,3], (answer, v) => answer + v, 0);
