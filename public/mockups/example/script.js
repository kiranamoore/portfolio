document.getElementById("js-status").textContent = "loaded";

var cssLoaded = false;
var sheets = document.styleSheets;
for (var i = 0; i < sheets.length; i++) {
  if (sheets[i].href && sheets[i].href.indexOf("style.css") !== -1) {
    cssLoaded = true;
  }
}
document.getElementById("css-status").textContent = cssLoaded ? "loaded" : "linked (check styling above)";
