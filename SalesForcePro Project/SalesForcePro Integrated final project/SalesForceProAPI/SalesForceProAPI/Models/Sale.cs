using System;
using System.Collections.Generic;

namespace SalesForceProAPI.Models;

public partial class Sale
{
    public int Id { get; set; }

    public int? CustomerId { get; set; }

    public string? CustomerName { get; set; }

    public int? ProductId { get; set; }

    public string? ProductName { get; set; }

    public string? ProductPrice { get; set; }

    public string? Sellquantity { get; set; }

    public DateTime? Selldate { get; set; }

    //public virtual Customer? Customer { get; set; }

    //public virtual Product? Product { get; set; }
}
