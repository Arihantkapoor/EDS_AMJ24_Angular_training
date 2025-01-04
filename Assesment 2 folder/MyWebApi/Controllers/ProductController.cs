using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyWebApi.DAL;
using MyWebApi.Model;

namespace MyWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        ProductDBContext _context;
        public ProductController(ProductDBContext context)
        {
            _context = context;
        }
        [HttpGet("GetAllProducts")]
        public IEnumerable<Product> GetAllProducts(){
            return _context.Products.ToList();
        }

        [HttpPost]
        public IActionResult AddProduct(Product product){
            _context.Products.Add(product);
            _context.SaveChanges();
            return Ok();
        }

        // lskjdfsoifj
    }
}