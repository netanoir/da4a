const backgrounds = [
    "blm-the-all-nite-images.png",
    "la-riots-1992-by-ricky-bonilla.png",
    "new-york-protest-against-vietnam-war.png",
    "pan-african-conference-protests.png",
    "tulsa-race-riot-inflames-1921.png",
    "woolworths-sit-in-durham-nc-1960.png",
  ];
  
  let selectBackgroundFile = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  let fileDirectory = "/da4a/assets/images/backgrounds/";
  let openTag = "url('";
  let closeTag = "')";
  
  window.onload = (event) => {
    document.getElementById("section-highlight").style.backgroundImage = openTag + fileDirectory + selectBackgroundFile + closeTag;
  };

let links = document.links;

for (let i = 0, linksLength = links.length; i < linksLength; i += 1) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   } 
}

if (navigator.userAgent.match(/Mobile/)) {
document.getElementById('switch-to-desktop').innerHTML = 'Please read in landscape orientation on a desktop, laptop or tablet for the best reading experience. Thank you!';
}

  