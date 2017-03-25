function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send();
    return xmlHttp.responseText;
}

var fire = false;

function checkfire(){
	let maxV = JSON.parse(httpGet("https://api.particle.io/v1/devices/34001e001347343339383037/maxv?access_token=8b08209967c1f21b0acdbefabb634028eef09b85")).result;
	let maxI = JSON.parse(httpGet("https://api.particle.io/v1/devices/34001e001347343339383037/maxi?access_token=8b08209967c1f21b0acdbefabb634028eef09b85")).result;
  if (maxV > 1500 && maxI > 50){
    document.getElementById("fire").classList.add("visible");
    document.getElementById("fire").classList.remove("invisible");
    document.getElementById("thumb").classList.add("invisible");
    document.getElementById("thumb").classList.remove("visible");
    fire = true;
  } else {
    document.getElementById("thumb").classList.add("visible");
    document.getElementById("thumb").classList.remove("invisible");
    document.getElementById("fire").classList.add("invisible");
    document.getElementById("fire").classList.remove("visible");
  }
}

setInterval(() => {
	if (!fire)
		checkfire();
	} ,250);
