function showCats (response) {
let image = document.querySelector("#cat-image");
let source = response.data[0].url;
console.log(source);
image.setAttribute("src", `${source}`);
}

function getApi (event) {
event.preventDefault();
let apiKey = `live_iBRFbztp9U9GBX6MWVPJsizVjYUmI11mOpp9aQ0LEh13FKN4jHbgpmspghtNNPxF`;
let url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`; 
console.log(url);
axios.get(url).then(showCats);
}


let button = document.querySelector("#cat-link");
button.addEventListener("click", getApi); 
