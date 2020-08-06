// When search button is clicked
document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('foodSearch').value

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=645ce00f265642199dffbfb5a8d155ff&query=${name}&number=5`)
        .then(res => {
            console.log(res.data)

            // Loop 5 times to show images on cards
            for (let i = 0; i <= 4; i++) {
                let foodCard = document.getElementById(`foodItem${i + 1}`)
                foodCard.innerHTML =
                    `
                    <img class="picture" src="${res.data.results[i].image}">
                        <footer>
                            <h3 data-food-id="${res.data.results[i].id}">${res.data.results[i].title}</h3>
                            <button id="addBtn" class="button warning">More Info</button>
                        </footer>
                `

            }
        })
        // console log error in first search
        .catch(err => { console.log(err) })
})

// click button 
document.addEventListener('click', event => {
    if (event.target.id === 'addBtn') {
        console.log(event.target.parentNode.childNodes[1].textContent)

        let foodItemId = event.target.parentNode.childNodes[1].getAttribute('data-food-id')
        console.log(foodItemId)
        axios.get(`https://api.spoonacular.com/recipes/${foodItemId}/information?apiKey=645ce00f265642199dffbfb5a8d155ff&includeNutrition=true`)
            .then(res => {
                console.log(res.data)
                let nutritionList = res.data.nutrition.nutrients
                console.log(nutritionList)
                for (let i = 0; i < nutritionList.length; i++) {
                    let nutritionElem = document.createElement('li')
                    nutritionElem.innerHTML = `${nutritionList[i].title}: ${nutritionList[i].amount}: ${nutritionList[i].unit}`
                    document.getElementById('nutritionList').append(nutritionElem)
                }

            })
            
            .catch(foodDetailError => {
                console.log('food details error')
                console.log(foodDetailError)
            })
    }
})