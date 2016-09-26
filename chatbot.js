function question () {

  var userInput = $("#input").val();
  $("#chat-area").prepend(userInput + "<br>");



if ($("#input").val() == "What is your name?") {

  $("#chat-area").prepend("Mason" + "<br>");

    }
}
