(function () {

var names = ["Elson", "John", "Jonny", "Jeffrey", "Vetri", "Sagar", "Tom", "Jessi", "Anushiya", "Jerry"];
  
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
