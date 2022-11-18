
//Navbar
const nav = document.createElement('nav');
nav.classList.add('navbar');
const a = document.createElement('a');
a.setAttribute('class', 'col-md-3 col-lg-2 navbar-brand font-weight-bolder');
const span_1 = document.createElement('span');
span_1.classList.add("anime");
span_1.innerText = "Anime";
const span_2 = document.createElement('span');
span_2.classList.add('studio');
span_2.innerText = "Studios";
a.append(span_1, span_2);
const div = document.createElement('div');
div.setAttribute('class', 'search-bar col-md-8 col-lg-8');
const form = document.createElement('form');
form.setAttribute('class', 'form-inline');
const searchInput = document.createElement('input');
searchInput.setAttribute('class', 'search-form');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search Anime (eg. naruto)');
searchInput.setAttribute('aria-label', 'search');
searchInput.setAttribute('id', 'search');
const searchIcon = document.createElement('button');
searchIcon.classList.add('btn');
searchIcon.setAttribute('type', 'button');
searchIcon.setAttribute('onclick', 'searchResults()');
const iconImg = document.createElement('img');
iconImg.setAttribute('src', './search_white.svg');
iconImg.setAttribute('title', 'search');
iconImg.setAttribute('alt', 'search');
searchIcon.append(iconImg);
form.append(searchInput, searchIcon);
div.append(form);
nav.append(a, div);
const br = document.createElement('br');


//Search Results COntainer

const container = document.createElement('div');
container.classList.add('container');
document.body.append(nav, br, container);
const row = document.createElement('div');
row.setAttribute('class', 'row main');
container.append(row);

function createCard(data) {
    let url = data.image_url;
    let startdate = data.start_date;
    let endDate = data.end_date;
    let type = data.type;
    let IMDb = data.score;
    let Episodes = data.episodes;
    let rated = data.rated;
    let Title = data.title;

    const col = document.createElement('div');
    col.setAttribute('class', 'col-md-4 col-lg-3 p-3');
    row.append(col);
    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card');
    col.append(flipCard);
    const innerCard = document.createElement('div');
    innerCard.setAttribute('class', 'row card-image card-inner');
    flipCard.append(innerCard);
    //Front Card:
    const cardFront = document.createElement('div');
    cardFront.setAttribute('class', 'col-12 card-front');
    const imgFront = document.createElement('img');
    imgFront.setAttribute('class', 'card-img');
    imgFront.setAttribute('width', '200px');
    imgFront.setAttribute('height', '250px');
    imgFront.setAttribute('alt', 'poster');
    imgFront.setAttribute('src', url);
    const hrline = document.createElement('hr');
    hrline.classList.add('hrline');
    const title = document.createElement('div');
    title.setAttribute('class', 'card-title title');
    title.innerText = Title;
    cardFront.append(imgFront, hrline, title);
    //Back Card
    const cardBack = document.createElement('div');
    cardBack.setAttribute('class', 'col-10 card-back');
    const imgBack = document.createElement('img');
    imgBack.setAttribute('class', 'card-img ');
    imgBack.setAttribute('width', '200px');
    imgBack.setAttribute('height', '250px');
    imgBack.setAttribute('alt', 'poster');
    imgBack.setAttribute('src', url);
    imgBack.setAttribute('style', "opacity: 0.2;");
    const imageOverlay = document.createElement('div');
    imageOverlay.classList.add('card-img-overlay')
    const p1 = backCardContent('p', "card-text", "Episodes: " + Episodes);
    const p2 = backCardContent('p', "card-text", type + " | " + rated);
    const p3 = backCardContent('p', "card-text", "IMDb Rating: " + IMDb);
    const p4 = backCardContent('p', "card-text", "Start Date: " + startdate);
    const p5 = backCardContent('p', "card-text", "End Date: " + endDate);
    imageOverlay.append(p1, p2, p3, p4, p5);
    cardBack.append(imgBack, imageOverlay);
    innerCard.append(cardFront, cardBack);
}

function backCardContent(htmlele, classes, contents) {
    const p = document.createElement(htmlele);
    p.setAttribute('class', classes);
    p.innerText = contents;
    return p;
}

// createCard();

async function searchResults() {
    row.innerText = '';
    let searchstring = document.getElementById('search').value;
    let tosearch = searchstring.replace(/[ ]/g, '%20');
    let jsondata = await fetch(`https://api.jikan.moe/v3/search/anime?q=${tosearch}`);
    let data = await jsondata.json();
    // console.log(data.results);
    displayData(data.results);
}

function displayData(data) {
    data.forEach((element) => {
        createCard(element);
    })
}