var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(function(names){
  for (var name in names ) {
    var firstLetter = names[name].charAt(0).toLowerCase();
    if (firstLetter == 'j') {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }
})(names);


