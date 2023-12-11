import java.util.*;

public class demosort {
    public static void main(String[]args){
        
        int[] arr = {13,76,53,10,14};
        sort.selectionsort(arr);
        System.out.println("sort");

        System.out.println(Arrays.toString(arr));


        sort.bubblesort(arr);
        System.out.println("bubble");

        System.out.println(Arrays.toString(arr));
        

         sort.descbubblesort(arr);
         System.out.println("rev bubble");

        System.out.println(Arrays.toString(arr));
         
    }


    
    
}
