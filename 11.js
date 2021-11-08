
function processJSON (json) {
  debugger;
  for (i = 0; i < json.items.length; i++) {
    //isolate individual photo item info 
    var item = json.items[i]; 
    //build a string of the HTML code representing the img src 
    var imgHTML = "<img src='" + item.media.m + "'/>"; 
    //insert it into our page using innerHTML property of DOM ID 
    document.getElementById("images").innerHTML += imgHTML; 
  }
}
