import quote from './images/quote.png'
import endless from './images/endless.png'
import pip from './images/pip.png'
import joke from './images/joke.png'
import lightDark from './images/lightDark.png'
import monsters from './images/monsters.png'

const projects = [
    {
        id: 1,
        name: 'Quote Generator',
        img: quote,
        projectLink: "https://crisecheguren.github.io/quote-generator",
        sourceLink: "https://github.com/crisecheguren/quote-generator",
        description: 'This inspirational quote generator was made mostly using CSS and vanilla JS.  I am fetching a big JSON object filled with quotes and storing them in an array.  Then I use Math.random to find a quote and display it.  I also provide a way for you to tweet the quote!'
    },
    {
        id: 2,
        name: 'Infinite Scroll',
        img: endless,
        projectLink: "https://crisecheguren.github.io/infinite-scroll/",
        sourceLink: "https://github.com/crisecheguren/infinite-scroll",
        description: 'This infinite scroll project was made using vanilla JS and the unsplashAPI.  I pull some photos and make the api call again to load some more once the user reaches a certain place in the window while scrolling. Each photo links to the unsplash website.'
    },
    {
        id: 3,
        name: 'Picture in Picture',
        img: pip,
        projectLink: "https://crisecheguren.github.io/picture-in-picture/",
        sourceLink: "https://github.com/crisecheguren/picture-in-picture",
        description: 'This is a fun picture-in-picture project.  When the page loads, the user is prompted to select a screen or media to share. When you press the start button, it initates picture-in-picture mode.'
    },
    {
        id: 4,
        name: 'Joke Teller',
        img: joke,
        projectLink: "https://crisecheguren.github.io/joke-teller/",
        sourceLink: "https://github.com/crisecheguren/joke-teller",
        description: 'This project showcased the VoiceRSS API (text-to-speech) and the JokeAPI.  I fetched a joke and played it through an audio element triggered by a button.'
    },
    {
        id: 5,
        name: 'Light/Dark Mode',
        img: lightDark,
        projectLink: "https://crisecheguren.github.io/light-dark-theme/",
        sourceLink: "https://github.com/crisecheguren/light-dark-theme",
        description: 'This light/dark mode project was made using vanilla JS and CSS.  I learned a lot about how to manipulate the root theme and also how to use localStorage to make sure I remember which theme a user picks.'
    },
    {
        id: 6,
        name: 'Monsters Rolodex',
        img: monsters,
        projectLink: "https://crisecheguren.github.io/monsters-rolodex/",
        sourceLink: "https://github.com/crisecheguren/monsters-rolodex/",
        description: 'This is a super simple project that uses vanilla react to fetch some monsters from an API and display them on the page.  I also added a search bar to filter the monsters by name.'
    }
]

export default projects;