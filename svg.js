var growing = true;
var svg = document.getElementById("pic");
var clearButt = document.getElementById("clear");
var c;

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
	    this.el.addEventListener("click", this.remove);
	    svg.appendChild(this.el);
	},
	remove: function(e){
	    if(this.getAttribute("fill") == "goldenrod"){
		this.setAttribute("fill", "lightsteelblue");
		e.stopPropagation();
	    }
	    else{
		e.stopPropagation();
		svg.removeChild(this);
		var xcor = Math.floor(Math.random()*285 + 8);
		var ycor = Math.floor(Math.random()*385 + 8);
		obj = createObj(xcor,ycor,15,"goldenrod");
		obj.display();
	    }
	}
    };
    return obj;
}

var placeCircle = function(e){
    obj = createObj(e.offsetX, e.offsetY, 15,"goldenrod");
    obj.display();
}

svg.addEventListener("click", placeCircle);

var clearFxn = function(e){
    pic.innerHTML = "";
}

clearButt.addEventListener("click", clearFxn);

