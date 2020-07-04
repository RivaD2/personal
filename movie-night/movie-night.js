// Creating a list of movies using a string
const movies = [    
    {name: "LOGAN", genre:"action"},
    {name: "WONDER WOMAN", genre:"action"},
    {name: "CLUE", genre:"mystery"},
    {name: "GUARDIANS OF THE GALAXY(Vol.2)", genre:"comedy"},
    {name: "BLADERUNNER", genre:"scifi"},
    {name: "LAWRENCE OF ARABIA", genre:""},
    {name: "FROM RUSSIAN WITH LOVE", genre:"action"},
    {name: "THE BARBER OF SIBERIA", genre:""},
    {name: "SKYFALL", genre:"actopm"},
    {name: "BLAZING SADDLES", genre:"comedy"},
    {name: "TRADING PLACES", genre:"comedy"},
    {name: "IN BRUGES", genre:"comedy"},
    {name: "THE BIRDCAGE", genre:"comedy"},
    {name: "THE LADYKILLERS", genre:"comedy"},
    {name: "KUNG FU HUSTLE", genre:"comedy"},
    {name: "BEVERLY HILLS COP", genre:"comedy"},
    {name: "COMING TO AMERICA", genre:"comedy"},
    {name: "WHAT WE DO IN THE SHADOWS", genre:"comedy"},
    {name: "BRINGING UP BABY", genre:""},
    {name: "SOME LIKE IT HOT", genre:""},
    {name: "PREDATOR", genre:"scifi"},
];
/*created an ID in HTML and then a 
variable to reference the element*/
var ul=document.getElementById("movielist");
//creating a for loop to iterate through movie list
console.log("looping through movies");
var genre = "comedy";
for (let i = 0; i < movies.length;i++) {
    // line below loops through var "movies" 
    /*any change related to specific movie has to 
    take place inside loop" */
    const movie = movies[i];
    console.log("found a movie!", movie);
    
    //else if to only show movies that match the genre
    /*if movie genre matches the genre (comedy, action etc.)
    we want to do add it to the HTML. IF NOT, do nothing.*/

    if (genre === movie.genre) {
        //create an HTML element <li>  
        const li = document.createElement("li");
        // specifying content of element
        li.textContent = movie.name;
        //add element to DOM inside the <ul>
        ul.appendChild(li);
    } 
}
