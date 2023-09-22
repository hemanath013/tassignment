public class sort {
    public static void selectionsort (int [] arr){
        for(int i=0;i<arr.length;i++){
            int minIndex = i;
            for(int j=i+1;j<arr.length;j++){
                if(arr[j]<arr[minIndex]){
                    minIndex = j;
                }
            } 

            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    public static void bubblesort(int[] arr){
        
    for(int i=0;i<arr.length;i++){
         boolean swapped= false;
        for( int j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                swapped = true;
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            }
        }
        if(!swapped)
            break;
    }
   
}
 public static void descbubblesort(int[] arr){
        
    for(int i=0;i<arr.length;i++){
         boolean swapped= false;
        for( int j=0;j<arr.length-1-i;j++){
            if(arr[j]<arr[j+1]){
                swapped = true;
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            }
        }
        if(!swapped)
            break;
    }
}

}

