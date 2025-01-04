using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SalesForceProAPI.Models;

namespace SalesForceProAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly SalesForceProContext _context;
        public ProductController(SalesForceProContext context)
        {
            _context = context;
        }
        [HttpGet("GetAllUserLoginData")]
        public async Task<ActionResult<IEnumerable<UserCredential>>> GetUserLogin()
        {
            return await _context.UserCredentials.ToListAsync();
        }

    }
}
