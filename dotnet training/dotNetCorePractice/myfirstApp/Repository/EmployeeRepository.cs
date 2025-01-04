using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myfirstApp.Controllers;
using myfirstApp.DAL;
using myfirstApp.dbmodel;
using myfirstApp.Models;

namespace myfirstApp.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        EmployeeDBContext context;

        // Dotnet8Context dotnetcontext;
        public EmployeeRepository(EmployeeDBContext _context
        // , Dotnet8Context _dotnetcontext
        )
        {
            context = _context;
            // dotnetcontext = _dotnetcontext;
        }
        async Task<IEnumerable<Employee>> IEmployeeRepository.deleteEmployee(int id)
        {
           Employee emp = context.employees.Where(x=>x.id == id).FirstOrDefault();
           context.employees.Remove(emp);
           await context.SaveChangesAsync();
           return await context.employees.ToListAsync();  
        }


        async Task<IEnumerable<Employee>> IEmployeeRepository.getAllEmployees()
        {
           return await context.employees.ToListAsync();
        }

        // IEnumerable<Product> IEmployeeRepository.getAllProducts(){
        //     return dotnetcontext.Products.ToList();
        // }

        async Task<IEnumerable<Employee>> IEmployeeRepository.saveEmployee(Employee emp)
        {
            context.employees.Add(emp); //added to local memory of DbSet
            await context.SaveChangesAsync(); //permanent save to database
            return await context.employees.ToListAsync();
        }

        async Task<Employee> IEmployeeRepository.searchEmployee(int id)
        {
             return await context.employees.FindAsync(id);
        }

        async Task<IEnumerable<Employee>> IEmployeeRepository.updateEmployee(Employee emp)
        {
           Employee e = context.employees.Find(emp.id);
           e.name = emp.name;
            // context.employees.Update(emp);
           await context.SaveChangesAsync();
           return await context.employees.ToListAsync();
        }
    }
}