// using System.Collections;

// class HCL: IEnumerable{
//     // int [] numbers = {1,2,3}; //instance variable class level
//     int [] arr = {1,2,3,4};
//     public static void Main(){
//         // HCL obj = new HCL();

//         // for(int i = 0;i<obj.numbers.Length;i++){
//         //     Console.WriteLine(obj.numbers[i]);
//         // }

//         HCL obj = new HCL();

//         foreach(int x in obj){
//             System.Console.WriteLine(x);
//         }
    

//         //not a generic class
//         ArrayList list = new ArrayList();

//         list.Add(1);
//         list.Add(2);
//         list.Add(3);

//         // foreach(int i in list){

//         // }


//         // displayData(list);
       
//     }

//     public static void  displayData(IEnumerable al){
//      IEnumerator e = al.GetEnumerator();
//      while(e.MoveNext()){
//         Console.WriteLine(e.Current);
//      }
//     }

//     public static void  displayDataForEach(ArrayList al){
//        foreach(int x in al){
//         Console.WriteLine(x);
//        }
//     }

//     public IEnumerator GetEnumerator()
//     {
//         return new CustomEnumerator();
//     }
// }


// class CustomEnumerator : IEnumerator
// {
//     int [] arr = {1,2,3};
//     public int counter = -1; //pointer for moving
//     public object Current{
//         get {
//             Console.WriteLine("Inside current property" + arr[counter]);
//             return arr[counter];
//         }
//     }

//     public bool MoveNext()
//     {
//         counter++;
//         System.Console.WriteLine("Inside move next " + counter  );
//         return counter!=3;
//     }

//     public void Reset()
//     {
//         Console.WriteLine("We ae in Reset()");
        
//     }
// }



// public record HCL(int id, string name);

// class Program{
//     public static void Main(){

//         int [] arr1 = [1,2,3,4];
//         int [] arr2 = [10,20,30,40];
//         int [] arr3 = [11,12,13,14];

//         int [] final = [..arr1,..arr2,..arr3]; //This is spread operator

//         foreach(int x in final){
//             Console.WriteLine($"{x}");
//         }

//         List<string> ls = ["a","b","c"]; // This is called collection expression

//         foreach(string i in ls){
//             System.Console.WriteLine(i);
//         }

//         HCL obj = new HCL(1,"Arihant");
        
//         System.Console.WriteLine(obj);
//         Console.ReadKey();
//     }
// }


public class Kishan{
    public void factorial(){
        System.Console.WriteLine("Factorial done");
        
    }
}

//Create an extension method
public static class extensionMethod{
    public static void Palindrome(this Kishan obj){
        System.Console.WriteLine("I am palindrome");
    }
}

class HCL{
    public static void Main(){
        Kishan obj = new Kishan();
        obj.Palindrome();
        obj.factorial();
        
       
    }
}