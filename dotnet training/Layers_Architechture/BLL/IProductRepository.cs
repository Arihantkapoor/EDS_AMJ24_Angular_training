using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Identity.Client;
using domain;

namespace BLL
{
    public interface IProductRepository
    {
        IEnumerable<Product> getAllProducts();

       Product searchProductById(int id);
       
        void saveProduct(Product product);
    }
}