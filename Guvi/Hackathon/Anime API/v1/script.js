

async function searchResults() {
    let searchstring = document.getElementById('search').value;
    // console.log(searchstring);
    let tosearch = searchstring.replace(/[ ]/g, '%20');
    // console.log(tosearch);
    let jsondata = await fetch(`https://api.jikan.moe/v3/search/anime?q=${tosearch}`);
    let data = await jsondata.json();
    console.log(data.results);
    displayData(data.results);
}

function displayData(data) {
    data.forEach((element) => {
        let div = document.createElement('div');
        let span_img = document.createElement('span');
        let span_content = document.createElement('span');
        let p = document.createElement('p');
        p.innerText = "Start Date: " + element.start_date + "End Date: " + element.end_date + "Type: " + element.type + "IMDb: " + element.score;
        span_content.append(p);
        let img = document.createElement('img');
        let url = element.image_url;
        img.setAttribute('src', url);
        span_img.append(img);
        document.body.append(span_img, span_content);

    })
}
// searchResults()