using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Model
{
    public class Users
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public long Mobile { get; set; }
    }
}
