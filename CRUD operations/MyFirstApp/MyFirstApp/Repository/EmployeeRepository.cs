// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using myFirstApp.DAL;
// using myFirstApp.Models;

// namespace myFirstApp.Repository
// {
//     public class EmployeeRepository : IEmployeeRepository
//     {
//         EmployeeDBContext context;
//         public EmployeeRepository(EmployeeDBContext _context)
//         {
//             context = _context;
//         }
//         int IEmployeeRepository.deleteEmployee(int id)
//         {
//             Employee emp = context.employees.Where(x=>x.id==id).FirstOrDefault();
//             context.Remove(emp);
//             return context.SaveChanges();
//         }

//         IEnumerable<Employee> IEmployeeRepository.GetAllEmployees()
//         {
//            return context.employees.ToList();
//         }

//         int IEmployeeRepository.saveEmployee(Employee emp)
//         {
//             context.employees.Add(emp);//added to local memory of DBset
//             return context.SaveChanges();
//         }

//         Employee IEmployeeRepository.searchEmployee(int id)
//         {
//             return context.employees.Find(id);
//         }

//         int IEmployeeRepository.updateEmployee(Employee emp)
//         {
//             Employee e = context.employees.Find(emp.id);
//             e.name = emp.name;
//             // context.employees.Update(emp);
//             return context.SaveChanges();
//         } 
//     }
// }


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myFirstApp.Models;
using MyFirstApp.DAL;
using MyFirstApp.dbmodel;

namespace Myfirstapp.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        EmployeeDBContext context;
       
        public EmployeeRepository(EmployeeDBContext _context){
            context=_context;
           
        }

       

        async Task<IEnumerable<Employee>> IEmployeeRepository.deleteEmployee(int id)
        {
            
            Employee emp=context.employees.Where(x=>x.id==id).FirstOrDefault();
            context.Remove(emp);
            await context.SaveChangesAsync();

            return await context.employees.ToListAsync();

        }

        async Task<IEnumerable<Employee>> IEmployeeRepository.getAllEmployees()
        {
            return await context.employees.ToListAsync();
        }

        async Task<IEnumerable<Employee>> IEmployeeRepository.saveEmployee(Employee emp)
        {
            context.employees.Add(emp);//added to local memory of DBSet
            await context.SaveChangesAsync();//permanent save to database
            return await context.employees.ToListAsync();
        
        }

        async Task<Employee> IEmployeeRepository.searchEmployee(int id)
        {
            return await context.employees.FindAsync(id);
        }

        async Task<IEnumerable<Employee>> IEmployeeRepository.updateEmployee(Employee emp)
        {
            // Employee e=context.employees.Find(emp.id);
            // e.name=emp.name;
            context.employees.Update(emp);
            await context.SaveChangesAsync();
            return await context.employees.ToListAsync();
        }
    }
}