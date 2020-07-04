function slackIntro(query) { 
  switch(query) {
    case "name": 
        return "Riva";
    case "background":
        return [
            "communicationsDegree",
            "culinaryArts",
            "customerSupport",
            "languageStudy",  
        ];
    case "osVersion":
        return "macOS High Sierra 10.13";
    case "goalsFor102":
        return [
            "Build on skills learned in HTML and CSS",
            "Gain more familiarity with software engineering tools",
            "Increased comfort and confidence with code",
            "Learn more javaScript",
        ];
    }
}