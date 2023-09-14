public class DoublyLinkedList {
	Node head;
	Node tail;
	
	class Node{
		int data;
		Node prev;
		Node next;	
		
		Node(int val){
			data = val;
			next = null;
			prev = null;
		}
	}
	
	DoublyLinkedList(){
		head = null;
		tail = null;
	}
	
	public void insertAtBeginning( int val){
		Node newNode = new Node(val);
		newNode.next = head;
		
		if(head==null) {
			tail = newNode;
		}
		else { 
			head.prev = newNode;	
		}	
		head = newNode;
		
	}
	
	public void display() {
		if(head==null)
			System.out.println("List is empty");
		Node temp = head; 
		while(temp != null) { 
			System.out.print(temp.data + " ");
			temp = temp.next; 
		}
		
	}
	public void insertAtPos(int pos,int val) {
		if(pos==0)
		{
			insertAtBeginning(val);
			return;
		}
		
		Node newNode = new Node(val);
		Node temp = head;
		for(int i=1;i<pos;i++) { 
			temp = temp.next;
			if(temp==null) 
				throw new IndexOutOfBoundsException("Invalid Pos " + pos);
		}
		
		newNode.next = temp.next;
		newNode.prev = temp;
		
		if(temp==tail)
			tail=newNode;
		else
			temp.next.prev = newNode;
		temp.next = newNode;
				
	}
	
	public void deleteAtPos(int pos) {
		
		if(head==null) 
			throw new IndexOutOfBoundsException("Deletion attempted on empty list ");
	
		if(pos==0) {
			head = head.next;
			if(head==null)
				tail=null;
			else
				head.prev = null;
			return;
		}
		
		Node temp = head;
		Node prev = null;
		
		
		for(int i=1;i<=pos;i++) {
			prev = temp; 
			temp = temp.next; 
			if(temp==null)
				throw new IndexOutOfBoundsException("Invalid position ");
				
		}
		
		prev.next = temp.next; 
		if(temp.next==null)
			tail = prev;
		else
			temp.next.prev = prev;
	}
	
	public void deleteAtBeginning() {
		
		if(head==null) 
			throw new IndexOutOfBoundsException("Deletion attempted on empty list ");
	
		head = head.next;
		if(head==null)
			tail=null;
		else
			head.prev = null;
	    }
    }
        
