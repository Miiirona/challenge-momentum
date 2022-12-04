const quotes = [
    {
        quote: " “The circle of an empty day is brutal and at night it tightens around your neck like a noose.” ",
        author:"Elena Ferrante, The Days of Abandonment",
    },
    {
        quote: " “I took a deep breath and listened to the old brag of my heart; I am, I am, I am.” ",
        author: "Sylvia Plath, The Bell Jar",
    },
    {
        quote: " “Sometimes I can feel my bones straining under the weight of all the lives I’m not living.” ",
        author:"Jonathan Safran Foer, Extremely Loud and Incredibly Close",
    },
    {
        quote: " “What are men to rocks and mountains?” ",
        author: "Jane Austen, Pride and Prejudice",
    },
    {
        quote: " “In your life there are a few places, or maybe only the one place, where something happened, and then there are all the other places.” ",
        author: "Alice Munro, Too Much Happiness",
    },
    {
        quote: " “It is sheer good fortune to miss somebody long before they leave you.” ",
        author: "Toni Morrison, Sula",
    },
    {
        quote: " “Each time someone dies, a library burns.” ",
        author: "Jandy Nelson, The Sky Is Everywhere",
    },
    {
        quote: " “And now that you don’t have to be perfect, you can be good.” ",
        author: "John Steinbeck, East of Eden",
    },
    {
        quote: " “The sky above the port was the color of television, tuned to a dead channel.” ",
        author: "William Gibson, Neuromancer",
    },
    {
        quote: " “Time is the longest distance between two places.” ",
        author: "Tennessee Williams, The Glass Menagerie",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =  quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;