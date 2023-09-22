public class quicksort {
    public static void quicksort(int arr[],int low, int high ){
        
        int mid = (low + high)/2;
        int p=arr[mid];
        int l=low;
        int h=high;


        while(l<=h){
            while(arr[l]<p){
                l++;

            }
            while(arr[h]>p){
                h--;
            }

            if(l<=h){
                int temp = arr[l];
                 arr[l] = arr[h];
                arr[h] = temp;
                l++;
                h--;
            }
        }

        if(low<h){
            quicksort(arr, low, h);
        }

        if(high>l){
            quicksort(arr, l, high);
        }



    }
    
}
