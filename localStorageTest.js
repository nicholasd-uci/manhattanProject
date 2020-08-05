
// localStorage Stuff
let userPantry = JSON.parse(localStorage.getItem('userPantry')) || []

function writePantry() {
    let userPantry = JSON.parse(localStorage.getItem('userPantry')) || []
    document.getElementById('listPantry').innerHTML = ''
    for (let i = 0; i < userPantry.length; i++) {
        let listItem = document.createElement('li')
        listItem.innerHTML = userPantry[i]
        document.getElementById('listPantry').append(listItem)
    }
}

function listPantryItems() {
    console.log(userPantry)
    if (userPantry.length > 0) {
        writePantry()
    } else {
        console.log('pantry is empty!')
    }
}

// Track user items in pantry. Same pantry items cannot exist.
// Pass through axios request to only log valid grocery items.
document.getElementById('submitPantry').addEventListener('click', function () {
    event.preventDefault()
    let addPantry = document.getElementById('userPantry').value
    console.log(addPantry)
    let userPantry = JSON.parse(localStorage.getItem('userPantry')) || []
    if ((userPantry.includes(addPantry) !== true) || (userPantry.length === 0)) {
        userPantry.push(addPantry)
        localStorage.setItem('userPantry', JSON.stringify(userPantry))
        writePantry()
    } else {
        console.log(`${addPantry} is already in your pantry`)
    }
    document.getElementById('userPantry').value = ''
})

listPantryItems()
