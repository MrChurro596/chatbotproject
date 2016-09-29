function question () {

  var userInput = $("#input").val();
  $("#chat-area").prepend(userInput + "<br>");

if ($("#input").val() == "What is your name?") {

  $("#chat-area").prepend("Mason." + "<br>");

    }
    else if ($("#input").val() == "How old are you?") {

      $("#chat-area").prepend("I am 83  years old." + "<br>");

    }
    else if ($("#input").val() == "What time is it?") {

        var time = new Date(Date.now());
        $("#chat-area").prepend("It is currently" + time + "<br>");

    }
    else {

      var value = Math.floor((Math.random() * 100) + 1);

      if (value <= 33) {
        $("#chat-area").prepend("I don't know what you want from me." + "<br>");
      }
      else if (value <= 66) {

        $("#chat-area").prepend("I don't know what you want. All I know is that I keep hearing the numbers in my head." + "<br>")

      }
      else if (value <= 99) {

        $("#chat-area").prepend("I don't know who you work for but you aren't going to get anything from me." + "<br>")

      }
      else if (value = 100) {

        $("#chat-area").prepend("I am Victor Reznov, and I will have my revenge." + "<br>")

      }

    }
}
