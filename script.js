let enemies = []
let string = ""

const defaultEnemie = () => {
  return {
    name: "ForestGiant",
    min: 0.5,
    max: 3
  }
}

const copyString = () => {
  navigator.clipboard.writeText( string )
  alert( "Done !" )
}

const refresh = () => {
  let forms = ""

  console.log( enemies )

  for ( let i = 0; i < enemies.length; i++ ) {
    forms += getFormComponent( enemies[i], i )
  }

  document.getElementById( "enemiesForm" ).innerHTML = forms

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

}

addEnemyForm = () => {

  enemies.push( defaultEnemie() )
  refresh()
}

const getFormComponent = ( item, id ) => {

  return `
    <div class="formContainer">
        <a href="#" onclick="deleteEnemyForm(${ id })" class="btn danger">Delete</a>
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

const deleteEnemyForm = ( id ) => {

  console.log( "delete id ", id )

  const tab = []
  for ( let i = 0; i < enemies.length; i++ ) {
    i !== id && tab.push( enemies[i] )
  }

  enemies = tab

  refresh()

}





