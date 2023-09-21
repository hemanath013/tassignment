public class demoBinarysearch {
    
    public static void main (String[]args){
    binarysearch bst = new binarysearch(10);
    bst.insert(9);
    bst.insert(8);
    bst.insert(7);
    bst.insert(6);
    bst.insert(11);
    bst.insert(12);
    bst.insert(13);
    bst.insert(5);
    bst.insert(14);
    bst.insert(15);
    bst.inOrder(bst.root);


    if(bst.search(bst.root,13) == null)
    System.out.print("not found");
    else
    System.out.print("found");

    
    } 
}
