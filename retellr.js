$(document).ready(function() {
  $('#button').click(function() {
    var retoldUser = $('#user').val();
    var chatToChange = $("#chatbox").val();
    $('.result').append('<div id="changedchat">' + retoldChat(chatToChange, retoldUser) + '</div>');
  });
});

var bullshit = [
  "-- are you kidding me?",
  "-- whaaaaat?",
  "-- that's crazy!",
  "-- really??? Like...seriously???",
  "-- totes"
]

var me = [
  "I was all like",
  "Then I said",
  "What happened then... I said something like"
]

// gets a random element from my bullshit array
var randomBullshit = function(array){
  if ( Math.random() > 0.6) {
    return array[Math.floor(Math.random() * array.length)];
  }
};

var randomMe = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// loops through the inputted chat
var retoldChat = function(chat, user) {
  // splits the chat into an array of lines
  arrayOfLines = chat.match(/[^\r\n]+/g);
  for (var i = 1; i < arrayOfLines.length; i++) {
    var line = arrayOfLines[i]
    var split = line.split(/:/)
    var name = line[0]
    var msg = line[1]
    if (name === user) {
      return randomMe(me) + msg + randomBullshit(bullshit);
    } else {
      return name + 'was all like' + msg + randomBullshit(bullshit);
    }
  }
}


