

using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Model
{
    public class Apidbcontext : DbContext
    {
        public Apidbcontext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Users> Users { get; set; }

        public DbSet<Product> Product { get; set; } 
    }
}
