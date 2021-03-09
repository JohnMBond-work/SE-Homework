package mod3w1hw3;

public class Rectangle {

	private double width;
	private double length;
	
	public Rectangle(double width, double length) {
		if(width < 0) {
			this.width = 0;
			
		} else {
			this.width = width;
		}
		if(length < 0) {
			this.length = 0;
		} else {
			this.length = length;
		}
	}
	// method signature syntax:
	// access returnType name(params)
	public double getArea() {
		return width*length;
		
	}
	
	public double getWidth() {
		return width;
		
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}
	
	@Override // changes default output in console to a more human readable format
	public String toString() {
		// in JS `Rectangle:{width:${width}, length:${length}}`
		return String.format("Rectangle:{width:%s, length:%s}",width, length);
	}

	
	
	
	
	
	
	
	
	
	
}
