const about_main = document.querySelector(".main");
const data = JSON.parse(localStorage.getItem("movie"));


if(about_main && data){
about_main.innerHTML = `
                    <div class="main_left">
                <h1 class="main_title">${data.Title}</h1>
                <img class="img" src="${data.Poster}" alt="">
            </div>

            <div class="main_left">
                <p class="info">imdbRating: ${data.imdbRating} <span style="color: white;"></span></p>
                <p class="info">imdbVotes: ${data.imdbVotes} <span style="color: white;"></span></p>
                <p class="info">Metascore: ${data.Metascore} <span style="color: white;"></span></p>
                <p class="info">Type: ${data.Type} <span style="color: white;"></span></p>
                <p class="info">Released: ${data.Released} <span style="color: white;"></span></p>
                <p class="info">Country: ${data.Country} <span style="color: white;"></span></p>
                <p class="info">Language: ${data.Language} <span style="color: white;"></span></p>
                <p class="info">Genre: ${data.Genre} <span style="color: white;"></span></p>
                <p class="info">BoxOffice: ${data.BoxOffice} <span style="color: white;"></span></p>
                <p class="info">Director: ${data.Director} <span style="color: white;"></span></p>
                <p class="info">Writer: ${data.Writer} <span style="color: white;"></span></p>
                <p class="info">Actors: ${data.Actors} <span style="color: white;"></span></p>
                <p class="info">Awards: ${data.Awards} <span style="color: white;"></span></p>
                <p class="info">Plot: ${data.Plot} <span style="color: white;"></span></p>
                <p class="info">Runtime: ${data.Runtime} <span style="color: white;"></span></p>
                <p class="info">DVD: ${data.DVD} <span style="color: white;"></span></p>
                <p class="info">Website: ${data.Website} <span style="color: white;"></span></p>
                <p class="info">Production: ${data.Production} <span style="color: white;"></span></p>
            </div>
    `
    }