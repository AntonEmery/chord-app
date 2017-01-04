var content = ' ';

function getData() {
  $.get('/users', function(data) {
    console.log(data);
  data.forEach(function(value, index) {
    content += '<p>' + data[index].email + '</p>';
    content += '<p>' + data[index].name + '</p>';
  })
  })
};


$('body').append(content);
