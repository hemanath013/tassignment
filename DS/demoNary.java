public class demoNary {
    public static void main(String[]args){
        Nary rt = new Nary(13);
        rt.insert(11, 13);
        rt.insert(12, 13);
        rt.insert(16, 13);
        rt.insert(14, 13);
        rt.insert(15, 13);

        rt.bfs_traversal();
        System.out.println("");
        rt.dfs_traversal();
        System.out.println("");
        rt.find_height();
        System.out.println("");
        rt.delete(14);
    }
    
}
