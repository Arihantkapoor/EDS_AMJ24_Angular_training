using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using domain;

namespace DAL
{
    public class EmployeeDBContext: DbContext
    {
        public EmployeeDBContext(DbContextOptions dbContextOptions): base(dbContextOptions)
        {

        }

        public DbSet<Employee> employees {get;set;} //table name
    }
}