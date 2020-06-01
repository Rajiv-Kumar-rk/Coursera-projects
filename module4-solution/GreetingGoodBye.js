(function (window) {
    
    var greetWord = "Good Bye";

    var GreetByeSpeaker = {
        speak: function (name) {
            console.log(greetWord + " " + name);
        }
    };
 
    window.GreetByeSpeaker = GreetByeSpeaker;
    
})(window);