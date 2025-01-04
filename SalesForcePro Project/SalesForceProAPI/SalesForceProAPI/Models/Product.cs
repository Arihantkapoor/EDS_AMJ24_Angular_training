using System;
using System.Collections.Generic;

namespace SalesForceProAPI.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? ProductName { get; set; }

    public string? ProductPrice { get; set; }

    public string? ProductDescription { get; set; }

    public string? Quantity { get; set; }

    public string? IsAvailable { get; set; }

    public int? Discount { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
