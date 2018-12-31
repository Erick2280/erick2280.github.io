
function fillSalute() {
    let greetings = ['cristal', 'safira', 'esmeralda', 'turmalina', 'ametista'];    
    let selectedGreet = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById("salute").innerHTML = selectedGreet;
}

window.onload = fillSalute();