$(document).ready(function(){
  $("#add").submit(function(event) {

    $("div#storedcontacts").append('<div class="contact"></div>');
    var name = $("input#name").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("div.contact:first").text(name);
    $("div.contact:first").text(phone);
    $("div.contact:first").text(email);

    event.preventDefault();
  });
});
