/* jslint esversion: 6 */
function fetchGif(api_key, rating) {
  "use strict";
  let d = (new Date()).getTime();
  let url = `http://crossorigin.me/https://api.giphy.com/v1/gifs/random?${d}&rating=${rating}&api_key=${api_key}`;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let jsonObj = JSON.parse(xhr.responseText);
        let imageSrc = jsonObj.data.fixed_height_small_url;
        createSticker(imageSrc, 'honoree');
      } else {
        return (console.log('error'));
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

function createSticker(url, who) {
  "use strict";
  let sticker = document.createElement('img');
  let honoree = document.getElementById(who);
  sticker.setAttribute('src', url);
  honoree.appendChild(sticker);
}

function clearSticker() {
  let honoree = document.getElementById('honoree');
  while (honoree.firstChild){
    honoree.removeChild(honoree.firstChild);
  }
}

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
  clearSticker('honoree');
  fetchGif(API_KEY, 'g');
});
