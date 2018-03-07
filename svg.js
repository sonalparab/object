var growing = true;
var svg = document.getElementById("pic");
var clearButt = document.getElementById("clear");
var circleR = 0;

var placeCircle = function(e){
    c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 15);
    c.setAttribute("fill", "goldenrod");
    c.addEventListener("click", changeColor, true);
    svg.appendChild(c);
}

var changeColor = function(e){
    if(this.getAttribute("fill") == "goldenrod"){
	this.setAttribute("fill", "lightsteelblue");
	e.stopPropagation();
    }
    else{
	svg.removeChild(this);
	e.stopPropagation();
	c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", Math.floor(Math.random()*285 + 8));
	c.setAttribute("cy", Math.floor(Math.random()*385 + 8));
	c.setAttribute("r", 15);
	c.setAttribute("fill", "goldenrod");
	c.addEventListener("click", changeColor, true);
	svg.appendChild(c);
    }
}

svg.addEventListener("click", placeCircle);

var clearFxn = function(e){
    pic.innerHTML = "";
}

clearButt.addEventListener("click", clearFxn);

