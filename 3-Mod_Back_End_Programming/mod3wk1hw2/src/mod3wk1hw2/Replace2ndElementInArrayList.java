package mod3wk1hw2;

import java.util.ArrayList;

public class Replace2ndElementInArrayList 
{
    public static void main(String[] args) 
    {
        ArrayList<String> list = new ArrayList<>();
         
        list.add("A");
        list.add("B");
        list.add("C");
        list.add("D");
         
        System.out.println("current list: " + list);
 
         
        //Replace C with C_NEW
 
 
        //1 - In multiple steps
         
        int index = list.indexOf("B");
         
        list.set(index, "B_NEW");
         
        System.out.println("list with B_NEW replacing B: " + list);
 
 
        //2 - In single step replace B with B_NEW
 
        list.set( list.indexOf("B_NEW") , "B_NEW2");
 
        System.out.println("list with B_NEW replacing B: " + list);
    }
}
