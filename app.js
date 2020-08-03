document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('name').value

    axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ckuDCJZTvGODnGVYDC4FTRlLhXJhmjEtg3slZV4Z&query=${name}`)
        .then(res => {
        console.log(res.data)
        // document.getElementById('weather').innerHTML = `
        // <h1>${res.data.name}</h1>
        // <h2>Weather: ${res.data.weather[0].description}</h2>
        // <h3>Temperature: ${res.data.main.temp}</h3>
        // <h3>Humidity: ${res.data.main.humidity}</h3>
        // <h3>Wind Speed: ${res.data.wind.speed}</h3>
        // `
    })
    .catch(err => { console.log(err) })
  })

  document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('name').value

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=85a06dbd80b548e1822e70e6227765b4&query=${name}`)
        .then(res => {
        console.log(res.data)

        document.getElementById('nutrition').innerHTML = `
            <img src = ${res.data.results[0].image} >
        
        `
        

        // document.getElementById('weather').innerHTML = `
        // <h1>${res.data.name}</h1>
        // <h2>Weather: ${res.data.weather[0].description}</h2>
        // <h3>Temperature: ${res.data.main.temp}</h3>
        // <h3>Humidity: ${res.data.main.humidity}</h3>
        // <h3>Wind Speed: ${res.data.wind.speed}</h3>
        // `
    })
    .catch(err => { console.log(err) })
  })