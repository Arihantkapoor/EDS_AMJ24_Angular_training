using eProductApi.Model;
using Microsoft.EntityFrameworkCore;

namespace eProductApi.DAL
{
    public class ProductDBContext: DbContext
    {
        public ProductDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<Product> Products {get;set;}
    }
}