let previousdata = 0;


async function fetchData() {
  try {
    //remove previous datas:
    for (i = 0; i < previousdata; i++) {
      let searchResult = document.getElementById("search-result");
      searchResult.remove();
      button.removeEventListener('click', function () {
        weatherdata();
      });
    }

    //get country name from search box;
    var searchbar = document.getElementById("searchbar").value;

    //Fetching data from server:
    var data = await fetch("https://restcountries.eu/rest/v2/name/" + searchbar);
    var details = await data.json();
    previousdata = details.length;

    //looping for all the name that matches the search name:
    details.forEach((element) => {

      //Getting elements from HTML:
      let searchResultContainer = document.getElementById("search-results-container");
      let main_container = document.getElementById("main-container");

      //Creating HTML elements:
      let searchResult = document.createElement("div");
      searchResult.classList.add("search-result");
      searchResult.setAttribute("id", "search-result");

      let div_informations = document.createElement("div");
      div_informations.classList.add("informations");

      let div_name = document.createElement("div");
      div_name.classList.add("name");

      let div_flag = document.createElement("div");
      div_flag.classList.add("flag");
      let img = document.createElement("img");
      img.setAttribute("src", element.flag);
      div_flag.appendChild(img);

      let h4_population = document.createElement("h4");
      let h4_capital = document.createElement("h4");
      let h4_region = document.createElement("h4");
      let h4_sub_region = document.createElement("h4");
      let h4_latlng = document.createElement("h4");
      let h4_currency = document.createElement("h4");

      //lat and long for weatherAPI:
      async function weatherdata() {
        let [lat, lang] = [...element.latlng];
        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=34e12d30432331db76aee761a136013c&units=metric`);
        let Wdata = await weather.json();
        alert(Wdata.main.temp + " °C");
      }
      let div_button = document.createElement('div');
      let button = document.createElement('button');
      div_button.append(button);
      button.innerText = "Weather Data";
      button.setAttribute('id', 'weatherData');
      button.setAttribute('class', 'weatherData');
      button.addEventListener('click', function () {
        weatherdata();
      });

      button.style.width = "40%";
      button.style.backgroundColor = "hsl(280, 55%, 44%)";
      button.style.padding = "0.5rem";
      button.style.border = "1px solid white";
      button.style.borderRadius = "1rem";
      button.style.color = "white";
      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "hsl(280, 55%, 54%)";
        button.style.border = "1px solid black";
      })
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = "hsl(280, 55%, 44%)";
        button.style.border = "1px solid white";
      })
      div_button.style.display = "flex";
      div_button.style.justifyContent = "center";
      div_button.style.margin = "0.25rem 0";

      //assigning data:
      div_name.innerText = element.name;
      h4_capital.innerText = "Capital: " + element.capital;
      h4_region.innerText = "Region: " + element.region;
      h4_sub_region.innerText = "Sub-region: " + element.subregion;
      h4_latlng.innerText = "LatLng: " + [...element.latlng];
      h4_population.innerText = "Population: " + element.population;
      currency = element.currencies;

      let currencies = [];
      currency.forEach((ele) => {
        currencies.push(ele.code);
      });
      h4_currency.innerText = "Currency: " + [...currencies];

      div_informations.append(h4_capital, h4_region, h4_sub_region, h4_latlng, h4_population, h4_currency);
      searchResult.append(div_flag);
      searchResult.append(div_button);
      searchResult.append(div_name);
      searchResult.append(div_informations);
      searchResultContainer.append(searchResult);
      main_container.append(searchResultContainer);
    })
  }
  catch (error) {
    console.log("error");
  };
}



