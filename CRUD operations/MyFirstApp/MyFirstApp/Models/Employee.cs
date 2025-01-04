using System.ComponentModel.DataAnnotations;

public class Employee
{
    [Key]
    public int id { get; set; }
    
    [Required]
    public string name { get; set; }
}