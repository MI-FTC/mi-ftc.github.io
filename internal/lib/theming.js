var themeFields = [
  "background",
  "navtable",
  "link",
  "text",
  "specific",
  "keyword",
  "annotation",
  "comment",
  "string",
  "field",
  "number",
  "method",
  "typeParameter",
  "escapeSequence",
  "invalid",
  "invalidUnderline",
  "unused",
  "deprecated",
  "deprecatedRemove"
];
  
  var builtinThemeLight = {
  "background": "#FFFFFF",
  "navtable": "blue",
  "link": "blue",
  "text": "black",
  "specific": "green",
  "keyword": "#0033B3",
  "annotation": "#9E880D",
  "comment": "#8C8C8C",
  "string": "#067D17",
  "field": "#871094",
  "number": "#1750EB",
  "method": "#00627A",
  "typeParameter": "#007E8A",
  "escapeSequence": "#0037A6",
  "invalid": "red",
  "invalidUnderline": "red",
  "unused": "#909090",
  "deprecated": "#000000",
  "deprecatedRemove": "red"
};

var builtinThemeDefault = {
  "background": "lightgray",
  "navtable": "blue",
  "link": "blue",
  "text": "black",
  "specific": "green",
  "keyword": "#0033B3",
  "annotation": "#9E880D",
  "comment": "#8C8C8C",
  "string": "#067D17",
  "field": "#871094",
  "number": "#1750EB",
  "method": "#00627A",
  "typeParameter": "#007E8A",
  "escapeSequence": "#0037A6",
  "invalid": "red",
  "invalidUnderline": "red",
  "unused": "#909090",
  "deprecated": "#000000",
  "deprecatedRemove": "red"
};

var builtinThemeDark = {
  "background": "#2B2B2B",
  "navtable": "darkgreen",
  "link": "green",
  "text": "lightgray",
  "specific": "green",
  "keyword": "#CC7832",
  "annotation": "#BBB529",
  "comment": "#629755",
  "string": "#6A8759",
  "field": "#9876AA",
  "number": "#6897BB",
  "method": "#FFC66D",
  "typeParameter": "#507894",
  "escapeSequence": "#CC7832",
  "invalid": "brown",
  "invalidUnderline": "brown",
  "unused": "#909090",
  "deprecated": "#000000",
  "deprecatedRemove": "red"
};

function restoreBuiltinThemes() {
  localStorage.setItem("themeLight", JSON.stringify(builtinThemeLight));
  localStorage.setItem("themeDefault", JSON.stringify(builtinThemeDefault));
  localStorage.setItem("themeDark", JSON.stringify(builtinThemeDark));
}

var flag = localStorage.getItem("themeManRan");
if (flag == undefined || flag == false) {
  restoreBuiltInThemes();
  localStorage.setItem("themeCustom", JSON.stringify({}));
  localStorage.setItem("themeManRan", true);
}


/* Functions Used by the Theme Manager */
function initThemeMan() {
  applySetTheme();
  updateSetThemeDisplay();
  populateCustomThemeFields(getSetTheme());
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  updateSetThemeDisplay();
  populateCustomThemeFields(getSetTheme());
}

function populateCustomThemeFields(theme) {
  themeFields.forEach(function(item) {
    document.getElementById(item + "Input").value = theme[item];
  });
}

function saveSetTheme() {
  var dictToStore = {};
  for (item of themeFields) {
    dictToStore[item] = document.getElementById(item + "Input").value;
  }
  var themeStr = localStorage.getItem("theme");
  localStorage.setItem("theme" + themeStr[0].toUpperCase() + themeStr.slice(1), JSON.stringify(dictToStore));
}

function updateSetThemeDisplay() {
  var setThemeDisplay = document.getElementById("setThemeDisplay");
  setThemeDisplay.innerHTML = localStorage.getItem("theme");
}


/* Set Theme getter/setter */
function getSetTheme() {
  var setTheme = localStorage.getItem("theme");
  if (setTheme == "light") {
    return JSON.parse(localStorage.getItem("themeLight"));
  } else if (setTheme == "default") {
    return JSON.parse(localStorage.getItem("themeDefault"));
  } else if (setTheme == "dark") {
    return JSON.parse(localStorage.getItem("themeDark"));
  } else if (setTheme == "custom") {
    return JSON.parse(localStorage.getItem("themeCustom"));
  } else {
    return "noTheme";
  }
}

function applySetTheme() {
  applyTheme(getSetTheme());
}


/* Get Tags/Classes */
function getTextTags() {
  var tagsToGet = ["p", "li", "h1", "h2", "h3", "h4", "h5", "h6", "b", "i", "strong", "em", "code"];
  var returnArray = [];
  tagsToGet.forEach(function(item) {
    try {
      returnArray.push.apply(returnArray, Array.from(document.getElementsByTagName(item)));
      /* Join returnArray and array of all desired tags */
    } catch(error) {
      console.log("Couldn't get '" + item.toString() + "'");
      console.log(error);
    }
  });
  return returnArray;
}

