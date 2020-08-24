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
    let updateBackground = document.getElementById("section-highlight").style.backgroundImage = openTag + fileDirectory + selectBackgroundFile + closeTag;
  };

let links = document.links;

for (let i = 0, linksLength = links.length; i < linksLength; i += 1) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   } 
}

window.onload=function(){
  var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
      alert("Please read this web zine on a Dekstop, laptop computer, or tablet in landscape orientation for the best reading experience.");              
  } else {

  }
}
  