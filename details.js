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

