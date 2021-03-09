package mod3wk1hw2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CopyArrayList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	      List<String> zoo = new ArrayList<String>();
	      zoo.add("Zebra");
	      zoo.add("Lion");
	      zoo.add("Tiger");
	      List<String> list = new ArrayList<String>();
	      list.add("Hello");
	      list.add("Hi");
	      list.add("World");
	      
	      System.out.println(zoo);

	      System.out.println(list);
	      Collections.copy(list,zoo); // copying the ArrayList zoo to the ArrayList list
	      System.out.println(zoo);
	      System.out.println(list);
	   }
	}