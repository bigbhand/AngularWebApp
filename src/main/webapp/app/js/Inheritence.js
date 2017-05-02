function Shape(dim1, dim2){
	
	this.dim1 = dim1;
	this.dim2 = dim2;
	
}

Shape.prototype.getDimentions = function(){
	
	return "Dimentions : ["+this.dim1+", "+this.dim2 +"]";
}

Shape.prototype.calculateArea = function(){
	
	return "I am a generic shape";
}

/*Rectangle*/
function Rectangle(dim1, dim2){
	
	Shape.call(this, dim1, dim2);
	
}

//Extend the prototype
Rectangle.prototype = Object.create(Shape.prototype);

//Override calulateArea method
Rectangle.prototype.calculateArea = function(){
	
	return "Area of Rectangle is : "+ (this.dim1 * this.dim2);
}

/*Triangle*/
function Triangle(dim1, dim2){
	
	Shape.call(this, dim1, dim2);
	
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.calculateArea = function(){
	
	return "Area of Triangle is : "+ (0.5 * this.dim1 * this.dim2);
}

/*Square*/
function Square(dim1, dim2){
	
	Shape.call(this, dim1, dim2);
	
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.calculateArea = function(){
	
	return "Area of Square is : "+ (this.dim1 * this.dim2);
}


var shapes = [new Shape(1,2), new Rectangle(10,20), new Triangle(30,40), new Square(50,50)]

shapes.forEach(function(shape) {
	
	document.write(shape.getDimentions()+"<br/>");
	document.write(shape.calculateArea()+"<br/><br/>");
});

