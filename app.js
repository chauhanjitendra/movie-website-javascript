const API = "5d8209ae2c8049678bb8b7205aa53a20";
let url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5d8209ae2c8049678bb8b7205aa53a20";

let IMAGE_url = "https://image.tmdb.org/t/p/w500/";

const main = document.getElementById("main");
console.log(main);

// console.log(movieEle);
fetch(url)
  .then((res) => {
      console.log(res);
    return res.json();
  })
  .then((movieData) => {
    console.log(movieData);
    movieData.results.forEach((movie) => {
      console.log(movie);
      const movieEle = document.createElement("div");
      movieEle.classList.add("movie");
      movieEle.innerHTML = `

           <img src=${IMAGE_url + movie.poster_path} alt="">
            <div class="movie-info">
                <h3>Movie Title</h3>
                <span class="green">
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>

                    9.8</span>

            </div>
            <div class="overview">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab corporis ducimus, voluptate eum dolorum
                architecto excepturi. Quis, laudantium. Debitis obcaecati quae ipsum nobis provident magni tenetur quam
                dolorum. Ipsa?
            </div>

          `;

      main.appendChild(movieEle);
    });
  });
