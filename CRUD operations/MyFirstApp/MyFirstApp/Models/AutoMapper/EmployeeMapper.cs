using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MyFirstApp.Models.DTO;

namespace MyFirstApp.Models.AutoMapper
{
    public class EmployeeMapper:Profile
    {
         public EmployeeMapper()
        {
            CreateMap<EmployeeDTO,Employee>();
        }
    }
}