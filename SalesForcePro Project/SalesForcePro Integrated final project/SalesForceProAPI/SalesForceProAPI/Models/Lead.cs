using System;
using System.Collections.Generic;

namespace SalesForceProAPI.Models;

public partial class Lead
{
    public int Id { get; set; }

    public string? LeadName { get; set; }

    public string? Email { get; set; }

    public string? Mobile { get; set; }

    public string? LeadAddress { get; set; }

    public string? Interest { get; set; }

    public string? Contacted { get; set; }
}
