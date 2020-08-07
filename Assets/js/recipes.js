function showImage(catagory) {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=329471d76fc144f79e282c665c95ea08&query=${catagory}&maxSugar=100&number=5`)
        .then(res => {
            console.log(res.data)

            for (let i = 0; i < 5; i++) {
                let foodCard = document.getElementById(`foodItem${i + 1}`)
                // foodCard.innerHTML = `
                //     <img class="picture" src="${res.data.results[i].image}">
                //     <footer>
                //         <h3 data-food-id="${res.data.results[i].id}">${res.data.results[i].title}</h3>
                //         <button id="addBtn" class="button warning">More Info</button>
                //     </footer>                     
                // `
                if (res.data.results[i].image !== undefined) {
                    foodCard.innerHTML = `
                    <img class="picture" src="${res.data.results[i].image}">
                    <footer>
                        <h3 data-food-id="${res.data.results[i].id}">${res.data.results[i].title}</h3>
                        <button id="addBtn" class="button warning">More Info</button>
                    </footer>                     
                `
                } else {
                    foodCard.innerHTML = `
                    <img class="picture" src="../img/2020-08-04 (2).png">
                    <footer>
                        <h3 data-food-id="${res.data.results[i].id}">${res.data.results[i].title}</h3>
                        <button id="addBtn" class="button warning">More Info</button>
                    </footer>                     
                `
                }
            }
        })
        .catch(err => { console.log(err) })
}

document.getElementById('lowSugar').addEventListener('click', event => {
    event.preventDefault()
    let catagory = document.getElementById('lowSugar').textContent
    showImage(catagory)
})

document.getElementById('highProtein').addEventListener('click', event => {
    event.preventDefault()
    let catagory = document.getElementById('highProtein').textContent
    showImage(catagory)
})

document.getElementById('lowCalories').addEventListener('click', event => {
    event.preventDefault()
    let catagory = document.getElementById('lowCalories').textContent
    showImage(catagory)
})

document.getElementById('lowSodium').addEventListener('click', event => {
    event.preventDefault()
    let catagory = document.getElementById('lowSodium').textContent
    showImage(catagory)
})

document.getElementById('lowCarb').addEventListener('click', event => {
    event.preventDefault()
    let catagory = document.getElementById('lowCarb').textContent
    showImage(catagory)
})

document.addEventListener('click', event => {
    if (event.target.id === 'addBtn') {
        console.log(event.target.parentNode.childNodes[1].textContent)

        let foodItemId = event.target.parentNode.childNodes[1].getAttribute('data-food-id')
        console.log(foodItemId)
        axios.get(`https://api.spoonacular.com/recipes/${foodItemId}/information?apiKey=329471d76fc144f79e282c665c95ea08&includeNutrition=true`)
            .then(res => {
                console.log(res.data)
                if (document.getElementById('nutritionTable').classList.contains('tableDisplay') === true) {
                    document.getElementById('nutritionTable').classList.remove('tableDisplay')
                    console.log('class removed')
                }
                let nutritionList = res.data.nutrition.nutrients
                console.log(nutritionList)
                document.getElementById('nutritionTableData').innerHTML = ''
                document.getElementById('foodTitle').innerHTML = res.data.title
                for (let i = 0; i <= 9; i++) {
                    let nutritionTableRow = document.createElement('tr')
                    nutritionTableRow.innerHTML = `
                        <td>${nutritionList[i].title}</td>
                        <td>${nutritionList[i].amount} ${nutritionList[i].unit}</td>
                    `
                    document.getElementById('nutritionTableData').append(nutritionTableRow)
                }

            })
            .catch(err => {
                console.log(err)
            })
    }
})