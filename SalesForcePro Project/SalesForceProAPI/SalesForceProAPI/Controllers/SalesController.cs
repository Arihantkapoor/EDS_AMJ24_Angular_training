using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SalesForceProAPI.Models;

namespace SalesForceProAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        SalesForceProContext _context;
        public SalesController(SalesForceProContext context)
        {
            _context = context;
        }
        [HttpPost]
        [Route("AddSale")]
        public async Task<Sale> CreateSale(Sale sale)
        {
             _context.Sales.Add(sale);
            await _context.SaveChangesAsync();
            return  sale;
        }

        [HttpGet]
        [Route("GetAllSales")]
        public async Task<IEnumerable<Sale>> GetAllSales()
        {
            return await _context.Sales.ToListAsync();
        }

    }
}
