using System;
using FluentValidation;
using MyFirstApp.Models.DTO;
namespace myFirstApp.Models
{
    public class EmployeeValidator:AbstractValidator<EmployeeDTO>
    {
        public EmployeeValidator()
        {
            RuleFor(x=>x.name).NotEmpty().WithMessage("Name fill");
        }
    }
}