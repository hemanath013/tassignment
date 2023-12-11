public class demoCircularLis {
     public static void main(String[] args) {
        CircularLinkedList list= new CircularLinkedList();
        
        list.insertAtBeginning(2);
        list.insertAtBeginning(3);
        list.insertAtBeginning(5);
        list.insertAtBeginning(6);
        list.display();

        System.out.println(" ");
        list.insertAtEnd(77);
        list.display();
         
        System.out.println("");
        list.deleteAtBeginning();
        list.display();

        System.out.println("");
        list.deleteAtEnd();
        list.display();
    }
}




    

