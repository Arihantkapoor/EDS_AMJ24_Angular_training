using eProductApi.Model;

namespace eProductApi.Repository
{
    public interface IProductRepository
    {
         Task<IEnumerable<Product>> GetAllProducts();
         Task<IEnumerable<Product>> AddProduct(Product productDTO);
         Task<IEnumerable<Product>> DeleteProduct(int id);
         Task<IEnumerable<Product>> UpdateProduct(Product productDTO);
    }
}