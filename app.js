// Search button is clicked. Run through API
// document.getElementById('search').addEventListener('click', event => {
//     event.preventDefault()

//     let name = document.getElementById('name').value

//     axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ckuDCJZTvGODnGVYDC4FTRlLhXJhmjEtg3slZV4Z&query=${name}`)
//         .then(res => {
//             console.log('usda food data for nutrition')
//             console.log(res.data)
//             nutritionInfo(res.data)

//     })
//     .catch(err => { console.log(err) })
//   })


//   document.getElementById('search').addEventListener('click', event => {
//     event.preventDefault()

//     let name = document.getElementById('name').value

//     axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=85a06dbd80b548e1822e70e6227765b4&query=${name}`)
//         .then(res => {
//             console.log('spoonacular for image')
//             console.log(res.data)

//             document.getElementById('nutrition').innerHTML = `
//                 <img src = ${res.data.results[0].image} >
        
//             `

//     })
//     .catch(err => { console.log(err) })
//   })


// Write food nutrient data to page

function nutritionInfo(searchedThingy) {
    console.log(searchedThingy.foods[0].foodNutrients)
    let nutritionList = searchedThingy.foods[0].foodNutrients
    document.getElementById('nutritionList').innerHTML = ''
    for (let i = 0; i < nutritionList.length; i++) {
        let nutritionElem = document.createElement('li')
        nutritionElem.innerHTML = `${nutritionList[i].nutrientName}: ${nutritionList[i].value}: ${nutritionList[i].unitName}`
        document.getElementById('nutritionList').append(nutritionElem)
    }
}


// Testing indepth food search
document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('name').value

    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=85a06dbd80b548e1822e70e6227765b4&query=${name}`)
        .then(res => {
            console.log('spoonacular by nutrients')
            console.log(res.data)

            document.getElementById('nutrition').innerHTML = `
                <img src = ${res.data.results[0].image} >
        
            `

    })
    .catch(err => { console.log(err) })
  })