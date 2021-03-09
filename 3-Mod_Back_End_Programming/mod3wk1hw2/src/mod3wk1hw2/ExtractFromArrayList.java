package mod3wk1hw2;

import java.util.ArrayList;
import java.util.List;

public class ExtractFromArrayList
{
	public static void main(String[] args) 
	{
		// Create a list and add some elements to the list.
		List<String> list_Strings = new ArrayList<String>();
		
		list_Strings.add("One");
		list_Strings.add("Two");
		list_Strings.add("Three");
		list_Strings.add("Four");
		list_Strings.add("Five");
		
		// print the original string.
		System.out.println("Original list: " + list_Strings);
		
		// string extracted from given index.
		List<String> sub_List = list_Strings.subList(0, 3);
		
		// print extracted string.
		System.out.println("List of first three elements: " + sub_List);
	}
}
