function toggleCss(){

    var element = document.getElementById("style_toggle");
    var currStyle = element.getAttribute("href");


    if (currStyle == "syle1.css") {
        element.setAttribute("href", "style2.css");
    }
    else {
        element.setAttribute("href", "syle1.css");
    }
    localStorage.setItem("style", element.getAttribute("href"));
}

window.onload = function() {
    var preferredStyle = localStorage.getItem("style") || "syle1.css";
    document.getElementById("style_toggle").setAttribute("href", preferredStyle);
  }