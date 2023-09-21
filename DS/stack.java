public class stack {
    class Node{
        int data;
        Node next;
        Node(int val){
            data = val;
            next = null;
        }
    }   
        Node top;
        stack(){
            top = null;
        }
        public void push(int val ){
            Node newNode =new Node(val);
            newNode.next=top;
            top = newNode;
        }
        public int pop(){
            if(top==null)
            throw new IndexOutOfBoundsException("stack is empty");

            int temp=top.data;
            top = top.next;
            return temp;
        }
        
        public boolean IsEmpty(){
            return top==null;
            
        }
        public int peek(){
            return top.data;
        }
    
    
    
}
