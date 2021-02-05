//How would I build Twitter?

/* Don't list out technologies I would use, draw diagrams, explain details, for example, 'I would use
 a web framework on the frontend, something to render out list of tweets' etc.
 */

 /*Steps:
 1. Identify two or so core features: Build out quick sketch of where tweets go, user feed is, notifications on 
 who to follow, notifications, messages, and ability to Tweet ----pick two or so of these
 2. Possible Implementation: Web interface: What should happen? What happens when request to backend server takes place? 
 3. Identify Challenges: What does a Tweet look like in the DB? How would the hastag system work or the retweet system?
 4. Solutions for scaling: How would features work as amount of users increases? Caching requests from database should be
 considered as well as deployment options.

 - Caching can be applied to many products out there, so the general idea is a user comes to server, and says, "Give me my feed."
 - What if that feed is very computationally expensive? 
    - If millions of users are accessing the server, building out feed of tweets for every request would be expensive quickly.
    - For some particular user, maybe I get list of Tweets from the DB, run an algorithm to calculate user's feed. Then I could send those tweets back to user
    and take list of Tweets and store in some sort of memory store. Anytime same user returns, rather than going to DB again and pulling
    out list again, I go to memory store, pull our previous feed and send it back to user.
- Deployment architecture: 
  - For a given user, maybe I can't satisfy millions of user's with a single machine running a server.
  - Maybe I create a load balancer when the user makes request to app.
  - The request goes to load balancer and it randomly assigns it to any one of a number of identical servers.
  - This is an example of horizontal scaling.
*/
