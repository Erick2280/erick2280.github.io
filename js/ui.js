
function fillSalute() {
    let greetings = ['cristal', 'safira', 'esmeralda', 'turmalina', 'ametista'];    
    let selectedGreet = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("salute").innerHTML = selectedGreet;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    fillSalute();
});