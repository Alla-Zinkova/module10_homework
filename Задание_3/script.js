const wsUri = "wss://echo.websocket.org/";

const btn= document.querySelector('.j-btn');
const input= document.querySelector('.inp');
const output= document.querySelector('.output');
const geo= document.querySelector('.j-geo');

let websocket;

function writeToScreen(message){
  let pre = document.createElement("p");
  pre.classList.add('paragraph');
  pre.innerHTML = message;
  output.appendChild(pre);
}

const error = () => {
  alert('Невозможно получить ваше местоположение');
}

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  let geo_link = document.createElement("a");
  geo_link.classList.add('link');
  geo_link.href = `https://www.openstreetmap.org/${latitude}/${longitude}`;
  geo_link.textContent = 'Гео-локация';
  output.appendChild(geo_link);  
}

document.addEventListener ('DOMContentLoaded', ()=>{
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(e){
    console.log("CONNECTED");
  };
  
  websocket.onmessage = function(e){
    writeToScreen(e.data);
    };
  
    alert.onclose = function(e){
      console.log("DISCONNECTED");
    };
  
   websocket.error = function(e){
       console.log(`ERROR: ${e.data}`);
    };
});

btn.addEventListener ('click', ()=>{
  const message = input.value;
  writeToScreen(message);
  websocket.send(message);
});

geo.addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert('Geolocation не поддерживается вашим браузером');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});