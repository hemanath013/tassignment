class Shape 
{
    int len,br,radi; 
    Shape()
    {
       System.out.println();
    }

    Shape(int len,int br,int radi)
    {
        this.len=len;
        this.br=br;
        this.radi=radi;
    }

    void recarea() 
    {
        System.out.println("rectanglea :"+(len*br));
    }
    void cirarea(){
        System.out.println("circlearea :"+((3.14)*radi*radi));
    }
}
    class rec extends Shape
    {
        rec(){
            super(10,20,30);
        }
    }
    class cir extends Shape{
        cir(){
            super(1,2,3);
        }
    }

        

    
public class inheritance {
    public static void main(String[] args) {
        rec r= new rec();
        r.recarea();
        cir c=new cir();
        c.cirarea();
    }
    
}
