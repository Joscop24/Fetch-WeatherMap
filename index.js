// Variables
let kapi = "7a9941f415f07258b0a640d78250b2f9";
let card = document.createElement("div");
let input = document.createElement("input");
let h5 = document.createElement("h5");
let h6 = document.createElement("h6");
let btn = document.createElement("button");
let img = document.createElement("img");

// Attributs
card.setAttribute("class", "card align-items-center");
input.setAttribute("id", "output");
input.setAttribute("class", "mt-3");
h5.setAttribute("class", "text-center");
h6.setAttribute("class", "text-center");
btn.setAttribute("onclick", "search()");
img.setAttribute("height", "90");
img.setAttribute("width", "90");
img.setAttribute("class", "justify-content-center");

// Lancer l'event de recherche de valeur avec la touche Enter
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    search();
  }
});

// Texte Button
btn.innerHTML = "Search";

// Fonction de Recherche avec Fetch
function search() {
  var research = !input.value ? "Marseille" : input.value;
  console.log(research);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${research}&units=metric&lang=fr&appid=${kapi}`
  )
    //  .then (res => res.json())
    //  .then (data => console.log(data.main.temp + data.name + data.weather[0].description))
    .then(function (res) {
      res.json().then(function (data) {
        console.log(data);
        writeData(data);
      });
    });
}


// Ecrire les datas de la temperature, de la ville et de la méteo
function writeData(data) {
  h5.innerHTML = data.name + " , " + data.main.temp + "°C";
  h6.innerHTML = data.weather[0].description;
  img.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  card.appendChild(img);
}

// Append Child
let body = document.body;

body.appendChild(input);
body.appendChild(btn);
card.appendChild(h5);
card.appendChild(h6);
body.appendChild(card);
