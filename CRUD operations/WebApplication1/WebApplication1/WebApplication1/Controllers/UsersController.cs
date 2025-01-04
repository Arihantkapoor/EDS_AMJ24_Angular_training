using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Model;
namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly Apidbcontext _context;
        public UsersController(Apidbcontext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("GetUsers")]
        public IQueryable<Users> GetUsers()
        {
            //IEnumerable<Users> ls=  _context.Users.Where(x=>x.Mobile==1234);
            IQueryable<Users> ls = _context.Users.Where(x => x.Mobile == 1234);
            ls = ls.Take<Users>(3);
            return ls;
            
        }
        [HttpPost]
        [Route("PostUsers")]
        public async Task<Users> PostUsers(Users users)
        {
            _context.Users.Add(users);
            await _context.SaveChangesAsync();
            return users;
        }
        [HttpPatch]
        [Route("UpdateUser")]
        public async Task<Users> UpdateUser(Users users)

        {
            var user = _context.Users.Find(users.Id);
            user.Name = users.Name;
            user.Mobile = users.Mobile;
            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return users;
        }
        [HttpDelete]
        [Route("DeleteUser/{id}")]
        public  bool DeleteUser(int id)
        {
            bool a = false;
            var user =  _context.Users.Find(id);
            if (user != null)
            {
                a = true;
                _context.Entry(user).State = EntityState.Deleted;
                _context.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;
        }

    }
}
