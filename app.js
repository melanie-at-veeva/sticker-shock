function fetchGif(api_key, rating) {
  "use strict";
  var url = "http://crossorigin.me/https://api.giphy.com/v1/gifs/random?rating=" + rating + "&api_key=" + api_key;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var jsonObj = JSON.parse(xhr.responseText);
        var imageSrc = jsonObj.data.fixed_height_small_url;
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
  var sticker = document.createElement('img');
  var honoree = document.getElementById(who);
  sticker.setAttribute('src', url);
  honoree.appendChild(sticker);
}

function clearSticker(honoree) {
  if (document.images.length) {
    document.getElementById(honoree).innerHTML = '';
  }
}
  var btn = document.querySelector('button');
  btn.addEventListener('click', function() {
    clearSticker('honoree');
  });
