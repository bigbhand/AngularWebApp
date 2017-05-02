function Shape(dim1, dim2){
	
	this.dim1 = dim1;
	this.dim2 = dim2;
	
	throw new Error("Unable to create instance of Shape");
	
}

//Shape.prototype.dim = 20;

Shape.prototype.getDimentions = function(){
	
	return "Dimentions : ["+this.dim1+", "+this.dim2 +"]";
}

Shape.prototype.calculateArea = function(){
	
	return "I am a generic shape";
}

/*Rectangle*/
function Rectangle(dim1, dim2){
	
	this.dim1 = dim1;
	this.dim2 = dim2;
	
}

//Extend the prototype
Rectangle.prototype = Object.create(Shape.prototype);

//Override calulateArea method
Rectangle.prototype.calculateArea = function(){
	
	return "Area of Rectangle is : "+ (this.dim1 * this.dim2);
}

/*Triangle*/
function Triangle(dim1, dim2){
	
	this.dim1 = dim1;
	this.dim2 = dim2;
	
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.calculateArea = function(){
	
	return "Area of Triangle is : "+ (0.5 * this.dim1 * this.dim2);
}

/*Square*/
function Square(dim){
	
	this.dim = dim;
	
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.getDimentions = function(){
	
	return "Dimentions : ["+this.dim+", "+this.dim +"]";
}

Square.prototype.calculateArea = function(){
	
	return "Area of Square is : "+ (this.dim * this.dim);
}


var shapes = [new Rectangle(10,20), new Triangle(30,40), new Square(50,50)]

shapes.forEach(function(shape) {
	
	document.write(shape.getDimentions()+"<br/>");
	document.write(shape.calculateArea()+"<br/><br/>");
});


/**Note:
 *     1. As you notice, you cannot create an instance of Shape
 *        new Shape() will throw an error
 *        
 *     2. Inherit the property from the parent and override the methods as needed.
 *      
 * 
 **/
