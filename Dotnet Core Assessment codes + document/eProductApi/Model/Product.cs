using System.ComponentModel.DataAnnotations;
namespace eProductApi.Model
{
    public class Product
    {
        [Key]
        public int ProductID {get;set;}
        public string ProductName {get;set;}
        public int ProductPrice {get;set;}

    }
}