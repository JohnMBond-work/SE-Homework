package mod3wk1hw2;

import java.util.*; 
import java.util.HashSet; 
  
public class NumberOfElementsInHashSet { 
    public static void main(String args[]) 
    { 
        // Creating an empty HashSet 
        HashSet<String> set = new HashSet<String>(); 
  
        // Use add() method to add elements into the Set 
        set.add("1"); 
        set.add("2"); 
        set.add("3"); 
        set.add("4"); 
        set.add("five"); 
  
        // Displaying the HashSet 
        System.out.println("HashSet: " + set); 
  
        // Displaying the size of the HashSet 
        System.out.println("The size of the set is: " + set.size()); 
    } 
} 
