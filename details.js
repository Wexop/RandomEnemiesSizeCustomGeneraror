const details = [
  "ForestGiant",
  "Baboon hawk",
  "Blob",
  "Butler",
  "Butler Bees",
  "Centipede",
  "Crawler",
  "Docile Locust Bees",
  "Manticoil",
  "Girl",
  "Flowerman",
  "Tulip Snake",
  "Hoarding bug",
  "Jester",
  "Masked",
  "MouthDog",
  "Nutcracker",
  "Puffer",
  "RadMech",
  "Red Locust Bees",
  "Bunker Spider",
  "Earth Leviathan",
  "Spring",
  "Clay Surgeon",
  "Bush Wolf",
  "Maneater",
  "GiantKiwi"
]

let list = ""

for ( let i = 0; i < details.length; i++ ) {
  list += `<li><p>${ details[i] }</p></li>`
}

document.getElementById( "monstersList" ).innerHTML = list

const interiorsList = [
  "Facility",
  "HauntedMansion",
]

list = ""

for ( let i = 0; i < interiorsList.length; i++ ) {
  list += `<li><p>${ interiorsList[i] }</p></li>`
}

document.getElementById( "interiorsList" ).innerHTML = list

const moonList = ["experimentation", "assurance", "offense", "vow", "march", "adamance", "rend", "dine", "titan", "artifice", "embrion"]

list = ""

for ( let i = 0; i < moonList.length; i++ ) {
  list += `<li><p>${ moonList[i] }</p></li>`
}

document.getElementById( "moonsList" ).innerHTML = list

