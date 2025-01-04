using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyFirstApp.dbmodel;


namespace Myfirstapp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {

        DatabaseFirstApproachContext context;
        public ProductController(DatabaseFirstApproachContext _context)
        {
            context=_context;
        }

        [HttpGet("getProducts")]

        public IActionResult GetAllProduct(){
            return Ok(context.Products.ToList());
        }
    }
}