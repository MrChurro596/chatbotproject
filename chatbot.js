$("#input").keydown(function(question) {

  if(question.keyCode == 13) {
    $("#talkButton").click();

  }
});

function question () {

  var userInput = $("#input").val();

  var goodInput = userInput.toLowerCase();

  $("#chat-area").prepend(userInput + "<br>");

if (goodInput == "what is your name?") {


}
    else if (goodInput == "how old are you?") {

      $("#chat-area").prepend("I am 83  years old." + "<br>");

    }
    else if (goodInput == "what time is it?") {

        var time = new Date(Date.now());
        var goodTime =
        $("#chat-area").prepend("It is currently " + time + "<br>");

    }
    else if (goodInput == "what do the numbers mean mason!") {

      $("#chat-area").prepend("I already told you I don't know what the numbers mean. I don't know what you expect me to remember." + "<br>")

    }
    else {

      var value = Math.floor((Math.random() * 100) + 1);
      console.log(value);

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
