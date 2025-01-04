using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.OpenApi.Expressions;
using myfirstApp.Models.DTO;

namespace myfirstApp.Models.AutoMapper
{
    public class EmployeeMapper:Profile
    {
        public EmployeeMapper()
        {
            CreateMap<EmployeeDTO,Employee>();
        }   
    }
}