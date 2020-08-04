document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('name').value

    axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ckuDCJZTvGODnGVYDC4FTRlLhXJhmjEtg3slZV4Z&query=${name}`)
        .then(res => {
        console.log(res.data)

    })
    .catch(err => { console.log(err) })
  })

  document.getElementById('search').addEventListener('click', event => {
    event.preventDefault()

    let name = document.getElementById('name').value

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=85a06dbd80b548e1822e70e6227765b4&query=${name}`)
        .then(res => {
        console.log(res.data)

        for (let i=0; i<10; i++) {
        // document.getElementById('nutrition').innerHTML = `
        //     <img src = ${res.data.results[i].image} >
        
        // `
        let imageEle = document.createElement('img')
        imageEle.setAttribute('src', `${res.data.results[i].image}`)
        
        imageEle.classList.add('image')



        document.getElementById('nutrition').append(imageEle)

        }
    })
    .catch(err => { console.log(err) })
  })