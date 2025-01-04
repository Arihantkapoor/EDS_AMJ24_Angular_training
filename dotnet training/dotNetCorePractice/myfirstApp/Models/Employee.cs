using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myfirstApp.Models
{
    public class Employee
    {
        [Key]
        public int id { get; set; }
       
        public string name { get; set; }
    }
}