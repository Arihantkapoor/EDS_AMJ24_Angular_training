// See https://aka.ms/new-console-template for more information

using System.Net;

delegate void myDelegate();
class HCL
{
    static void Main(){
        // myDelegate obj = new myDelegate(download);
        Console.WriteLine("Main method of c#");
    }

    static void download(){
        Console.WriteLine("Download method");
         
    }
}
