using System;
using FluentValidation;
using FluentValidation.AspNetCore;
using myfirstApp.Models.DTO;

namespace myfirstApp.Models
{
    public class EmployeeValidator: AbstractValidator<EmployeeDTO>
    {
        public EmployeeValidator()
        {
            RuleFor(x=>x.name).NotEmpty().WithMessage("Please provide name");
        }
    }
}