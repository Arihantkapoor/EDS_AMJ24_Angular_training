using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myfirstApp.Models;

namespace myfirstApp.DAL
{
    public class EmployeeDBContext: DbContext
    {

        //here DbContextOptions retrieve the connection string from json file and passed to DbContext by constructor chaining
        public EmployeeDBContext(DbContextOptions dbContextOptions): base(dbContextOptions)
        {

        }

        public DbSet<Employee> employees {get;set;} //table name
    }
}