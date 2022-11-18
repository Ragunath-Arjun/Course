
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
const searchIcon = document.createElement('button');
searchIcon.classList.add('btn');
searchIcon.setAttribute('type', 'button');
const iconImg = document.createElement('img');
iconImg.setAttribute('src', './search_white.svg');
iconImg.setAttribute('title', 'search');
iconImg.setAttribute('alt', 'search');
searchIcon.append(iconImg);
form.append(searchInput, searchIcon);
div.append(form);
nav.append(a, div);
const br = document.createElement('br');
document.body.append(nav, br);



