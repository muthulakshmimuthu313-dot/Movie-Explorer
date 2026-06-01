const movies = [
{
title:"Leo",
rating:"8.5/10",
year:"2023",
description:"Action thriller movie."
},
{
title:"Vikram",
rating:"8.8/10",
year:"2022",
description:"Action movie starring Kamal Haasan."
},
{
title:"Master",
rating:"8.0/10",
year:"2021",
description:"College professor vs gangster."
},
{
title:"Jailer",
rating:"8.3/10",
year:"2023",
description:"Rajinikanth action entertainer."
}
];

const movieList = document.getElementById("movie-list");

movies.forEach(movie => {
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
<h3>${movie.title}</h3>
<p>${movie.rating}</p>
`;
card.onclick = () => showMovie(movie);
movieList.appendChild(card);
});

function showMovie(movie){
document.getElementById("movie-list").style.display="none";
document.getElementById("movie-details").style.display="block";

document.getElementById("title").innerText = movie.title;
document.getElementById("rating").innerText = "Rating: " + movie.rating;
document.getElementById("year").innerText = "Year: " + movie.year;
document.getElementById("description").innerText = movie.description;
}

function goBack(){
document.getElementById("movie-list").style.display="grid";
document.getElementById("movie-details").style.display="none";
}