const form = document.querySelector("#form");
const input = document.querySelector("#movie");
const cards = document.querySelector(".cards");

function getData(url){
    axios.get(url).then((res) => {
        showData(res.data)
    })
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const valueS = input.value.trim();
    if(!valueS) return;

    getData(`http://www.omdbapi.com/?s=${valueS}&apikey=44052ded`);
})

cards.addEventListener("click", (e) =>{
    const card = e.target.closest(".card");
    if(!card) return;

    const imdbID = card.dateset.id;
    showOneMovie(imdbID);
})

function showData(data) {
    if(data.Response !== "True"){
        cards.innerHTML = "<h1>No results</h1>";
        return;
    }

    cards.innerHTML = data.Search.map(
        (movie, index) => `
         <div class="card" data-index="${index}" data-id="${movie.imdbID}">
        <h1 class='card__title'>${movie.Title.slice(0, 20)}</h1>
        <img class='card__img' src="${movie.Poster}" alt="${movie.Title}" />
        <div class='card__info'> <p class='card__type'>${movie.Type}
        </p> <p class='card__year'>${movie.Year}</p> </div>
      </div>
        `
    ).join("");
}

function movie(id){
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=44052ded`).then((res) =>{
        console.log("Movie details:", res.data);
        
    })
}