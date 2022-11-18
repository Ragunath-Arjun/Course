let previousdata = 0;

function fetchData() {
  for (i = 0; i < previousdata; i++) {
    let searchResult = document.getElementById("search-result");
    searchResult.remove();
  }

  var searchbar = document.getElementById("searchbar").value;

  var data = fetch("https://restcountries.eu/rest/v2/name/" + searchbar);

  data
    .then((data) => {
      return data.json();
    })
    .then((details) => {
      previousdata = details.length;

      for (i = 0; i < details.length; i++) {
        // console.log(details[i].name);
        let searchResultContainer = document.getElementById(
          "search-results-container"
        );
        let main_container = document.getElementById("main-container");
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
        img.setAttribute("src", details[i].flag);
        div_flag.appendChild(img);

        let h4_population = document.createElement("h4");
        let h4_capital = document.createElement("h4");
        let h4_region = document.createElement("h4");
        let h4_sub_region = document.createElement("h4");
        let h4_latlng = document.createElement("h4");
        let h4_currency = document.createElement("h4");

        div_name.innerText = details[i].name;
        h4_capital.innerText = "Capital: " + details[i].capital;
        h4_region.innerText = "Region: " + details[i].region;
        h4_sub_region.innerText = "Sub-region: " + details[i].subregion;
        h4_latlng.innerText = "LatLng: " + [...details[i].latlng];
        h4_population.innerText = "Population: " + details[i].population;
        currency = details[i].currencies;

        let currencies = [];
        currency.forEach((element) => {
          currencies.push(element.code);
        });
        h4_currency.innerText = "Currency: " + [...currencies];

        div_informations.append(
          h4_capital,
          h4_region,
          h4_sub_region,
          h4_latlng,
          h4_population,
          h4_currency
        );
        searchResult.append(div_flag);
        searchResult.append(div_name);
        searchResult.append(div_informations);
        searchResultContainer.append(searchResult);
        main_container.append(searchResultContainer);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
