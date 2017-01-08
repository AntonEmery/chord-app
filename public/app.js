
function getData() {
    $.get('/users', (data) => {
      const userData = data.reduce(function(accumulator, currentValue) {
        return accumulator += `<p>${currentValue.email}</p><p>${currentValue.name}</p>`;
      }, '') //second argument is the initial value
      $('body').append(userData);
    })
};
