// When search button is clicked
document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('foodSearch').value

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=645ce00f265642199dffbfb5a8d155ff&query=${name}`)
        .then(res => {
        console.log(res.data)
        
        // Loop 5 times to show images on cards
        for (let i = 1; i <= 5; i++) {
            let foodCard = document.getElementById(`foodItem${i}`)
            foodCard.innerHTML =
                `
                    <img class="picture" src="${res.data.results[i].image}">
                        <footer>
                            <h3>${res.data.results[i].title}</h3>
                            <button id="addBtn" class="button warning">Add To- Shopping List</button>
                        </footer>
                `
            // Get details for searched foods 1 - 5
            axios.get(`https://api.spoonacular.com/recipes/${res.data.results[i].id}/information?apiKey=645ce00f265642199dffbfb5a8d155ff&includeNutrition=true`)
                .then(res =>{
                console.log(res.data)
            })
                .catch(foodDetailError => {
                    console.log('food details error')
                    console.log(foodDetailError)
                })
        }
    })
    // console log error in first search
    .catch(err => { console.log(err) })
})