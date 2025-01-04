using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SalesForceProAPI.Models;

public partial class Product
{
    public int Id { get; set; }
    [Required]
    public string ProductName { get; set; }
    [Required]
    public int Price { get; set; }
    [Required]
    public int Qty { get; set; }
    public string ProductDescription { get; set; }

    public string IsAvailable { get; set; }
    public int Discount { get; set; }
    //public int Id { get; set; }

    //public string? ProductName { get; set; }

    //public string? ProductPrice { get; set; }

    //public string? ProductDescription { get; set; }

    //public string? Quantity { get; set; }

    //public string? IsAvailable { get; set; }

    //public int? Discount { get; set; }

    //public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
