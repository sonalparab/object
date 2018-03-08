var growing = true;
var svg = document.getElementById("pic");
var clearButt = document.getElementById("clear");
var circleR = 0;

var createObj = function(x, y, r, c){
    var obj = {
	x:x,
	y:y,
	r:r,
	c:c,
	el:document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	display: function(){
	    this.el.setAttribute("cx", this.x);
	    this.el.setAttribute("cy", this.y);
	    this.el.setAttribute("r", this.r);
	    this.el.setAttribute("fill", this.c);
	    this.el.addEventListener("click", changeColor);
	    svg.appendChild(this.el);
	},
	remove: function(){
	    svg.removeChild(this.el);
	}
    };
    return obj;
}

var placeCircle = function(e){
    var c = createObj(e.offsetX, e.offsetY, 15, "goldenrod");
    c.display();
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

