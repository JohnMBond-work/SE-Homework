package mod3w1hw3;

public class Cuboid extends Rectangle {
	private double height;
	
	public Cuboid(double width, double length, double height) {
		// call to the parent class constructor
		super(width, length);
		if(height < 0) {
			this.height = 0;
			
		} else {
			this.height = height;
		}
			

		}
	
		public double getHeight() {
			return height;
		}
		
		public double getVolume() {
			return height*this.getArea();
		}
	
		@Override // changes default output in console to a more human readable format
		public String toString() {
			// in JS `Rectangle:{width:${width}, length:${length}}`
			return String.format("Cuboid:{width:%s, length:%s, height:%s}",this.getLength(), this.getLength(), height);
		
	}
}
