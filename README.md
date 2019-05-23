# Upcoming Movies App
This project is a test for a Fullstack Developer position at
[Arctouch](arctouch.com)

The live version is here: http://alexmachina.mooo.com
## Features
The overall goal is to build a MVP of a movie's webapp.
For now, the app must feature a list of upcoming movies, where the user is able to see a list of upcoming movies, query for upcoming movies and see it's details.

## Assumptions
I assumed the following set of premises for building the business rules of the app:
1. Only movies to be released will be shown in the home page.
2. Movies that had been released will be shown when the user performs a search. Because that indicates that the user has intereset in a specific movie that may had already been released some time ago.
3. I didn't use the "Upcoming" endpoint from TMDb. I found the "Discover" endpoint to bring more suitable results and fine grained results.
4. I created an infinite scroll instead of a pagination mechanism.

## Disclaimers
1. As a developer who had dealt with PHP 5.x, at least four years away from the language and it's ecosystem, I did my best to provide an ok PHP code. I am aware many things can be improved, and it's just a matter of research and apply. I didn't have the proper time to do everything I wished I could, so, I did the best I could over a weekend, and, after all, at least it's a working MVP out there.

2. I tried not to over-engineer the front-end, and didn't spend much time creating the most scalable overpowered structure. I did not use Sagas, for instance, and I did not developed under TDD, because I had to spent most of the time learning PHP. It was to create a beautiful, astonishing front-end arctechture or one that worked with the all the specs. I choosed the later.

3. I rarely develop things without unit testing. What you see here is an edge case. Limitations were considered and this decision was made.

## Major Technologies Applied
### For the back-end
* PHP 7.x
* Symfony Components
* Guzzle HTTP client

### For the front-end
* React
* Redux
* React Router v4
* Material-UI
* Axios
* Redux Thunk
