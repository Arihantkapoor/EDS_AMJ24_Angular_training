// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using AutoMapper;
// using Microsoft.AspNetCore.Mvc;
// using myFirstApp.Models;
// using myFirstApp.Models.DTO;
// using myFirstApp.Repository;

// namespace myFirstApp.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class EmployeeController : ControllerBase
//     {
//         IEmployeeRepository repo;

//         IMapper map;

//         public EmployeeController(IEmployeeRepository _repo,IMapper _map)
//         {
//             repo = _repo;
//             map = _map;

//         }


//         [HttpGet("loadData")]
//         public IActionResult GetAllEmployee(){
//             return Ok(repo.GetAllEmployees());
//         }

        
//         [HttpPost("PostData")]
//         public IActionResult SaveEmployee(Employee emp){
//             // Employee e = new Employee();
//             // e.id = emp.id;
//             // e.name = emp.name;
//             Employee e = map.Map<Employee>(emp);
//             return Ok(repo.saveEmployee(e));
//             // return Ok(repo.saveEmployee(emp));
//         }

//         [HttpGet("SearchData")]
//         public IActionResult SearchEmployee(Employee emp){
            
//             return Ok(repo.saveEmployee(emp));
//         }

//         [HttpPut("UpdateData")]
//         public IActionResult UpdateEmployee(EmployeeDTO emp){
//             // Employee e = new Employee();
//             // e.id = emp.id;
//             // e.name = emp.name;
//             Employee e = map.Map<Employee>(emp);
//             return Ok(repo.updateEmployee(e));
//         }

//         [HttpDelete("DeleteData")]
//         public IActionResult DeleteEmployee(int id){
//             return Ok(repo.deleteEmployee(id));
//         }
//     }
// }


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Myfirstapp.Repository;
using MyFirstApp.Models.DTO;

namespace myfirstapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        IEmployeeRepository repo;
        IMapper map;
        public EmployeeController(IEmployeeRepository _repo,IMapper _map){
            repo=_repo;
            map=_map;
        }

        
        [HttpGet("loadData")]
        public async Task<ActionResult<IEnumerable<Employee>>> GetAllEmployees(){
            return  Ok(await repo.getAllEmployees());
        }
        [HttpPost("PostData")]
        public async Task<ActionResult<IEnumerable<Employee>>> SaveEmployee(EmployeeDTO emp){
            // Employee e=new Employee();
            // e.id=emp.id;
            // e.name=emp.name;
            Employee e=map.Map<Employee>(emp);
            return Ok(await repo.saveEmployee(e));
        }

        [HttpGet("SearchData")]
        public async Task<ActionResult<Employee>> SearchEmployee(int id){
            return Ok(await repo.searchEmployee(id));
        }
        [HttpPut("UpdateData")]
        public async Task<ActionResult<IEnumerable<Employee>>> UpdateEmployee(EmployeeDTO emp){
            // Employee e=new Employee();
            // e.id=emp.id;
            // e.name=emp.name;
            Employee e=map.Map<Employee>(emp);
            return Ok(await repo.updateEmployee(e));
        }
        [HttpDelete("DeleteData")]
        public async Task<ActionResult<IEnumerable<Employee>>> DeleteEmployee(int id){
            return Ok(await repo.deleteEmployee(id));
        }

        
        
    }
}