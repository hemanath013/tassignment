public class loop {
    public static void main(String[]args)
    {
        int a,b,i,n,c;
        a=0;
        b=1;
        n=100;
        System.out.println("="+a);
        System.out.println("="+b);
        for (i=0;i<n;i++){
        c=a+b;
        a=b;
        b=c;
        System.out.println("="+c);

        }
    }
    
}
