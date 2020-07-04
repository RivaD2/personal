/* CHOOSE LUNCH
  Write a function chooseLunch that accepts two names as parameters
  and returns an array of restaurants that both people want for lunch.
  If they can't agree on any restaurants, return the string "no match".
 */

var prefs = {
    richard:  ["marios", "chef king", "norms"],
    danesh:   ["chef king", "honey hole"],
    gilfoyle: ["marios", "norms", "cafe turko"],
    jared:    ["marios", "norms", "honey hole", "cafe turko", "giddy up"],
    erlich:   ["marios", "honey hole", "norms"],
    bighead:  ["honey hole", "giddy up", "cafe turko"],
  }
  
  function chooseLunch(person1, person2) {
    /* Write code below this line */
    var lunchOptionsOne = prefs[person1];
    var lunchOptionsTwo = prefs[person2];
    var choiceOne = lunchOptionsOne[0];
    var choiceTwo = lunchOptionsTwo[0];
    //return [choiceOne, choiceTwo];
    var allMatches = [];
    for (var i = 0; i < lunchOptionsOne.length; i++) {
        var currentOption = lunchOptionsOne[i];
        var matchIndex = lunchOptionsTwo.indexOf(currentOption);
        if (matchIndex != -1) {
            allMatches.push(currentOption);
        }
    }
    if (allMatches.length == 0) {
        return "No match";
     } else {
     return allMatches
    }
}
    

    
    /* Write code above this line */
  
  
  console.log( chooseLunch("jared", "richard") );    // ["marios", "norms"]
  console.log( chooseLunch("danesh", "gilfoyle") );  // "no match"
  console.log( chooseLunch("erlich", "bighead") );     // ["honey hole"]
  