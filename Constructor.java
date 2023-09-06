class box
{
    float len,wid;
    box(){
        len=10;
        wid=20;
    }
    box(float x,float y)
    {
        len=x;
        wid=y;
    }
    box (float x){
        len=wid=x;
    }
    float area(){
        return len*wid;
    }
    
}

public class Constructor {
    public static void main(String[] args) {
        box a=new box();
        System.out.println("area of the box :"+a.area());

        
    }
    
}
