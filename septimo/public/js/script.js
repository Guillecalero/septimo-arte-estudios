function initMap() {
    getMovies()
    
}
let baseUrl= 'https://imdb-api.com/en/API/'

//pk_htubaue9s1y3luxyj
//https://imdb-api.com/en/API/Search/k_56a5f2v5/inception%202010


function getMovies(query) {
let requestOptions = {
  method: 'GET',
  redirect: 'follow'
}
let moviesNode = document.getElementById('movies')
let newNodes = ''
debugger
fetch(`${baseUrl}Search/k_56a5f2v5/${query}`, requestOptions)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    response.results.forEach(elm => {


       newNodes += `<div class="col-md-4">
      <div class="card player-card">
      <img src="${elm.img}" alt="${elm.title}" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title">${elm.title}</h5>
      <p class="card-text">${elm.description}</p>
      </div>
      </div>
      </div>`
    })
  })
  .catch(error => console.log('error', error));
  moviesNode.textContent= newNodes
    // axios.get(`${baseUrl}Search/k_56a5f2v5/${query}`)
    //     .then(response => console.log(response.results))
    //     //(response.results))
    //     .catch(err => console.log(err))
}


