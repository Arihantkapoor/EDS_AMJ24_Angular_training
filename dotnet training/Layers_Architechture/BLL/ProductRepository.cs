using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using domain;

namespace BLL
{
    public class ProductRepository : IProductRepository
    {
       static List<Product> lsProduct;
        public ProductRepository()
        {
              lsProduct = new List<Product>{
                new Product{productID = 1, productName = "Laptop", productPrice = 78000},
                new Product{productID = 2, productName = "Headphones", productPrice = 1599},
                new Product{productID = 3, productName = "TV", productPrice = 10000},
              };
        }
        public IEnumerable<Product> getAllProducts()
        {
            return lsProduct;
        }

        public void saveProduct(Product product)
        {
           lsProduct.Add(product);
        }

        public Product searchProductById(int id)
        {
            Product p = lsProduct.Where(x=>x.productID==id).FirstOrDefault();
            return p;
        }
    }
}