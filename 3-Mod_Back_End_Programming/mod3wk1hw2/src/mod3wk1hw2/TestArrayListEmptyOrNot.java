package mod3wk1hw2;

import java.util.ArrayList;

public class TestArrayListEmptyOrNot 
{
    public static void main(String[] args) 
    {
        ArrayList<String> list = new ArrayList<>();
         
        System.out.println("List is empty so test is " + list.isEmpty());     //true
         
        list.add("A");
         
        System.out.println("List is occupied so test is " + list.isEmpty());     //false
         
        list.clear();
         
        System.out.println("List is empty again so test is " + list.isEmpty());     //true
    }
}
