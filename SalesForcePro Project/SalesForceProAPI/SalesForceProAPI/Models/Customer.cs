using System;
using System.Collections.Generic;

namespace SalesForceProAPI.Models;

public partial class Customer
{
    public int Id { get; set; }

    public string? CustomerName { get; set; }

    public string? Email { get; set; }

    public string? Mobile { get; set; }

    public string? CustomerAddress { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}
