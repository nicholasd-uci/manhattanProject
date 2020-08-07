// Search button is clicked. Run through API
// document.getElementById('search').addEventListener('click', event => {
//     event.preventDefault()

//     let name = document.getElementById('name').value

    axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=329471d76fc144f79e282c665c95ea08&query=${name}`)
        .then(res => {
            console.log('usda food data for nutrition')
            console.log(res.data)
            nutritionInfo(res.data)

    })
    .catch(err => { console.log(err) })
  })


  document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

//     let name = document.getElementById('name').value

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=329471d76fc144f79e282c665c95ea08&query=${name}`)
        .then(res => {
            console.log('spoonacular for image')
            console.log(res.data)

            document.getElementById('nutrition').innerHTML = `
                <img src = ${res.data.results[0].image} >
        
            `

    })
    .catch(err => { console.log(err) })
  })


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


  `<article class="card">
  <img class="picture" src="./2020-08-04 (2).png" width="75%" height="auto">
  <footer>
      <h3>Food List 3</h3>
      <button id="addBtn" class="button warning">Add To- Shopping List</button>
  </footer>
</article>
`


// Maxwell code
document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('name').value

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=329471d76fc144f79e282c665c95ea08&query=${name}`)
        .then(res => {
        console.log(res.data)


        for (let i=0; i<10; i++) {
            let foodCard = document.createElement('article')
            foodCard.classList.add('card')
            foodCard.innerHTML =
                `
                    <img class="picture" src="${res.data.results[i].image}">
                        <footer>
                            <h3>${res.data.results[i].title}</h3>
                            <button id="addBtn" class="button warning">Add To- Shopping List</button>
                        </footer>
                `
            document.getElementById('nutrition').append(foodCard)
            let myFood = JSON.parse(localStorage.getItem('myFood')) || []
            // let imageEle = document.createElement('img')
            // imageEle.setAttribute('src', `${res.data.results[i].image}`)
            // imageEle.classList.add('image')
            // document.getElementById('nutrition').append(imageEle)
            axios.get(`https://api.spoonacular.com/recipes/${res.data.results[i].id}/information?apiKey=329471d76fc144f79e282c665c95ea08&includeNutrition=true`)
                .then(res =>{
                console.log(res.data)
            })
        }
    })
    .catch(err => { console.log(err) })
})


// click button 
document.addEventListener('click', event => {
    if (event.target.id === 'addBtn') {
        console.log(event.target.parentNode.childNodes[1].textContent)

    }
})