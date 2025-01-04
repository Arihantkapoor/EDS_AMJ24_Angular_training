using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AuthIdentityAPI.DAL
{
    public class AuthDBContext: IdentityDbContext<IdentityUser>
    {
        public AuthDBContext(DbContextOptions options) : base(options)
        {
            
        }
    }
}
