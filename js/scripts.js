$(document).ready(function(){
  $("#add").submit(function(event) {

    var name = $("input#name").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("ul").append('<li>Name: ' + name +'<br><div class="hidden">Phone:'+ phone +'<br>Email: '+ email +'</div></li>');

    event.preventDefault();
    $("li").unbind().click(function() {
      $(this).children("div").toggle();
    });

  });


});


// <li>Name: asdf <br>
// <span....>Phone: 231232 <br>
// E-mail: asdf;l2@</span></li>
