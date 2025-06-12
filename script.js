let enemies = []
let interiors = []
let moons = []
let string = ""
let stringInterior = ""
let stringMoons = ""

const defaultEnemie = () => {
  return {
    name: "ForestGiant",
    min: 0.5,
    max: 3
  }
}

const defaultInteriorEnemie = () => {
  return {
    name: "Puffer",
    multiplier: 1
  }
}

const defaultInterior = () => {
  return {
    name: "HauntedMansion",
    base: 1,
    enemies: []
  }
}

const defaultMoon = () => {
  return {
    name: "march",
    enemies: [{ name: "any", min: 1, max: 2 }]
  }
}

const copyString = () => {
  navigator.clipboard.writeText( string )
  alert( "Done !" )
}

const copyInteriorString = () => {
  navigator.clipboard.writeText( stringInterior )
  alert( "Done !" )
}

const copyMoonString = () => {
  navigator.clipboard.writeText( stringMoons )
  alert( "Done !" )
}

const refresh = () => {
  let forms = ""
  let interiorForms = ""
  let moonForms = ""

  for ( let i = 0; i < enemies.length; i++ ) {
    forms += getFormComponent( enemies[i], i )
  }

  for ( let i = 0; i < interiors.length; i++ ) {
    interiorForms += getInteriorFormComponent( interiors[i], i )
  }

  for ( let i = 0; i < moons.length; i++ ) {
    moonForms += getMoonFormComponent( moons[i], i )
  }

  document.getElementById( "enemiesForm" ).innerHTML = forms
  document.getElementById( "interiorsForm" ).innerHTML = interiorForms
  document.getElementById( "moonsForm" ).innerHTML = moonForms

  for ( let i = 0; i < enemies.length; i++ ) {
    const inputName = document.getElementById( `name${ i }` )
    const inputMin = document.getElementById( `min${ i }` )
    const inputMax = document.getElementById( `max${ i }` )

    inputName.addEventListener( "change", ( e ) => changeValueName( e.target.value, i ) )
    inputMin.addEventListener( "change", ( e ) => changeValueMin( e.target.value, i ) )
    inputMax.addEventListener( "change", ( e ) => changeValueMax( e.target.value, i ) )

  }

  string = ""

  for ( let i = 0; i < enemies.length; i++ ) {
    const enemy = enemies[i]
    string += `${ enemy.name }:${ enemy.min }:${ enemy.max };`
  }

  document.getElementById( "string" ).innerText = string

  for ( let i = 0; i < interiors.length; i++ ) {
    const inputNameInt = document.getElementById( `intName${ i }` )
    const inputMultiplier = document.getElementById( `intMultplier${ i }` )

    inputNameInt.addEventListener( "change", ( e ) => changeValueInteriorName( e.target.value, i ) )
    inputMultiplier.addEventListener( "change", ( e ) => changeValueInteriorMult( e.target.value, i ) )

    for ( let y = 0; y < interiors[i].enemies.length; y++ ) {
      const inputNameEnemy = document.getElementById( `int${ i }EnemyName${ y }` )
      const inputMultiplierEnemy = document.getElementById( `int${ i }EnemyMult${ y }` )

      inputNameEnemy.addEventListener( "change", ( e ) => changeValueInteriorEnemyName( e.target.value, i, y ) )
      inputMultiplierEnemy.addEventListener( "change", ( e ) => changeValueInteriorEnemyMult( e.target.value, i, y ) )

    }
  }

  stringInterior = ""

  for ( let i = 0; i < interiors.length; i++ ) {
    const interior = interiors[i]
    console.log( interiors )
    let actual = `${ interior.name }#any:${ interior.base }`
    interior.enemies.forEach( e => {
      actual += `,${ e.name }:${ e.multiplier }`
    } )

    actual += ";"
    stringInterior += actual
  }

  console.log( "stringInterior", stringInterior )

  document.getElementById( "stringInterior" ).innerText = stringInterior

  for ( let i = 0; i < moons.length; i++ ) {
    const inputNameMoon = document.getElementById( `moonName${ i }` )

    inputNameMoon.addEventListener( "change", ( e ) => changeValueMoonName( e.target.value, i ) )

    for ( let y = 0; y < moons[i].enemies.length; y++ ) {
      const inputNameEnemy = document.getElementById( `moon${ i }EnemyName${ y }` )
      const inputMinMoonEnemy = document.getElementById( `moon${ i }EnemyMin${ y }` )
      const inputMaxMoonEnemy = document.getElementById( `moon${ i }EnemyMax${ y }` )

      inputNameEnemy.addEventListener( "change", ( e ) => changeValueMoonEnemyName( e.target.value, i, y ) )
      inputMinMoonEnemy.addEventListener( "change", ( e ) => changeValueMoonEnemyMin( e.target.value, i, y ) )
      inputMaxMoonEnemy.addEventListener( "change", ( e ) => changeValueMoonEnemyMax( e.target.value, i, y ) )

    }

  }

  stringMoons = ""

  for ( let i = 0; i < moons.length; i++ ) {
    const moon = moons[i]
    console.log( moons )
    let actual = `${ moon.name }#`
    moon.enemies.forEach( ( e, index ) => {
      actual += `${ index === 0 ? "" : "," }${ e.name }:${ e.min }:${ e.max }`
    } )

    actual += ";"
    stringMoons += actual
  }

  console.log( "stringMoons", stringMoons )

  document.getElementById( "stringMoons" ).innerText = stringMoons

}

addEnemyForm = () => {
  enemies.push( defaultEnemie() )
  refresh()
}

