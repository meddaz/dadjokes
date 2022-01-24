var url = 'https://icanhazdadjoke.com/';


$.getJSON(url, function(data) {
    console.log(data);
    display.innerHTML = data.joke;
})