/*function getColorizationTags() {
  var classesToGet = ["specific", "keyword", "field", "annotation", "string", "comment", "number"];
  var returnArray = [];
  classesToGet.forEach(function(item) {
    try {
      returnArray.push.apply(returnArray, Array.from(document.getElementsByClassName(item)));
    } catch(error) {
      console.log("Couldn't get '" + item.toString() + "'");
      console.log(error);
    }
  });
  return returnArray;
}*/

function getLinkTags() {
  try {
    var returnArray = Array.from(document.getElementsByTagName("a"));
    return returnArray;
  } catch(error) {
    console.log("Couldn't get link tags.");
    console.log(error);
  }
}


/* Apply Theme */
function applyText(theme) {
  var textTags = getTextTags();
  for (item of textTags) {
    try {
      item.setAttribute("style", "color: " + theme["text"] + ";");
    } catch(error) {
      console.log("Couldn't apply theme property 'text' to '" + item.toString() + "'");
      console.log(error);
    }
  }
}

function applyBackground(theme) {
  try {
    document.body.setAttribute("style", "background-color: " + theme["background"]);
  } catch(error) {
    console.log("Couldn't apply theme property 'background'");
    console.log(error);
  }
}

function applyLinks(theme) {
  var linkTags = getLinkTags();
  for (item of linkTags) {
    try {
      item.setAttribute("style", "color: " + theme["link"] + ";");
    } catch(error) {
      console.log("Couldn't apply theme property 'link' to '" + item.toString() + "'");
      console.log(error);
    }
  }
}

function applyNavTable(theme) {
  try {
    document.getElementById("navth").setAttribute("style", "background-color: " + theme["navtable"] + ";");
    document.getElementById("navtable").setAttribute("style", "border: 1px solid " + theme["navtable"] + ";");
  } catch(error) {
    console.log("Could not get navtable or navth");
    console.log(error);
  }
  try {
    remainingTags = Array.from(document.getElementsByClassName("navtd"));
  } catch(error) {
    console.log("Could not gather navtd tags");
    console.log(error);
  }
  for (item of remainingTags) {
    try {
      item.setAttribute("style", "border: 1px solid " + theme["navtable"] + ";");
    } catch(error) {
      console.log("Couldn't apply theme property 'navtable'");
      console.log(error);
    }
  }
}

function applyColorization(theme) {
  var classesToGet = ["specific", "keyword", "field", "annotation", "string", "comment", "number", "method", "typeParameter", "escapeSequence", "invalid", "invalidUnderline", "unused", "deprecated", "deprecatedRemove"];
  var tagsOfClass;
  for (item of classesToGet) {
    try {
      tagsOfClass = Array.from(document.getElementsByClassName(item));
    } catch(error) {
      console.log("Colorization could not gather tagsOfClass");
      console.log(error);
    }
    for (secondItem of tagsOfClass) {
      try {
        secondItem.setAttribute("style", "color: " + theme[item] + ";");
      } catch(error) {
        console.log("Couldn't apply colorization to '" + secondItem.toString() + "'");
        console.log(error);
      }
    }
  }
}

function applyTheme(theme) {
  applyText(theme);
  applyBackground(theme);
  applyLinks(theme);
  applyNavTable(theme);
  applyColorization(theme);
}

function oldApplyTheme(theme) {
  try { document.body.setAttribute("style", "background-color: " + theme["background"]); }
  catch { console.log("Couldn't apply theme to body"); }
  try { var aTags = Array.from(document.getElementsByTagName("a"));
  aTags.forEach(function(item) {
    item.setAttribute("style", "color: " + theme["link"]);
  }); }
  catch { console.log("Couldn't apply theme to a tags"); }
  
  try { var textTags = getTextTags();
  textTags.forEach(function(item) {
    item.setAttribute("style", "color: " + theme["text"]);
  }); }
  catch { console.log("Couldn't apply theme to text tags"); }
  
  try { document.getElementById("navtable").setAttribute("style", "border: 1px solid " + theme["navtable"] + ";"); }
  catch { console.log("Couldn't apply theme to navtable"); }
  try { document.getElementById("navth").setAttribute("style", "background-color: " + theme["navtable"] + ";"); }
  catch { console.log("Couldn't apply theme to navth"); }
  try { Array.from(document.getElementsByClassName("navtd")).forEach(function(item) {
    item.setAttribute("style", "border: 1px solid " + theme["navtable"] + "; color: " + theme["text"] + ";");
  }); }
  catch { console.log("Couldn't apply theme to class navtd"); }
  applyColorization(theme);
}