addInteriorForm = () => {
  interiors.push( defaultInterior() )
  refresh()
}

addInteriorEnemy = ( interiorId ) => {
  interiors[interiorId].enemies.push( defaultInteriorEnemie() )
  refresh()
}

const getFormComponent = ( item, id ) => {

  return `
    <div class="formContainer">
        <button onclick="deleteEnemyForm(${ id })" class="btn danger">Delete</button>
        <div>
          <p>Enemy ${ id + 1 }</p>
          <div>
            <label>Name</label>
            <input id="name${ id }" type="text" value="${ item.name }"/>  
          </div>
          <div>
            <label>Minimum size</label>
            <input id="min${ id }" type="text" value="${ item.min }"/>
          </div> 
          <div>
            <label>Maximum Size</label>
            <input id="max${ id }" type="text" value="${ item.max }"/>
          </div>
        </div>
        
    </div>
  `
}

const getInteriorFormComponent = ( item, id ) => {

  let enemiesString = ""
  if ( item.enemies.length > 0 ) {
    let i = 0
    item.enemies.forEach( e => {

      enemiesString += `
      <div>
        <p>Enemy${ i + 1 }</p>
        <label>Name</label>
        <input id="int${ id }EnemyName${ i }" type="text" value="${ e.name }"/>
        
        <label>Multiplier</label>
        <input id="int${ id }EnemyMult${ i }" type="text" value="${ e.multiplier }"/>
      </div> 
`
      i++
    } )
  }

  return `
    <div class="formContainer">
        <button onclick="deleteInteriorForm(${ id })" class="btn danger">Delete</button>
        <div>
          <p>Interior ${ id + 1 }</p>
          <div>
            <label>Name</label>
            <input id="intName${ id }" type="text" value="${ item.name }"/>  
          </div>
          <div>
            <label>Base mutlplier</label>
            <input id="intMultplier${ id }" type="text" value="${ item.base }"/>
          </div> 
         ${ enemiesString }
        </div>

          <button onclick="addInteriorEnemy(${ id })" class="btn purple">
              Add enemy
          </button>
        
    </div>
  `
}

const getMoonFormComponent = ( item, id ) => {

  let enemiesString = ""
  if ( item.enemies.length > 0 ) {
    let i = 0
    item.enemies.forEach( e => {

      enemiesString += `
      <div>
        <p>Enemy${ i + 1 }</p>
        <label>Name</label>
        <input id="moon${ id }EnemyName${ i }" type="text" value="${ e.name }"/>
        
        <label>Min</label>
        <input id="moon${ id }EnemyMin${ i }" type="text" value="${ e.min }"/>
        
        <label>Max</label>
        <input id="moon${ id }EnemyMax${ i }" type="text" value="${ e.max }"/>
      </div> 
`
      i++
    } )
  }

  return `
    <div class="formContainer">
        <button onclick="deleteMoonForm(${ id })" class="btn danger">Delete</button>
        <div>
          <p>Moon ${ id + 1 }</p>
          <div>
            <label>Name</label>
            <input id="moonName${ id }" type="text" value="${ item.name }"/>  
          </div>
         ${ enemiesString }
        </div>

          <button onclick="addMoonEnemy(${ id })" class="btn purple">
              Add enemy
          </button>
        
    </div>
  `
}

addEnemyForm()

const changeValueName = ( value, id ) => {
  enemies[id].name = value
  refresh()
}
const changeValueMin = ( value, id ) => {
  enemies[id].min = value
  refresh()
}
const changeValueMax = ( value, id ) => {
  enemies[id].max = value
  refresh()
}

const changeValueInteriorName = ( value, id ) => {
  interiors[id].name = value
  refresh()
}
const changeValueInteriorMult = ( value, id ) => {
  interiors[id].base = value
  refresh()
}

const changeValueInteriorEnemyName = ( value, id, enemyId ) => {
  interiors[id].enemies[enemyId].name = value
  refresh()
}

const changeValueInteriorEnemyMult = ( value, id, enemyId ) => {
  interiors[id].enemies[enemyId].multiplier = value
  refresh()
}

const deleteEnemyForm = ( id ) => {

  console.log( "delete id ", id )

  const tab = []
  for ( let i = 0; i < enemies.length; i++ ) {
    i !== id && tab.push( enemies[i] )
  }

  enemies = tab

  refresh()

}

const deleteInteriorForm = ( id ) => {

  console.log( "delete id interior ", id )

  const tab = []
  for ( let i = 0; i < interiors.length; i++ ) {
    i !== id && tab.push( interiors[i] )
  }

  interiors = tab

  refresh()

}

changeValueMoonName = ( value, id ) => {
  moons[id].name = value
  refresh()
}
changeValueMoonEnemyName = ( value, id, enemyId ) => {
  moons[id].enemies[enemyId].name = value
  refresh()
}
changeValueMoonEnemyMin = ( value, id, enemyId ) => {
  moons[id].enemies[enemyId].min = value
  refresh()
}
changeValueMoonEnemyMax = ( value, id, enemyId ) => {
  moons[id].enemies[enemyId].max = value
  refresh()
}
deleteMoonForm = ( id ) => {

  console.log( "delete id moon ", id )

  const tab = []
  for ( let i = 0; i < moons.length; i++ ) {
    i !== id && tab.push( moons[i] )
  }

  moons = tab

  refresh()

}

addMoonEnemy = ( moonId ) => {
  moons[moonId].enemies.push( defaultEnemie() )
  refresh()
}

addMoonForm = () => {
  moons.push( defaultMoon() )
  refresh()
}



