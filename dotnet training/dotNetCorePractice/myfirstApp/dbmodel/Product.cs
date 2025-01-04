using System;
using System.Collections.Generic;

namespace myfirstApp.dbmodel;

public partial class Product
{
    public int ProdId { get; set; }

    public string ProdName { get; set; }

    public int? Price { get; set; }
}
