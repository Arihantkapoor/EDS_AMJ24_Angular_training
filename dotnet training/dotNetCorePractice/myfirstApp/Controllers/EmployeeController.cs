using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using myfirstApp.Models;
using myfirstApp.Models.DTO;
using myfirstApp.Repository;

namespace myfirstApp.Controllers
{
    [ApiController]
    // [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        IEmployeeRepository repo;
        IMapper map;

        public EmployeeController(IEmployeeRepository _repo, IMapper _map)
        {
            repo = _repo;
            map = _map;
        }
        
        // [HttpGet("LoadProducts")]
        // public IActionResult getAllProducts(){
        //     return Ok(repo.getAllProducts());
        // }
        [Route("emp/alldata")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> getAllEmployees(){
            return Ok( await repo.getAllEmployees());
        }

        [HttpPost("PostData")]
        public async Task<ActionResult<IEnumerable<Employee>>> saveEmployees(EmployeeDTO employee){
            // Employee e = new Employee();
            // e.id = employee.id;
            // e.name = employee.name;
           Employee e =  map.Map<Employee>(employee);
            return Ok( await repo.saveEmployee(e));
;        }
        
        [HttpGet("SearchData")]
        public async Task<ActionResult<Employee>> SearchEmployees(int id){
            return Ok( await repo.searchEmployee(id));
        }
        [HttpPut("UpdateData")]
        public async Task<ActionResult<IEnumerable<Employee>>> UpdateEmployee(EmployeeDTO employee){
            // Employee e = new Employee();
            // e.id = employee.id;
            // e.name = employee.name;
            Employee e =  map.Map<Employee>(employee);
            return Ok(await repo.updateEmployee(e));
        }

        [HttpDelete("DeleteData")]
        public async Task<ActionResult<IEnumerable<Employee>>> DeleteEmployee(int id){
            return Ok( await repo.deleteEmployee(id));
        }
    }
}