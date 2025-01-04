using System;
using System.Collections.Generic;

namespace MyFirstApp.dbmodel;

public partial class Product
{
    public int Prodid { get; set; }

    public string Prodname { get; set; }

    public int? Prodprice { get; set; }
}
