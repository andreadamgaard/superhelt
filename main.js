//fetche
fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showSuperheroes);

function showSuperheroes(superheroes) {
  //loope
  superheroes.forEach(showSuperhero);
}
/*
    "powers": ["Design", "Gaming"],
    "realName": "Ceva",
    "alias": "Godcille",
    "origin": "Nødebo",
    "weaknesses": ["Code", "Alcohol"],
    "active": true,
    "isEvil": true,
    "height": 168,
    "birtday": { "day": 22, "month": 6, "year": 1994 },
    "image": "https://www.pexels.com/da-dk/foto/kvinde-leg-teknologi-spil-6499009/" */

function showSuperhero(superhero) {
  console.log(superhero);
  //clone, ændre, appende
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = superhero.alias;
  copy.querySelector("h3").textContent = superhero.realName;
  copy.querySelector("p.powers").textContent = superhero.powers;
  copy.querySelector("img").src = superhero.image;
  copy.querySelector("p.origin").textContent = superhero.origin;
  copy.querySelector("p.weaknesses").textContent = superhero.weaknesses;
  copy.querySelector("p.active").textContent = superhero.active;
  copy.querySelector("p.isEvil").textContent = superhero.isEvil;
  copy.querySelector("p.height").textContent = superhero.alias;
  copy.querySelector(".day").textContent = superhero.birthday.day;
  copy.querySelector(".month").textContent = superhero.birthday.month;
  copy.querySelector(".year").textContent = superhero.birthday.year ;

  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
