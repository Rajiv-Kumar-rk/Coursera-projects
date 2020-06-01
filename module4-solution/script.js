(function () {
    
    var name_of_persons = ["John", "Aarti", "Jokker", "Murli", "Sarita", "Jennifer", "Pankaj", "juned", "Preeti"];

    for (var i in name_of_persons) {    
        var first_letter = name_of_persons[i].charAt(0);
        if (first_letter == 'J' || first_letter == 'j') {
            GreetByeSpeaker.speak(name_of_persons[i])
        } else {
            GreetHelloSpeaker.speak(name_of_persons[i])
        }
    }
    
})();