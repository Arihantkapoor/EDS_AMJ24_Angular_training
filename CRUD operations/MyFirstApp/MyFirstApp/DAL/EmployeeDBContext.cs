using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MyFirstApp.DAL
{
    public class EmployeeDBContext : DbContext
    {
        //here Dbcontextoptions retrieve connectionstring from JSON (appsettings.json) file and pass to Dbcontext by constructor chaining
        public EmployeeDBContext(DbContextOptions options) : base(options)
        {
            
        }
        //below, same name table generated in database SSMS
        public DbSet<Employee> employees{get; set;}
    }
}