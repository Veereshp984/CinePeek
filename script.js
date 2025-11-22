let search = document.querySelector('.search input');
let btn = document.querySelector('#searchBtn');
let poster = document.querySelector('#poster img');
let title = document.querySelector('#detail-title');
// console.log(title);

let year = document.querySelector('#detail-released');
// console.log(year);

let runtime = document.querySelector('#detail-runtime');
// console.log(runtime);
let genre = document.querySelector('#detail-genre');
// console.log(genre);
let director = document.querySelector('#detail-director');
// console.log(director);
let language = document.querySelector('#detail-language');
// console.log(language);
let rating = document.querySelector('#detail-rating');
// console.log(rating);
let statusMessage = document.querySelector('#statusMessage');
let resultSection = document.querySelector('#results');
btn.addEventListener('click',()=>{
    let titleText = search.value.trim();
    if(titleText.length === 0){
        statusMessage.innertext = "enter the movie name properly";
        statusMessage.style.display = "block";
    }else{
        statusMessage.innertext = "Searching...";
          getMovie(titleText);
    }
})
const updateMovieDetails = (movie)=>{
    title.innerText = movie.Title;
    year.innerText = movie.Released;
    runtime.innerText = movie.Runtime;
    genre.innerText = movie.Genre;
    director.innerText = movie.Director;
    language.innerText = movie.Language;
    rating.innerText = movie.imdbRating;
    poster.src = movie.Poster;
};

const getMovie = async (titleText)=> {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${titleText}&apikey=cc66c655`);
        const data = await response.json();
        if(data.Response ==="True"){
            statusMessage.style.innerText = "Searching..."
            document.querySelector("#results").classList.remove("hidden");
              updateMovieDetails(data);
              resultSection.classList.remove('hidden');
        }else{
            statusMessage.innerText = `No movie found for ${titleText} `;
            statusMessage.style.display = "block";
            resultSection.classList.add('hidden');
        }
       } catch(error){
        console.error("error :", error);
       }
}










