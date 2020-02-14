// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const keys = Object.keys(response.data.articles);
        // Iterate over topic arrays
        Object.values(response.data.articles).forEach((topicArticlesArray, i) => {
            // Iterate over articles
            const topic = keys[i];
            topicArticlesArray.forEach(articleObj => cardsContainer.append(createArticleCard(articleObj, topic)));
        });
    })
    .catch(err => console.log(`Articles Get Error: ${err}`));

function createArticleCard(obj, topic) {
    // Create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    // Add classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // Add data
    if (topic === 'node') {
        card.dataset.topic = 'node.js';
    } else {
        card.dataset.topic = topic;
    }

    // Add content
    headline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    name.textContent = `By ${obj.authorName}`;

    // Append elements
    imgContainer.append(img);
    author.append(imgContainer, name);
    card.append(headline, author);

    return card;
}