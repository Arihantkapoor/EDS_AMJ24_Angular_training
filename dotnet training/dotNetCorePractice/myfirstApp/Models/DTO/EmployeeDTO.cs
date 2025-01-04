using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace myfirstApp.Models.DTO
{
    public class EmployeeDTO
    {   [Key]
        public int id { get; set; }
        // [Required]
        public string name { get; set; }
        
    }
}