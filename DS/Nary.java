import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;


class N_Node{
	int data;
	ArrayList<N_Node> children;
	
	public   N_Node(int val){
		data = val;
	}
	
}
public class Nary {

	static N_Node root =null;

	public Nary(int d){
		root = new N_Node (d);
		root.children=new ArrayList<>();
			
	 }
    
	
	public void insert(int data , int node) {              
		
		int f=0;
		
		Queue<N_Node> q = new LinkedList<>();
		
		q.add(root);
		
		N_Node newnode = new N_Node(data);
		newnode.data = data;
		newnode.children = new ArrayList<>();
		
	   while(!q.isEmpty()) {
			
		N_Node temp = q.poll();
		
		if(temp.data == node) {
			f=1;
			temp.children.add(newnode);
		}else {
			q.addAll(temp.children);
		}
	  }
	   if(f==0) {
		   System.out.println("NO SUCH NODE EXIST");
	   }
	}
	
	void bfs_traversal() {
		
        Queue<N_Node> q = new LinkedList<>();
		
		q.add(root);
		
		while(!q.isEmpty()) {
			
			N_Node temp = q.poll();	
			System.out.print(temp.data+" ");
			q.addAll(temp.children);
			
			}
	}
	

	
void dfs_traversal() { 
		
		LinkedList<N_Node> l = new LinkedList<>();		          
		l.addFirst(root);	
		while(l.size()>0){	
			
		    N_Node temp = l.pollFirst();	
		    
		    System.out.print(temp.data +" ");	
		    
		    if(temp.children.size()>0) {		        
		        for(int i=temp.children.size()-1;i>=0;i--){
		             l.addFirst(temp.children.get(i));
		        }
		    }
		}
	}
	


 void find_height() { 
    
    int count=0;
	
	Queue<N_Node> q = new LinkedList<>();
	Queue<N_Node> sub = new LinkedList<>();
	
	q.add(root);
	
	while(!q.isEmpty()){
	    
	    N_Node temp = q.poll();
	    
	    if(temp.children.size() >0){
	        sub.addAll(temp.children);
	    }
	    if(q.size() ==0){
	        count++;
	        q.addAll(sub);
	        sub.clear();
	    }
	}
	System.out.print("HEIGHT :"+count);
}
	
int delete(int val){
	
	int flag=0;
    
    if(root.data == val){
    	flag=1;
        
        N_Node target = root;
    
    if(target.children.size() ==0){
        root = null;
    }else if(target.children.size()>0){
        N_Node replace_node = target.children.get(0);
        target.children.remove(0);
        replace_node.children.addAll(target.children);
        root = replace_node;
    }
    }else{
    	
 
    Queue<N_Node> q = new LinkedList<>();   
    q.add(root);
    
    int index=-1;   
     N_Node parent=null;
    
    while(!q.isEmpty()){      
        parent = q.poll();
        
        for(int i=0;i<parent.children.size();i++){
            if(parent.children.get(i).data == val){
                index=i;
                flag=1;
                break;
            }
        }
        if(flag == 1){
            break;
        }else{
            q.addAll(parent.children);
        }
    }
    if(flag == 1) {
    N_Node target = parent.children.get(index);
    
    if(target.children.size() ==0){
        parent.children.remove(index);
    }else if(target.children.size()>0 && parent.children.size()==1){
        parent.children.addAll(target.children);
        parent.children.remove(index);
    }else if(target.children.size()>0 && parent.children.size()>1){
        N_Node replace_node = target.children.get(0);
        target.children.remove(0);
        replace_node.children.addAll(target.children);
        parent.children.set(index , replace_node);
    }
    }
  }
    return flag;
} }

	
