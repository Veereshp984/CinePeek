let search = document.querySelector('.search input');
let btn = document.querySelector('#searchBtn');
let poster = document.querySelector('#poster img');
let title = document.querySelector('#detail-title');
console.log(title);

let year = document.querySelector('#detail-released');
console.log(year);

let runtime = document.querySelector('#detail-runtime');
console.log(runtime);
let genre = document.querySelector('#detail-genre');
console.log(genre);
let director = document.querySelector('#detail-director');
console.log(director);
let language = document.querySelector('#detail-language');
console.log(language);
let rating = document.querySelector('#detail-rating');
console.log(rating);

// fakeMovie = {
//   Title: "Interstellar",
//   Released: "07 Nov 2014",
//   Runtime: "169 min",
//   Genre: "Adventure, Drama, Sci-Fi",
//   Director: "Christopher Nolan",
//   Language: "English",
//   imdbRating: "8.6",
//   Poster: "https://resizing.flixster.com/7c3qnZfPzZgID7Ft97PccFwEf9U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
// }
const handleSearch = ()=>{
search.addEventListener('keyup',(dets)=>{
if(dets.key === "Enter"){
    console.log(dets.target.value);
    
}
    // if(search.value === " "){
    //     statusMessage.innerText="Enter the movie name properly";
    // }else if(search.value.trim().length> 0){
    //     statusMessage.innerText="Seaching...";
    //     fetchMovieBytitle()
    // }
});}
handleSearch();
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
// updateMovieDetails(fakeMovie);








