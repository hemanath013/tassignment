public class demodoublylink {
    public static void main(String[] args) {
        DoublyLinkedList list= new DoublyLinkedList();
        
        list.insertAtBeginning(2);
        list.insertAtBeginning(3);
        list.insertAtBeginning(5);
        list.insertAtBeginning(6);
        list.display();

        System.out.println(" ");
        list.insertAtPos(2,4);
        list.display();
         
        System.out.println("");
        list.deleteAtPos(2);
        list.display();

        System.out.println("");
        list.deleteAtBeginning();
        list.display();
    }
}

    

