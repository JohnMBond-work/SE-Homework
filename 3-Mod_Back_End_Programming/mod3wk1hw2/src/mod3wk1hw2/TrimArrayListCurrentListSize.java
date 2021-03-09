package mod3wk1hw2;

import java.util.ArrayList; 

public class TrimArrayListCurrentListSize { 
    public static void main(String[] args) 
    { 
  
        // creating an Empty Integer ArrayList 
        ArrayList<Integer> arr = new ArrayList<Integer>(9); 
  
        // using add(), add 5 values 
        arr.add(2); 
        arr.add(4); 
        arr.add(5); 
        arr.add(6); 
        arr.add(11); 
  
        System.out.println(arr);
        // trims the size to the number of elements 
        arr.trimToSize(); 
  
        System.out.println("The List elements are:"); 
  
        // prints all the elements 
        for (Integer number : arr) { 
            System.out.println("Number = " + number); 
        } 
    } 
} 