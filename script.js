let search = document.querySelector('.search input');
let btn = document.querySelector('#searchBtn');

search.addEventListener('input', () => {
    console.log(search.value);
})



let p = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=cc66c655');
p.then((Response)=>{
    return Response.json();
}).then((data)=>{
    console.log(data);
});