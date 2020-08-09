const backgrounds = [
    "blm-the-all-nite-images.png",
    "la-riots-1992-by-ricky-bonilla.png",
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
    // console.log(updateBackground);
  };
  
  