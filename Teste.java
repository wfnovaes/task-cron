import java.util.Objects;

public class Teste {

  public static void main(String args []) {
    System.out.println("Teste");

    List<String> myList = new List<String>();
    myList.addFirst("ola1");
    myList.addFirst("ola2");
    myList.addFirst("ola3");
    myList.addFirst("ola4");
    myList.addFirst("ola5");

    String result = myList.next();
    while (!Objects.isNull(result)) {
      System.out.println(result);
      result = myList.next();
    }
    System.out.println("\nFINISH\n");

    myList.addLast("ola1");
    myList.addLast("ola2");
    myList.addLast("ola3");
    myList.addLast("ola4");
    myList.addLast("ola5");

    result = myList.next();
    while (!Objects.isNull(result)) {
      System.out.println(result);
      result = myList.next();
    }

    System.out.println("\nFINISH\n");

  }

  public static class List<T> {

    private Item<T> firstItem;
    private Item<T> lastItem;

    public List() {
      this.firstItem = null;
      this.lastItem = null;
    }

    public void addLast(T data) {
      if (this.isEmpty()) {
        createFirstItem(data);
      } else {
        Item<T> newItem = new Item<T>(data);
        this.lastItem.setNextItem(newItem);   
        this.lastItem = newItem;     
      }
    }

    public void addFirst(T data) {
      if (this.isEmpty()) {
        createFirstItem(data);
      } else {
        Item<T> newItem = new Item<T>(data);
        newItem.setNextItem(this.firstItem);
        this.firstItem = newItem;
      }
    }

    public boolean isEmpty(){
      return Objects.isNull(this.firstItem);
    }

    private void createFirstItem(T data) {
      Item<T> item = new Item<T>(data);
      this.firstItem = item;
      this.lastItem = item;
    }

    public T next(){
      if(isEmpty()) return null;
      Item<T> result = this.firstItem;
      this.firstItem = result.getNext();
      return result.getData();
    }

    class Item<T> {

      private Item<T> nextItem;
      private T data;

      public Item(T data){
        this.data = data;
      }

      public T getData() {
        return data;
      }

      public void setNextItem(Item<T> item) {
        this.nextItem = item;
      }

      public Item<T> getNext() {
        return this.nextItem;
      }

    }

  
  }

}




