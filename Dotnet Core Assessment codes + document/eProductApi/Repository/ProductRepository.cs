using eProductApi.DAL;
using eProductApi.Model;
using Microsoft.EntityFrameworkCore;

namespace eProductApi.Repository
{
    public class ProductRepository : IProductRepository
    {
        ProductDBContext _context;
        public ProductRepository(ProductDBContext context){
            _context = context;
        }

        public async Task<IEnumerable<Product>> AddProduct(Product product)
        {   
           _context.Products.Add(product);
           _context.SaveChanges();
           return await _context.Products.ToListAsync();
            
        }

        public async Task<IEnumerable<Product>> DeleteProduct(int id)
        {
            _context.Products.Remove(_context.Products.Find(id));
            _context.SaveChanges();
            return await _context.Products.ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetAllProducts()
        {
           return await _context.Products.ToListAsync();
        }

        public async Task<IEnumerable<Product>> UpdateProduct(Product product)
        {
            Product product1 = _context.Products.Find(product.ProductID);
            product1.ProductName = product.ProductName;
            product1.ProductPrice = product.ProductPrice;

            _context.Products.Update(product1);
            _context.SaveChanges();
            return await _context.Products.ToListAsync();
        }
    }
}