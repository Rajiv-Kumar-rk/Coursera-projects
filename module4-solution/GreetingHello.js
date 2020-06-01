( function (window) {
    
    var greetWord = "Hello";
    
    var GreetHelloSpeaker = {
        speak: function (name) {
            console.log(greetWord + " " + name);
        }
    };
    
    window.GreetHelloSpeaker = GreetHelloSpeaker;
    
})(window);