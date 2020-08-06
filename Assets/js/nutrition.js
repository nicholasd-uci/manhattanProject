// When search button is clicked
document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('foodSearch').value

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=543a2b7adaa0420aa481ac6e6fd18c3b&query=${name}&number=5`)
        .then(res => {
            console.log(res.data)

            // Loop 5 times to show images on cards
            for (let i = 0; i <= 4; i++) {
                let foodCard = document.getElementById(`foodItem${i + 1}`)
                if (res.data.results[i].image !== undefined) {
                    foodCard.innerHTML =
                    `
                    <img class="picture" src="${res.data.results[i].image}">
                        <footer>
                            <h3 data-food-id="${res.data.results[i].id}">${res.data.results[i].title}</h3>
                            <button id="addBtn" class="button warning">More Info</button>
                        </footer>
                `
                }
                else {
                    foodCard.innerHTML =
                    `
                    <img class="picture" src="../img/2020-08-04 (2).png">
                        <footer>
                            <h3 data-food-id="${res.data.results[i].id}">${res.data.results[i].title}</h3>
                            <button id="addBtn" class="button warning">More Info</button>
                        </footer>
                `
                }
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
        axios.get(`https://api.spoonacular.com/recipes/${foodItemId}/information?apiKey=543a2b7adaa0420aa481ac6e6fd18c3b&includeNutrition=true`)
            .then(res => {
                console.log(res.data)
                let nutritionList = res.data.nutrition.nutrients
                console.log(nutritionList)
                if (document.getElementById('nutritionTable').classList.contains('tableDisplay') === true) {
                    document.getElementById('nutritionTable').classList.remove('tableDisplay')
                    console.log('class removed')
                }
                document.getElementById('nutritionTableData').innerHTML = ''
                for (let i = 0; i <= 9; i++) {
                    let nutritionTableRow = document.createElement('tr')
                    nutritionTableRow.innerHTML = `
                        <td>${nutritionList[i].title}</td>
                        <td>${nutritionList[i].amount} ${nutritionList[i].unit}</td>
                    `
                    document.getElementById('nutritionTableData').append(nutritionTableRow)
                }
                
            })
            .catch(foodDetailError => {
                console.log(foodDetailError)
            })
    }
})


// Function for random food recipe
function randomRecipe() {

    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=543a2b7adaa0420aa481ac6e6fd18c3b&number=5`)
        .then(res => {
            let randomRecipe = res.data.recipes
            console.log(randomRecipe)

            for (let i = 0; i <= 4; i++) {
                let foodCard = document.getElementById(`foodItem${i + 1}`)
                foodCard.innerHTML =
                    `
                    <img class="picture" src="${randomRecipe[i].image}">
                        <footer>
                            <h3 data-food-id="${randomRecipe[i].id}">${randomRecipe[i].title}</h3>
                            <button id="addBtn" class="button warning">More Info</button>
                        </footer>
                `
            }
        })

        // console log error in first search
        .catch(randomError => {
            console.log(randomError)
        })
}
// Run random recipe at start of page
randomRecipe()