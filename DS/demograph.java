public class demograph {
    public static void main (String []args){

        graph gt = new graph();
        gt.create_node(13);
        gt.create_node(11);
        gt.create_node(23);
        gt.create_node(17);
        gt.create_node(15);
        gt.create_node(10);
        

        gt.create_edges(10,11);
        gt.create_edges(11,16);
        gt.create_edges(10,13);
        gt.create_edges(13,23);
        gt.create_edges(23,17);
        gt.create_edges(17,15);
        gt.create_edges(15,10);

        gt.bfs(13);
        System.out.println(" " );
        gt.dfs(10);
    }
    
}
