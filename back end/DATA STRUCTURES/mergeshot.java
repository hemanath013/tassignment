public class mergeshot {


    public static void mergeshot (int [] arr,int start,int end ){
        if((end-start)==1)
        return;
        
        int mid =(end+start)/2;

        mergeshot(arr,start,mid);
        mergeshot(arr,mid,end);

        merge(arr,start,mid,end); 
    }

    public static void merge (int [] arr,int s,int m,int e){
        int i = s;
        int j = m;
        int k = 0;
        int [] joined = new int[e-s];

        while((i<m) && (j<e)){
            if(arr[i] < arr[j]){
            joined[k++] = arr[i++];
            }else{
                joined[k++] = arr[j++];
            }
            }
            while(i<m){
                joined[k++] = arr[i++];
            }
            while(j<e){
                joined[k++] = arr[j++];

            }


            for(k=0;k<joined.length;k++){
                arr [s+k] = joined[k];
            }

        }

    }
    

