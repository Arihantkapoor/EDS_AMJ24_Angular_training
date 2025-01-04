using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myfirstApp.dbmodel;
using myfirstApp.Models;

namespace myfirstApp.Repository
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Employee>> getAllEmployees();

        // IEnumerable<Product> getAllProducts();

        Task<IEnumerable<Employee>> saveEmployee(Employee emp);

        Task<IEnumerable<Employee>> updateEmployee(Employee emp);

        Task<IEnumerable<Employee>> deleteEmployee(int id);

        Task<Employee> searchEmployee(int id);
    }
}