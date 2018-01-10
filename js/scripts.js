$(document).ready(function(){
  $("#add").submit(function(event) {

    $("div#storedcontacts").append('<div class="contact"></div>');
    var name = $("input#name").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();

    $("div#storedcontacts:first-child").text(name);
    $("div#storedcontacts:first-child").text(phone);
    $("div#storedcontacts:first-child").text(email);

    event.preventDefault();
  });
});
