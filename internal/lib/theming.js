function setTheme(theme) {
  localStorage.setItem("theme", theme);
  updateSetThemeDisplay();
}

function saveCustomTheme() {
  var dictToStore = {
    "background": document.getElementById("backgroundInput").value,
    "navtable": document.getElementById("navtableInput").value,
    "link": document.getElementById("linkInput").value,
    "text": document.getElementById("textInput").value
  };
  localStorage.setItem("themeCustom", JSON.stringify(dictToStore));
}

function populateCustomThemeFields() {
  var themeCustom = JSON.parse(localStorage.getItem("themeCustom"));
  document.getElementById("backgroundInput").value = themeCustom["background"];
  document.getElementById("navtableInput").value = themeCustom["navtable"];
  document.getElementById("linkInput").value = themeCustom["link"];
  document.getElementById("textInput").value = themeCustom["text"];
}


function getTextTags() {
  var tagsToGet = ["p", "li", "h1", "h2", "h3", "h4", "h5", "h6", "b", "i", "strong", "em", "code"];
  var returnArray = [];
  tagsToGet.forEach(function(item) {
    returnArray.push.apply(returnArray, Array.from(document.getElementsByTagName(item)));
  });
  return returnArray;
}


var themeLight = {
  "background": "white",
  "navtable": "blue",
  "link": "blue",
  "text": "black"
};

var themeDefault = {
  "background": "lightgray",
  "navtable": "blue",
  "link": "blue",
  "text": "black"
};

var themeDark = {
  "background": "#202020",
  "navtable": "darkgreen",
  "link": "green",
  "text": "lightgray"
};


function applyTheme(theme) {
  document.body.setAttribute("style", "background-color: " + theme["background"]);
  var aTags = Array.from(document.getElementsByTagName("a"));
  aTags.forEach(function(item) {
    item.setAttribute("style", "color: " + theme["link"]);
  });
  
  var textTags = getTextTags();
  textTags.forEach(function(item) {
    item.setAttribute("style", "color: " + theme["text"]);
  });
  
  document.getElementById("navtable").setAttribute("style", "border: 1px solid " + theme["navtable"] + ";");
  document.getElementById("navth").setAttribute("style", "background-color: " + theme["navtable"] + ";");
  Array.from(document.getElementsByClassName("navtd")).forEach(function(item) {
    item.setAttribute("style", "border: 1px solid " + theme["navtable"] + "; color: " + theme["text"] + ";");
  });
}


function applySetTheme() {
  var setTheme = localStorage.getItem("theme");
  console.log(setTheme);
  if (setTheme == "light") {
    applyTheme(themeLight);
  } else if (setTheme == "default") {
    applyTheme(themeDefault);
  } else if (setTheme == "dark") {
    applyTheme(themeDark);
  } else if (setTheme == "custom") {
    applyTheme(JSON.parse(localStorage.getItem("themeCustom")));
  }
}


function updateSetThemeDisplay() {
  var setThemeDisplay = document.getElementById("setThemeDisplay");
  setThemeDisplay.innerHTML = localStorage.getItem("theme");
}