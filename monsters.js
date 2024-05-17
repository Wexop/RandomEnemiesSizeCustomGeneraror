const monsters = [
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

for ( let i = 0; i < monsters.length; i++ ) {
  list += `<li><p>${ monsters[i] }</p></li>`
}

console.log( list )

document.getElementById( "monstersList" ).innerHTML = list
