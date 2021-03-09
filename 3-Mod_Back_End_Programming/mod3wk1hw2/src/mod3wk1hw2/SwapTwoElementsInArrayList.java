package mod3wk1hw2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class SwapTwoElementsInArrayList 
{
    public static void main(String[] args) 
    {
        ArrayList<String> list = new ArrayList<>(Arrays.asList("a", "b", "c", "d", "e", "f"));
         
        System.out.println("Current list before swap" + list);
         
        Collections.swap(list, 1, 2);
         
        System.out.println("List after swap" + list);
    }
}
