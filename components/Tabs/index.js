// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => response.data.topics.forEach(topic => topics.append(createTab(topic))))
    .catch(err => console.log(`Topics Get Error: ${err}`));

function createTab(item) {
    // Create element
    const tab = document.createElement('div');

    // Add class
    tab.classList.add('tab');

    // Add content
    tab.textContent = item;

    // Add event listener
    tab.addEventListener('click', () => {
        const articles = document.querySelectorAll('.card');
        articles.forEach(article => {
            !(article.getAttribute('data-topic') === tab.textContent) ? article.style.display = 'none': article.style.display = 'block'
        })
    })

    return tab
}