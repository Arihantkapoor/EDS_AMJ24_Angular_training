using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SalesForceProAPI.Models;
namespace SalesForceProAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginRegisterController : ControllerBase
    {
        SalesForceProContext _context;

        public LoginRegisterController(SalesForceProContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult<IEnumerable<UserCredential>>> Register(UserCredential userCredential)
        {
            _context.UserCredentials.Add(userCredential);
            _context.SaveChanges();
            return await _context.UserCredentials.ToListAsync();
        }

        [HttpPost]
        [Route("Login")]
        public async Task<UserCredential> Login(Login login)
        {
            var user = await _context.UserCredentials.SingleOrDefaultAsync(x => x.Email == login.Email && x.UsersPassword == login.password);

            if (user == null)
            {
                return new UserCredential { Email = null };
            }

            return user;
        }


    }
}