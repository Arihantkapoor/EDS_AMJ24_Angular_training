using System;
using System.Collections.Generic;

namespace SalesForceProAPI.Models;

public partial class UserCredential
{
    public int Id { get; set; }

    public string? UsersName { get; set; }

    public string? Email { get; set; }

    public string? Mobile { get; set; }

    public string? UsersPassword { get; set; }
}
