public class binarysearch {
    Node root;
    class Node{
        int key;
        Node left,right;

       public Node(int val){
            key = val;
            left = right=null;
        }
    }
    public binarysearch(int val){
        root = new Node(val);
    }
    public binarysearch(){
        root = null;
    }

    public void insert(int val){
        insert(root,val);
    }
    
    public Node insert(Node root,int val){
        if(root == null)
        return new Node(val);

        if(val<root.key)
        root.left = insert(root.left,val);
        else
        root.right = insert(root.right,val);

        return root;

    }

    public void inOrder(Node root){
        if(root!=null){
            inOrder(root.left);
            System.out.print(root.key +" ");
            inOrder(root.right);
        }
    }

    public Node search(Node root,int val){
        if(root == null || root.key == val)
        return root;

        if(val<root.key)
        return search(root.left,val);
       
        return search(root.right,val);
    }
    
}
