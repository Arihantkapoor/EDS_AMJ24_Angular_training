// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using myFirstApp.Models;

// namespace myFirstApp.Repository
// {
//     public interface IEmployeeRepository
//     {
//         IEnumerable<Employee> GetAllEmployees();

//         int saveEmployee(Employee emp);

//         int updateEmployee(Employee emp);

//         int deleteEmployee(int id);

//         Employee searchEmployee(int id);
//     }
// }


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myFirstApp.Models;

namespace Myfirstapp.Repository
{
    public interface IEmployeeRepository
    {
        public Task<IEnumerable<Employee>> getAllEmployees();

        Task<IEnumerable<Employee>> saveEmployee(Employee emp);

        Task<IEnumerable<Employee>> deleteEmployee(int id);

        Task<IEnumerable<Employee>> updateEmployee(Employee emp);

        Task<Employee> searchEmployee(int id);

       
    }
}