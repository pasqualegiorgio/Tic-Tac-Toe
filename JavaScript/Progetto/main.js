prova.onclick = function() {
  let apiKey = 'efa6f02761d89bccc4da7072252c5102';
  let city = document.getElementById('weath').value;
  let uri = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid' + apiKey;
  var request = new XMLHttpRequest();
  request.open('GET', uri, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(this.response);
      var temp = data.main.temp;
      temp =  parseInt(temp) - 273;
      ris = document.getElementById('ris').innerHTML = "A" + city + " ci sono " + temp + " gradi.";
    }
    else {
      ris = document.getElementById('ris').innerHTML = "Errore generico.";
    }
  }
  request.send();
}
