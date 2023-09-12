import java.util.Random;
import java.util.Scanner;
import java.util.HashMap;

interface cards{
    HashMap<Integer,Integer> card = new HashMap<Integer,Integer>()
    {
        {put(2,4);
        put(3,4);
        put(4,4);
        put(5,4);
        put(6,4);
        put(7,4);
        put(8,4);
        put(9,4);
        put(10,4);
        put(11,4);
        }
    };
    int draw(Random Random);    

}
class Game implements cards{
    public int draw(Random random){
        int ran=random.nextInt(10)+2;
        if(card.get(ran)==0){
            return  draw(random);
        }
        card.replace(ran,card.get(ran),card.get(ran)-1);
        return ran;
    }
}
public class blackjack {
    public static void main(String args[]){
        Random random =new Random();
        int p_total = 0;
        int d_total = 0;
        System.out.println("****************  Game Blackjack  ****************");
        Scanner sc=new Scanner(System.in);
        Game g=new Game();
        int p1=g.draw(random);
        int p2=g.draw(random);

        int d1=g.draw(random);
        int d2=g.draw(random);
        
        p_total=p1+p2;
        System.out.println("You get a " + p1 + " and a " + p2);
        System.out.println("Your total is " + p_total);
        System.out.println("\n");

        System.out.println("The dealer has a " + d1 + " showing, and a hidden card");
        System.out.println("His total is hidden, too \n");
    
      
        
        while (true) {
            System.out.print("Would you like to \"hit\" or \"stay\"? ");
            String choice = sc.nextLine().toLowerCase();

            if (choice.equals("hit")) {
                int card = g.draw(random);
                p_total += card;
                System.out.println("You drew a " + card);
                System.out.println("Your total is " + p_total);
                System.out.println("\n");

                if (p_total > 21) {
                    System.out.println("Bust! Dealer wins");
                    System.exit(0);
                }
            } else if (choice.equals("stay")) {
                break;
            }
        }
        d_total += d1+d2;
        System.out.println("Okay, dealer's turn");
        System.out.println("His hidden card was a " + d2);
        System.out.println("His total was " + d_total + "\n");

        while (d_total < 17) {
            int card = g.draw(random);
            d_total += card;
            System.out.println("Dealer chooses to hit");
            System.out.println("He draws a " + card);
            System.out.println("His total is " + d_total+"\n");
        }

        if (d_total > 21 || d_total < p_total) {
            System.out.println("Dealer stays\n");
            System.out.println("Dealer total is " + d_total);
            System.out.println("Your total is " + p_total+"\n");
            System.out.println("YOU WIN!");
        } else if (d_total > p_total) {
            System.out.println("Dealer stays\n");
            System.out.println("Dealer total is " + d_total);
            System.out.println("Your total is " + p_total+"\n");
            System.out.println("DEALER WINS!");
        } else {
            System.out.println("Dealer stays\n");
            System.out.println("Dealer total is " + d_total + ".");
            System.out.println("Your total is " + p_total+"\n");
            System.out.println("It's a TIE!");
        }
    }
}




