
function getData() {
    var content = ' ';
    $.get('/users', function(data) {
      data.forEach(function(value, index) {
        content += '<p>' + data[index].email + '</p>';
        content += '<p>' + data[index].name + '</p>';
      })
      $('body').append(content);
    })
};
