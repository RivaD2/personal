// Creating a list of movies using a string
const movies = [    
    "LOGAN",
    "WONDER WOMAN",
    "CLUE",
    "GUARDIANS OF THE GALAXY(Vol.2)",
    "BLADERUNNER",
    "LAWRENCE OF ARABIA",
    "FROM RUSSIAN WITH LOVE",
    "THE BARBER OF SIBERIA",
    "SKYFALL",
    "BLAZING SADDLES",
    "TRADING PLACES",
    "IN BRUGES",
    "THE BIRDCAGE",
    "THE LADYKILLERS",
    "KUNG FU HUSTLE",
    "BEVERLY HILLS COP",
    "COMING TO AMERICA",
    "WHAT WE DO IN THE SHADOWS",
    "BRINGING UP BABY",
    "SOME LIKE IT HOT",
    "PREDATOR",
];
/*created an ID in HTML and then a 
variable to reference the element*/
var ul=document.getElementById("movielist");
//creating a for loop to iterate through movie list
console.log("looping through movies");
for (let i = 0; i < movies.length;i++) {
   // line below loops through var "movies" 
    const name = movies[i];
    console.log("found a movie!", name);
  //create an element  
    const li = document.createElement("li");
// specifying content of element
    li.textContent = name;
// need to add element to DOM 
ul.appendChild(li);
}
