// Search button is clicked. Run through API
// document.getElementById('search').addEventListener('click', event => {
//     event.preventDefault()

//     let name = document.getElementById('name').value

//     axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ckuDCJZTvGODnGVYDC4FTRlLhXJhmjEtg3slZV4Z&query=${name}`)
//         .then(res => {
//         console.log(res.data)

//     })
//     .catch(err => { console.log(err) })
//   })

  document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('name').value

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=85a06dbd80b548e1822e70e6227765b4&query=${name}`)
        .then(res => {
        console.log(res.data)

        document.getElementById('nutrition').innerHTML = `
            <img src = ${res.data.results[0].image} >
        
        `

    })
    .catch(err => { console.log(err) })
  })