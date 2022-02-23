import quote from './images/quote.png'

const projects = [
    {
        id: 1,
        name: 'Quote Generator',
        img: quote,
        projectLink: "https://crisecheguren.github.io/quote-generator",
        description: 'This inspirational quote generator was made mostly using CSS and vanilla JS.  I am fetching a big JSON object filled with quotes and storing them in an array.  Then I use Math.random to find a quote and display it.  I also provide a way for you to tweet the quote!'
    },
    {
        id: 2,
        name: 'Project 2',
        img: "https://picsum.photos/400/400",
        projectLink: "https://picsum.photos/400/400",
        description: 'This is a long description for project 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi animi aut voluptates. Molestiae fuga, doloremque eius sapiente est atque officiis in ratione saepe porro hic quod facere quam itaque!'
    },
    {
        id: 3,
        name: 'Project 3',
        img: "https://picsum.photos/400/500",
        projectLink: "https://picsum.photos/400/400",
        description: 'This is a long description for project 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi animi aut voluptates. Molestiae fuga, doloremque eius sapiente est atque officiis in ratione saepe porro hic quod facere quam itaque!'
    },
    {
        id: 4,
        name: 'Project 4',
        img: "https://picsum.photos/500/300",
        projectLink: "https://picsum.photos/400/400",
        description: 'This is a long description for project 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi animi aut voluptates. Molestiae fuga, doloremque eius sapiente est atque officiis in ratione saepe porro hic quod facere quam itaque!'
    }
]

export default projects;