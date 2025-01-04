using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyWebApi.Model;

namespace MyWebApi.DAL
{
    public class ProductDBContext: DbContext
    {
        public ProductDBContext(DbContextOptions options):base(options)
        {
            
        }

        public DbSet<Product> Products {get;set;}
    }
}